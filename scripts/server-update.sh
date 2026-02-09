#!/bin/sh
# On the server: run this to stop old app, remove old image, pull latest, and start.
# Usage: ./server-update.sh   or   bash server-update.sh

IMAGE="asif449/cloud-production-website:01"
CONTAINER="cloudproduction-app"

set -e
echo "Stopping and removing container (if any)..."
docker stop "$CONTAINER" 2>/dev/null || true
docker rm -f "$CONTAINER" 2>/dev/null || true

echo "Removing old image so we pull fresh..."
docker rmi "$IMAGE" 2>/dev/null || true

echo "Pulling latest image..."
docker pull "$IMAGE"

echo "Starting container..."
docker run -d \
  --name "$CONTAINER" \
  -p 3000:3000 \
  --restart unless-stopped \
  "$IMAGE"

echo "Done. Check: docker logs -f $CONTAINER"
