# schemas

Schemas used by the powerd6 roleplaying system

[![Netlify Status](https://api.netlify.com/api/v1/badges/5b8476e0-8260-4367-b8db-1962fce55269/deploy-status)](https://app.netlify.com/sites/powerd6-schemas/deploys)
[![Powered by Docsify](https://img.shields.io/badge/powered%20by-Docsify-brightgreen)]()
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
[![Open Issues](https://img.shields.io/github/issues/powerd6/schemas)](https://github.com/powerd6/schemas/issues)

## Using this project

This project is built with [zod](https://zod.dev).

By creating zod schemas, and then generating interfaces from them, we can document, validate and use multiple types.


### Organization

Each custom type is created under the `src/lib/schemas` folder.

Shared components and types are stored under the `src/lib/utils` folder.

All types are exposed under the `src/index.ts` file.
