# List Repositories

This action produces list of repositories for currrent organization/owner. The default output is the `name` of the each repository, this can be changed by setting `extractedField` input variable. To any of the top level attributes of the repository API.

- https://docs.github.com/en/rest/reference/repos#list-organization-repositories

## Usage
The given token must have sufficient privileges to list all repositories.

```
      - uses: tpokki/github-actions/list-repos@main
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          extraectedField: clone_url
```