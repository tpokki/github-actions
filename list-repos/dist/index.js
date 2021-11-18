const core = require('@actions/core');
const { Octokit } = require("@octokit/action");

const octokit = new Octokit();
const [owner, _repo] = process.env.GITHUB_REPOSITORY.split("/");
const extractedField = core.getInput('extractedField');

octokit.paginate("GET /orgs/{owner}/repos", {
    owner,
})
.then(response =>
    core.setOutput("repos", response.map(repo => repo[extractedField]).join()))
.catch(err => core.error(err));
