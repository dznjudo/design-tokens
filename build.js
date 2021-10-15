const StyleDictionary = require('style-dictionary').extend({
  
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables'
      }]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }],
      options: {
        'outputReferences': true
      }
    },
    web: {
      transformGroup: 'js',
      buildPath: 'build/',
      files: [{
        destination: 'tokens.json',
        format: 'json/nested'
      }],
      options: {
        showFileHeader: false
      }
    }
  }
});

StyleDictionary.buildAllPlatforms();