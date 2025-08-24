FaceFusion Pinokio
==================

> Industry leading face manipulation platform.

[![Build Status](https://img.shields.io/github/actions/workflow/status/facefusion/facefusion-pinokio/ci.yml.svg?branch=master)](https://github.com/facefusion/facefusion-pinokio/actions?query=workflow:ci)
[![Pinokio](https://img.shields.io/badge/install-pinokio-blue.svg)](https://pinokio.co/item?uri=https://github.com/facefusion/facefusion-pinokio)
![License](https://img.shields.io/badge/license-OpenRAIL--S-green)

## Usage

This repository provides a [Pinokio](https://pinokio.com/) integration for [FaceFusion](https://github.com/facefusion/facefusion).

### Installation

1. Open the project in Pinokio.
2. Choose **Install** from the menu to clone FaceFusion and set up the Conda environment.

### Running

- **Run Default** starts the standard UI.
- **Run Benchmark** opens the benchmarking layout.
- **Run Webcam** launches the webcam interface.

Each mode is available through the Pinokio dashboard or via:

```sh
node scripts/run.js
```

### Updating & Resetting

- **Update** pulls the latest FaceFusion release.
- **Reset** removes the installation and environment.

## License

This project is distributed under the [OpenRAIL-S License](LICENSE.md).
