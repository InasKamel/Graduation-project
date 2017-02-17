'use strict';

/**
 * `copy`
 *
 * Copy files and folders.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-copy
 *
 */

module.exports = function(grunt) {
    grunt.config.set('copy', {
        index: {
            src: './app/index.html',
            dest: '.tmp/index.html'
        },
        html: {
            files: [{
                expand: true,
                cwd: './app',
                src: ['**/!(index).html'],
                dest: '.tmp'
            }]
        },
        js: {
            files: [{
                expand: true,
                cwd: './app',
                src: ['**/*.js'],
                dest: '.tmp'
            }]
        },
        assets: {
            files: [{
                expand: true,
                cwd: './app/assets',
                src: ['**/*.*'],
                dest: '.tmp/assets'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
