const fetch = require('node-fetch');
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {

    
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const TENOR_TOKEN = github.getInput('TENOR_TOKEN');

    const {context = {}} = github;
    const {pull_request} = context.payload;

    const octokit = github.getOctokit('GITHUB_TOKEN');

    await octokit.issues.createComment ({
        ...context.repo,
        issue_number: pull_request.number,
        body: "Thank you for submitting your pull request!"

    });
}

run();