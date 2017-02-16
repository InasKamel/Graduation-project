'use strict';

/**
 * `connect`
 *
 * Start a static web server.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-connect
 *
 */

module.exports = function(grunt) {
    grunt.config.set('connect', {
        server: {
            options: {
                hostname: 'localhost',
                port: 8000,
                base: './',
                livereload: true,
                useAvailablePort: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
