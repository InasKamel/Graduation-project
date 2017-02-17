'use strict';

/**
 * `less`
 *
 * Compile LESS files to CSS.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-less
 *
 */

module.exports = function(grunt) {
    grunt.config.set('less', {
        dev: {
            files: [{
                expand: true,
                cwd: './app',
                src: ['**/*.less'],
                dest: '.tmp/',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};
