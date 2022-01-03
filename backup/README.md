# Backup

This action uses the GitHub App credentials to clone all the repositories from the organization, and store them as tar.gz file in GitHub Action artifact, Google Storage Bucket, AWS S3 or any combination of them.

## Usage

Input variables for different storage types:

GitHub Action artifact:
```yaml
    artifact_enabled: true
    artifact_retention: <days>
```

Google Storage Bucket:
```yaml
    gcp_enabled: true
    gcp_bucket: <bucket name>
    gcp_sa_key: <service account key>
```

AWS S3:
```yaml
    aws_enabled: true
    aws_region: <aws region>
    aws_s3: <bucket name>
    aws_access_key_id: <aws access key id>
    aws_secret_access_key: <aws secret access key>
```


## Example
Example workflow file that implements backups that are stored both as GitHub Action artifacts (last 7), as well as copy to Google Cloud Storage.

```yaml
name: Backup
on:
  schedule:
    - cron: '42 00 * * *'

jobs:
  nightly-backup-job:
    name: Backup
    runs-on: ubuntu-latest
    steps:
      - name: Backup
        id: backup
        uses: igt-open-source/github-actions/backup@main
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
