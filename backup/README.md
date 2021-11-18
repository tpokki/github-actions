# Backup

This action uses the GitHub App credentials to clone all the repositories from the organization, and store them as tar.gz file in Google Storage Bucket.

## Usage
Example workflow file that implements backups that are stored both as GitHub Action artifacts (last 7), as well as copy to Google Cloud Storage.

```
name: Backup
on:
  schedule:
    cron: '42 00 * * *'

jobs:
  nightly-backup-job:
    name: Backup
    runs-on: ubuntu-latest
    steps:
      - name: Backup
        id: backup
        uses: tpokki/github-actions/backup@main
        with:
          private_key: ${{ secrets.GITHUB_APP_KEY }}
          app_id: 123456
          installation_id: 1234567890
          artifact_enabled: true
          artifact_retention: 7
          gcp_enabled: true
          gcp_bucket: my-github-backup-bucket
          gcp_sa_key: ${{ secrets.GOOGLE_CREDENTIALS }}
```