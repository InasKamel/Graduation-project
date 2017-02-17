'use strict';

/**
 * `serve`
 *
 * Grunt serve tasklist.
 * > grunt serve
 *
 */

module.exports = function(grunt) {
    grunt.registerTask('serve', [
        'clean',
        'jshint',
        'less',
        'copy',
        'wiredep',
        'injector',
        'connect',
        'watch'
    ]);
};
