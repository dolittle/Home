import fs from 'fs';
import { Octokit } from '@octokit/rest';
// read the API key from key.txt, no newline in the file
const octokit = new Octokit({ auth: fs.readFileSync('key.txt', 'utf8') });

const blackList = ['dolittle-einar', 'Datadolittle', 'dolittle-obsolete'];
const whiteList =
  [
    'dolittle', 'dolittle-timeseries',
    'dolittle-tools', 'dolittle-interaction',
    'dolittle-platform', 'dolittle-entropy',
    'dolittle-build-testing', 'dolittle-runtime',
    'dolittle-edge-packages', 'dolittle-boilerplates',
    'dolittle-edge', 'dolittle-samples',
    'dolittle-fundamentals', 'dolittle-extensions',
    'dolittle-campaigns', 'dolittle-security',
    'dolittle-casestudies', 'dolittle-fabric',
    'dolittle-contribs'
  ];

/**
 * Finds all organizations on GitHub containing "dolittle" and filters out the ones from the blacklist.
 * @param blacklist Organisations to ignore.
 */
async function FindAllDolittleOrganisations(blacklist: string[]): Promise<any[]> {
  return (await octokit.search.users({ q: 'dolittle+type:org' })).data.items
    .filter(org => !blackList.some(black => black === org.login));
}

/**
 * Filters out any unknown organisation, and prints a warning if unwhitelisted org is found.
 * @param whitelist Known organizations to keep.
 */
function FilterOnlyKnownOrganisations(orgs: any[], whitelist: string[]): any[] {
  return orgs.filter(org => {
    if (!whiteList.some(white => white === org.login)) {
      // found a new org not in the whitelist, lets notify
      console.warn(`Organisation not in whitelist found: ${org.login}`);
      return false;
    } else {
      return true;
    }
  });
}

/**
 * Gets a detailed response to a single GitHub organisation.
 * @param orgLogin The login name of the requested organisation.
 */
async function GetOrganisationDetails(orgLogin: string): Promise<any> {
  return (await octokit.orgs.get({ org: orgLogin })).data;
}

/**
 * Writes a markdown table of GitHub organisations and their descriptions to the given WriteStream.
 * The table has links to the organisation header anchor later in the file. 
 * @param file An open fs.WriteStream.
 * @param orgs List of detailed GitHub organizations.
 */
function WriteOrganisationListingToFile(file: fs.WriteStream, orgs: any[]): void {
  file.write(`| Organisation | Description | \n`);
  file.write('| --- | --- | \n');
  for (let org of orgs) {
    const description = org.description ? org.description : 'No description';
    // first make a table of all therogs with links to the headers in the bigrepo list
    file.write(`| [${org.login}](#${org.login}) | ${description} | \n`);
  }
  file.write('\n');
}

/**
 * Gets a list of all the repositores belonging to the given organisation.
 * @param orgLogin The login name of the reuested organisations repos.
 */
async function GetRepositoriesForOrganisation(orgLogin: string): Promise<any[]> {
  return (await octokit.repos.listForOrg({ org: orgLogin })).data;
}

/**
 * Creates a single row of the repositorys name (links to the repos page) and it's description.
 * @param repository A repository from octokit.repos
 */
function repositoryToMarkdownTable(repository: any) {
  const gitName = repository.name ? repository.name : repository.login;
  const gitDescription = repository.description ? repository.description : 'No description';
  const tableString = `| [${gitName}](${repository.html_url}) | ${gitDescription} |\n`;
  return tableString;
}


/**
 * Goes through the list of the organisations, prints the orgs name as the header and description as text underneath 
 * before writing out a table with all the orgs repos.
 * @param file An Open fs.WriteStream to the markdown file.
 * @param orgs A list of detailed GitHub organisations
 */
async function WriteOrganisationAndRepositoryListingToFile(file: fs.WriteStream, orgs: any[]): Promise<void> {
  for (let org of orgs) {
    file.write(`### [${org.login}](${org.html_url}) \n`);
    const description = org.description ? org.description : 'No description';
    file.write(`${description} \n`);

    file.write(`| Repository | Description | \n`);
    file.write('| --- | --- | \n');
    for (let repo of (await GetRepositoriesForOrganisation(org.login))) {
      file.write(repositoryToMarkdownTable(repo));
    }
    file.write('\n');
    console.log(`${org.login} organisation done`)
  }
}

/**
 * Wraps everything up into an async function so that we can use await.
 * Calls for all the required functions in the correct order and opens and closes the WriteStream.
 */
(async () => {
  const orgs = FilterOnlyKnownOrganisations(await FindAllDolittleOrganisations(blackList), whiteList);
  const orgDetailList = await Promise.all(orgs.map(org => GetOrganisationDetails(org.login)));
  console.log('Starting to write to output.md');
  let file = fs.createWriteStream('output.md');
  WriteOrganisationListingToFile(file, orgDetailList);
  console.log('Organisation table done')
  await WriteOrganisationAndRepositoryListingToFile(file, orgDetailList);
  file.end();
  console.log('File write complete');
})();
