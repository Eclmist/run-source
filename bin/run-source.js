#! /usr/bin/env node

var runSource = require('../run-source').runSource;
runSource(process.argv[2] || config.get('main'));