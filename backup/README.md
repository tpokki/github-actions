# Backup

This action uses the GitHub App credentials to clone all the repositories from the organization, and store them as tar.gz file in Google Storage Bucket.

## Usage
```
      - uses: tpokki/github-actions/backup@main
        with:
          private_key: ${{ secrets.actions_private_key }}
          app_id: 12345
          installation_id: 1234567
          gcp_sa_key: ${{ secrets.gcs_sa_key }}
          gcp_bucket: myorg-github-backups-v1
```