const StyleDictionary = require('style-dictionary').extend({
  source: ['src/tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/build/scss/',
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables',
        },
      ],
      options: {
        outputReferences: true,
      },
    },
    css: {
      transformGroup: 'css',
      buildPath: 'src/build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
      options: {
        outputReferences: true,
      },
    },
    web: {
      transformGroup: 'js',
      buildPath: 'src/build/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
      options: {
        showFileHeader: false,
        outputReferences: true,
      },
    },
    web: {
      transformGroup: 'js',
      buildPath: 'src/build/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/module',
        },
      ],
      options: {
        showFileHeader: false,
        outputReferences: true,
      },
    },
  },
})

StyleDictionary.buildAllPlatforms()
