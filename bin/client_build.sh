#!/bin/bash

script_name=$(basename $0)

usage() {
  cat - <<EOS
Usage: ${script_name} [OPTIONS]

Options:
  -h, --help
    Show help.
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
    "--api_key" )
      if is_enabled_option_value $2; then
        api_key=$2
        shift 2
      else
        shift
      fi
      ;;
    "--auth_domain" )
      if is_enabled_option_value $2; then
        auth_domain=$2
        shift 2
      else
        shift
      fi
      ;;
    "--database_url" )
      if is_enabled_option_value $2; then
        database_url=$2
        shift 2
      else
        shift
      fi
      ;;
    "--firebase_projcetid" )
      if is_enabled_option_value $2; then
        firebase_projcetid=$2
        shift 2
      else
        shift
      fi
      ;;
    "--messaging_senderid" )
      if is_enabled_option_value $2; then
        messaging_senderid=$2
        shift 2
      else
        shift
      fi
      ;;
    "--app_id" )
      if is_enabled_option_value $2; then
        app_id=$2
        shift 2
      else
        shift
      fi
      ;;
    "--storage_bucket" )
      if is_enabled_option_value $2; then
        storage_bucket=$2
        shift 2
      else
        shift
      fi
      ;;
    "--measurement_id" )
      if is_enabled_option_value $2; then
        measurement_id=$2
        shift 2
      else
        shift
      fi
      ;;
  esac
done

if [ -z "$api_key" ] || [ -z "$storage_bucket" ] || [ -z "$auth_domain" ] || [ -z "$firebase_projcetid" ] || [ -z "$database_url" ] || [ -z "$messaging_senderid" ] || [ -z "$app_id" ] || [ -z "$measurement_id" ]; then
  echo "Required option absent."
  usage
  exit 1
fi

cd $(dirname $0)/..
wd=$(pwd)

set -eux

prepare() {
  cd ${wd}/client/src/environments
  sed -i -e "s/API_KEY/${api_key}/" environment.ts
  sed -i -e "s/AUTH_DOMAIN/${auth_domain}/" environment.ts
  sed -i -e "s|DATABASE_URL|${database_url}|" environment.ts
  sed -i -e "s/FIREBASE_PROJECTID/${firebase_projcetid}/" environment.ts
  sed -i -e "s|STORAGE_BUCKET|${storage_bucket}|" environment.ts
  sed -i -e "s/MESSAGGE_SEND_ID/${messaging_senderid}/" environment.ts
  sed -i -e "s/APP_ID/${app_id}/" environment.ts
  sed -i -e "s/MEASUREMENT_ID/${measurement_id}/" environment.ts

  sed -i -e "s/API_KEY/${api_key}/" environment.prod.ts
  sed -i -e "s/AUTH_DOMAIN/${auth_domain}/" environment.prod.ts
  sed -i -e "s|DATABASE_URL|${database_url}|" environment.prod.ts
  sed -i -e "s/FIREBASE_PROJECTID/${firebase_projcetid}/" environment.prod.ts
  sed -i -e "s|STORAGE_BUCKET|${storage_bucket}|" environment.prod.ts
  sed -i -e "s/MESSAGGE_SEND_ID/${messaging_senderid}/" environment.prod.ts
  sed -i -e "s/APP_ID/${app_id}/" environment.prod.ts
  sed -i -e "s/MEASUREMENT_ID/${measurement_id}/" environment.prod.ts
}

prepare
npm install
npm run build:gae