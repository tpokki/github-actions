# Checkout

This action uses the [token](../token) action to generate access token from application credentials (private key),
and proceeds to perform checkout with [actions/checkout](https://github.com/actions/checkout). In addtion, the git configuration
is adjusted to enable further checkouts and git actions to be done with application credentials.

## Usage
```
      - uses: igt-open-source/github-actions/checkout@main
        with:
          private_key: ${{ secrets.actions_private_key }}
          app_id: 12345
          installation_id: 1234567
```