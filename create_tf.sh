#!/bin/bash

# Root folder
ROOT_DIR="terraform"

# Create the root folder
mkdir -p $ROOT_DIR

# List of files to create
FILES=(
  "main.tf"
  "variables.tf"
  "outputs.tf"
  "s3.tf"
  "iam.tf"
  "codebuild.tf"
  "codepipeline.tf"
  "cloudfront.tf"
  "terraform.tfvars"
)

# Create each file
for file in "${FILES[@]}"; do
  touch "$ROOT_DIR/$file"
done

# Print success
echo "✅ Terraform project structure created under: $ROOT_DIR/"

