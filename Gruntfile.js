module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-dot-compiler');
    grunt.loadNpmTasks('grunt-parallel');

    // Project configuration.
    grunt.initConfig({
        
        /* Package client js */
        browserify: {
            'dist/app.js': ['src/js/app.js']
        },

        /* Watch source code */
        watch: {
            js: {
                files: 'src/js/**/*.js',
                tasks: ['clean', 'browserify']
            },
            dot: {
                files: 'src/templates/**/*.dot',
                tasks: ['dot']
            }
        },

        connect: {
            demo: {
                options:{
                    port: 3001,
                    keepalive: true,
                    hostname: '*'
                }
            }
        },

        /* Compile templates */
        dot: {
            dist : {
                options: {
                    requirejs: true
                },
                src  : ['src/templates/**/*.dot'],
                dest : 'src/js/tmpl.js'
            }
        },
        
        clean: ["dist/"],

        /* Run demo and watch in // */
        parallel: {
            demo: {
                options: {
                    stream: true,
                    grunt: true
                },
                tasks: ['connect:demo', 'watch']
            }
        }
    });

    grunt.registerTask('build', ['clean', 'dot', 'browserify']);
    grunt.registerTask('default', ['build', 'parallel']);
};