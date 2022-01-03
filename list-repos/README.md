# List Repositories

This action produces list of repositories for currrent organization/owner. The default output is the `name` of the each repository, this can be changed by setting `extractedField` input variable. To any of the top level attributes of the repository API.

- https://docs.github.com/en/rest/reference/repos#list-organization-repositories

## Usage
The given token must have sufficient privileges to list all repositories.

```
    - uses: igt-open-source/github-actions/list-repos@main
      id: list-repos
      with:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        extractedField: clone_url
    - name: Debug
        run: |
          echo repositories are: ${{ steps.list-repos.outputs.repos }}
```
