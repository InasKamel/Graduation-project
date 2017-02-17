'use strict';

/**
 * `wiredep`
 *
 * Wire Bower dependencies to your source code.
 *
 * For usage docs see:
 *   https://github.com/stephenplusplus/grunt-wiredep
 *
 */

module.exports = function(grunt) {
    grunt.config.set('wiredep', {
        app: {
            src: '.tmp/index.html'
        }
    });

    grunt.loadNpmTasks('grunt-wiredep');
};
