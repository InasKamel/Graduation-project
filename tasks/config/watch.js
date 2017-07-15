'use strict';

/**
 * `watch`
 *
 * Run tasks whenever watched files change.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */

module.exports = function(grunt) {
  grunt.config.set('watch', {
    options: {
      livereload: true
    },
    index: {
      files: ['app/index.html'],
      tasks: ['copy:index', 'wiredep', 'injector']
    },
    html: {
      files: ['app/**/!(index).html'],
      tasks: ['copy:html']
    },
    less: {
      files: ['app/**/*.less'],
      tasks: ['less']
    },
    js: {
      files: ['Gruntfile.js', 'tasks/**/*.js', 'app/**/*.js'],
      tasks: ['jshint', 'copy:js', 'injector']
    },
    assets: {
      files: ['app/assets/**/*.*'],
      tasks: ['copy:assets']
    },
    bower: {
      files: ['bower_components'],
      tasks: ['wiredep']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
