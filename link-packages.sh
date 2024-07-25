#!/bin/bash

packages=(
  "api-key"
  "auth"
  "cache-inmemory"
  "cart"
  "currency"
  "customer"
  "event-bus-local"
  "file"
  "file-local-next"
  "fulfillment"
  "fulfillment-manual"
  "inventory-next"
  "medusa"
  "notification"
  "notification-local"
  "order"
  "payment"
  "pricing"
  "product"
  "promotion"
  "region"
  "sales-channel"
  "stock-location-next"
  "store"
  "tax"
  "user"
  "workflow-engine-inmemory"
)

for package in "${packages[@]}"; do
  yarn link "../medusa/packages/modules/$package"
done