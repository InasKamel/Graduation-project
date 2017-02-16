'use strict';

/**
 * `jshint`
 *
 * Validate files with JSHint.
 * For JSHint docs see:
 *   http://jshint.com/docs/
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-jshint
 *
 */

module.exports = function(grunt) {
    grunt.config.set('jshint', {
        options: {
            jshintrc: true,
            reporter: require('jshint-stylish')
        },
        all: ['Gruntfile.js', 'tasks/**/*.js', 'app/**/*.js']
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
