#!/bin/sh

cd $(dirname $0)/../client

set -eux

npm run build:gae
dev_appserver.py app.yaml