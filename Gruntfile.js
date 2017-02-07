module.exports = function(grunt) {

    //tasks configuration
    grunt.initConfig({
    
     pkg: grunt.file.readJSON('package.json'),
     jshint: {

         all: ['Gruntfile.js','app/**/*.js' ]
     },
    injector: {
        local_dependencies: {
            files: {
                'app/index.html': ['app/**/*.js', 'app/**/*.css']
            }
        }
    },
    wiredep: {
    
            target: {
                src: 'app/index.html'
            }
        },
    watch: {
        scripts: {
            files: ['Gruntfile.js', 'app/**/*.js'],
            tasks: ['jshint'] 
        }
    },
   /* connect: {
    server: {
      options: {
        port: 8000,
        base: './',
        keepalive: true
      }
    }
  }*/
    });

    //load grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', ['jshint', 'injector', 'wiredep', 'watch']);
};