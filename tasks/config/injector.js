'use strict';

/**
 * `injector`
 *
 * Inject references to files into other files
 * (think scripts and stylesheets into an html file).
 *
 * For usage docs see:
 *   https://github.com/klei/grunt-injector
 *
 */

module.exports = function(grunt) {
  grunt.config.set('injector', {
    options: {
      ignorePath: '.tmp',
      addRootSlash: false
    },
    local_dependencies: {
      files: {
        '.tmp/index.html': [
          [
            '.tmp/app.js',
            '.tmp/*.js',
            '.tmp/services/**/*.js',
            '.tmp/shared/**/*.js',
            '.tmp/modules/**/*.js',
          ],
          [
            '.tmp/*.css',
            '.tmp/shared/**/*.css',
            '.tmp/modules/**/*.css',
          ]
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-injector');
};
