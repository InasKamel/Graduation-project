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
        local_dependencies: {
            files: {
                'app/index.html': [
                    [
                        'app/app.js',
                        'app/*.js',
                        'app/shared/**/*.js',
                        'app/modules/**/*.js',
                    ],
                    [
                        'app/*.css',
                        'app/shared/**/*.css',
                        'app/modules/**/*.css',
                    ]
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-injector');
};
