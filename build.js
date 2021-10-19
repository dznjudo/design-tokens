const StyleDictionary = require('style-dictionary').extend({
  
  source: ['src/tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/build/scss/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables'
      }]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'src/build/css/',
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
      buildPath: 'src/build/json/',
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