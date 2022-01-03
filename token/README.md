# Token

This action converts application credentials (private key, app id, installation id) to access token that can be used to interact with GitHub API or perform git operations.

## Usage
```
  - id: create-token
    uses: igt-open-source/github-actions/token@main
    with:
      private_key: ${{ secrets.actions_private_key }}
      app_id: 12345
      installation_id: 1234567
  - uses: actions/checkout@v2
    with:
      token: ${{ steps.create-token.outputs.token }}
```
