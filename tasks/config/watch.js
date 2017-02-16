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
        html: {
            files: ['app/**/*.html']
        },
        css: {
            files: ['app/**/*.css']
        },
        js: {
            files: ['Gruntfile.js', 'tasks/**/*.js', 'app/**/*.js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
