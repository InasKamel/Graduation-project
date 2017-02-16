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
        'jshint',
        'wiredep',
        'injector',
        'connect',
        'watch'
    ]);
};
