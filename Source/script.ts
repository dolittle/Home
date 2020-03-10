const fs = require('fs');
const { Octokit } = require('@octokit/rest');
// read the API key from key.txt, no newline in the file
const octokit = new Octokit({ auth: fs.readFileSync('key.txt', 'utf8') });

const blackList = ['dolittle-einar', 'Datadolittle', 'dolittle-obsolete'];
const whiteList = 
[
  'dolittle',               'dolittle-timeseries',
  'dolittle-tools',         'dolittle-interaction',
  'dolittle-platform',      'dolittle-entropy',
  'dolittle-build-testing', 'dolittle-runtime',
  'dolittle-edge-packages', 'dolittle-boilerplates',
  'dolittle-edge',          'dolittle-samples',
  'dolittle-fundamentals',  'dolittle-extensions',
  'dolittle-campaigns',     'dolittle-security',
  'dolittle-casestudies',   'dolittle-fabric',
  'dolittle-contribs'
];


// wrap everything in an async function so that we can use await
(async () => {
  // search for all the users (orgs are also users) and filter them
  const orgs = (await octokit.search.users({ q: 'dolittle+type:org' })).data.items
    .filter((org: any) => !blackList.some(black => black === org.login)
  );
  // check if a new org has poppen up that's not in the whitelist
  orgs.map((org: any) => {
    if (!whiteList.some(white => white === org.login)) {
      // found a new org not in the whitelist, lets notify
      console.warn(`Organisation not in whitelist found: ${org.login}`);
    }
  });

  // query for each repo in detail so that we get the name and description part too
  const orgDetailList = await Promise.all(orgs.map(async (org: any) => (await octokit.orgs.get({ org: org.login })).data)) as any;

  console.log('Starting to write to output.md');
  let file = fs.createWriteStream('output.md');

  file.write(`| Organisation | Description | \n`);
  file.write('| --- | --- | \n');
  for (let orgDetails of orgDetailList) {
    const description = orgDetails.description ? orgDetails.description : 'No description';
    // first make a table of all therogs with links to the headers in the bigrepo list
    file.write(`| [${orgDetails.login}](#${orgDetails.login}) | ${description} | \n`);
  }
  file.write('\n');

  for (let orgDetails of orgDetailList) {
    // write the column headers and start the table
    file.write(`### [${orgDetails.login}](${orgDetails.html_url}) \n`);
    const description = orgDetails.description ? orgDetails.description : 'No description';
    file.write(`${description} \n`)

    file.write(`| Repository | Description | \n`);
    file.write('| --- | --- | \n');
    // query for each orgs repos and print them out
    for (let repo of (await octokit.repos.listForOrg({ org: orgDetails.login })).data) {
      file.write(gitDetailToTable(repo));
    }
    // end the table after every organisation
    file.write('\n');
    console.log(`${orgDetails.login} organisation done`)
  }
  console.log('File write complete');
  file.end();
})();

function gitDetailToTable(gitDetail: any) {
  const gitName = gitDetail.name ? gitDetail.name : gitDetail.login;
  const gitDescription = gitDetail.description ? gitDetail.description : 'No description';
  const tableString = `| [${gitName}](${gitDetail.html_url}) | ${gitDescription} |\n`;
  return tableString;
}

