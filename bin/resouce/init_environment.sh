#!/bin/bash

script_name=$(basename $0) 
usage() {
  cat - <<EOS
Usage: ${script_name} [OPTIONS]

Options:
  -h, --help
    Show help.
  --deployment-name [DEPLOYMENT_NAME]
    default: sample-app
    Set deployment name.
EOS
}

is_enabled_option_value() {
  [[ $1 ]] && [[ ! -z $1 ]] && [[ ! $1 =~ ^-+ ]]
}

cd $(dirname $0)/../../
wd=`pwd`

#####################################################
# Parse Optoins...
#####################################################
deployment_name=sample-app
project_id=`gcloud config get-value project 2>/dev/null`
region=asia-northeast1
zone=asia-northeast1-a

for OPT in $@; do
  case $OPT in
    "-h" | "--help" )
      usage
      exit 1
      ;;
    "--deployment-name" )
      if is_enabled_option_value $2; then
        deployment_name=$2
        shift 2
      else
        shift
      fi
      ;;
  esac
done


set -eu

echo "GCP Project ID: ${project_id}"
echo "Deployment Name: ${deployment_name}"
echo "API_KEY: ${api_key}" 
echo "Region: ${region}" 
echo "Zone: ${zone}"

read -p "Ok? (y/N): " yn
case "${yn}" in
[yY]*)
  ;;
*)
  echo "abort." ; exit
  ;;
esac
#####################################################

## Enable APIs
echo "Enable GCP Services..."
gcloud services enable deploymentmanager.googleapis.com
gcloud services enable appengine.googleapis.com

read -p "Create GCP Resources? (y/N): " yn
case "${yn}" in
[yY]*)
  # Create GKE Cluster and GCS Buckets
  cd ${wd}/bin/appengine

  echo "Provision GCP Resources..."
  gcloud --quiet deployment-manager deployments create \
    --automatic-rollback-on-error \
    --config ./deployment-manager/environment.yaml \
    ${deployment_name}
*)
  ;;
esac
