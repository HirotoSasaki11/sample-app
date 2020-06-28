#!/bin/bash

script_name=$(basename $0)

usage() {
  cat - <<EOS
Usage: ${script_name} [OPTIONS]

Options:
  -h, --help
    Show help.
  --project [PROJECT_ID]
    requred
    Set project id
  --apikey [API_KEY]
    requred
    Set Firestore apikey.
   --authdomain [AUTH_DOMAIN]
    requred
    Set Firestore authdomain.
   --firebase_projcetid [FIREBASE_PROJECT_ID]
    requred
    Set Firestore firebase_projcetid.

EOS
}

is_enabled_option_value() {
  [[ $1 ]] && [[ ! -z $1 ]] && [[ ! $1 =~ ^-+ ]]
}
#####################################################
# Parse Optoins...
#####################################################
for OPT in "$@"; do
  case "$OPT" in
    "--h" | "--help" )
      usage
      exit 1
      ;;
    "--project" )
      if is_enabled_option_value $2; then
        project_id=$2
        shift 2
      else
        shift
      fi
      ;;
  esac
done

if [ -z "$project_id" ]; then
  echo "Required option absent."
  usage
  exit 1
fi

cd $(dirname $0)/..
wd=$(pwd)

set -eux

deploy() {
  cd ${wd}/client
  gcloud --project ${project_id} --quiet app deploy 
}

deploy
