const core = require('@actions/core');
const { Octokit } = require("@octokit/action");

const octokit = new Octokit();
const [owner, _repo] = process.env.GITHUB_REPOSITORY.split("/");
const extractedField = core.getInput('extractedField');
const topic = core.getInput('topic', { required: false });

octokit.paginate(octokit.rest.repos.listForOrg, {
    org: owner,
    mediaType: {
        previews: ["mercy-preview"],
    }
})
.then(response =>
    core.setOutput("repos", response
        .filter(repo => !topic  || repo.topics.includes(topic))
        .map(repo => repo[extractedField])
        .join()))
.catch(err => core.error(err));
