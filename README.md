# run-source
An unofficial open source package to run Source code from Source Academy (CS1101S) outside of the Source Academy Playground.
There are currently no support for runes.

## Installation
```
$ yarn add run-source
```

## Usage
```
$ yarn run-source <path-to-file>
```
`<path-to-file>` defaults to .\index.source

### Example
```
$ yarn run-source .\s1.source
```

## Config
Configuration file can be found in `config\default.json`
There are only 2 options currently:
- `source-chapter`: 1-4
- `main`: default path to run

### Custom File Extensions
If you are using Visual Studio Code, add the following into your user settings to enable syntax highlighting for *.source files:
```
"files.associations": {
    "*.source": "javascript"
}
```

## Todo
- Add support for runes
