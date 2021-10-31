const core = require('@actions/core');
const github = require('@actions/github');
const { createAppAuth } = require("@octokit/auth-app")

const appId = core.getInput('app_id');
const installationId = core.getInput('installation_id');
const privateKey = core.getInput('private_key');

const auth = createAppAuth({
    appId: appId,
    privateKey: privateKey,
})

// Retrieve installation access token
auth({
    type: "installation",
    installationId: installationId,
}).then(resp => {
    console.log(`::set-output name=token::${resp.token}`)
    process.exit(0);
}).catch(err => {
    console.error(err)
    process.exit(1);
})
