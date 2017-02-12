(function () {
	'use strict';

    module.exports = function(grunt) {
        // tasks configuration
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            jshint: {
                options: {
                    jshintrc: true
                },
                all: ['Gruntfile.js', 'app/**/*.js']
            },
            injector: {
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
            },
            wiredep: {
                target: {
                    src: 'app/index.html'
                }
            },
            watch: {
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
                    files: ['Gruntfile.js', 'app/**/*.js'],
                    tasks: ['jshint'] 
                }
            },
            connect: {
                server: {
                    options: {
                        host: 'localhost',
                        port: 8000,
                        livereload: true,
                        base: './'
                    }
                }
            }
        });

        // load grunt plugins
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-wiredep');
        grunt.loadNpmTasks('grunt-injector');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-watch');

        // tasks
        grunt.registerTask('serve', ['jshint', 'wiredep', 'injector', 'connect', 'watch']);
    };
}());