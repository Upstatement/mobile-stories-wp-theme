#!/bin/bash

set -e

stop_containers() {
  echo "Shutting off containers..."
  echo
  docker-compose stop
  echo
  echo "All done!"
}

trap stop_containers SIGINT

echo "Starting WordPress..."
echo
docker-compose up -d
echo

echo "Starting static dev server.."
echo
npm run dev
echo