# Merge branch

This action merges `head` to `base` branch.

- https://docs.github.com/en/rest/reference/branches#merge-a-branch

## Usage

```
    - uses: tpokki/github-actions/merge@main
      id: merge
      with:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        head: development
        base: master
```
