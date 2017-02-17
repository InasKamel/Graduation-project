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
    var serveStatic = require('serve-static');

    grunt.config.set('connect', {
        server: {
            options: {
                hostname: 'localhost',
                port: 8000,
                livereload: true,
                useAvailablePort: true,
                middleware: function(connect) {
                    return [
                        serveStatic('.tmp'),
                        connect().use('/bower_components', serveStatic('./bower_components')),
                    ];
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
