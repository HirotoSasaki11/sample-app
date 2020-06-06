#!/bin/sh

cd $(dirname $0)/../client

set -eux

echo "Run client test..."
npm run test