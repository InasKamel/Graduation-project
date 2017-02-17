'use strict';

/**
 * `clean`
 *
 * Clear files and folders.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
 *
 */

module.exports = function(grunt) {
    grunt.config.set('clean', {
        dev: ['.tmp']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
