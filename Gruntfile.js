module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-dot-compiler');
    grunt.loadNpmTasks('grunt-parallel');

    // Project configuration.
    grunt.initConfig({
        
        /* Package client js */
        browserify: {
            'dist/app.js': ['src/scripts/app.js']
        },

        /* Watch source code */
        watch: {
            scripts: {
                files: 'src/scripts/**/*.js',
                tasks: ['clean:scripts', 'browserify']
            },
            styles: {
                files: 'src/styles/**/*.scss',
                tasks: ['clean:styles', 'sass']
            },
            templates: {
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
                dest : 'src/scripts/tmpl.js'
            }
        },

         /* Sass compilation */
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    debug: true
                },
                files: {
                    'dist/app.css': 'src/styles/app.scss'
                }
            }
        },
        
        clean: {
            styles: ["dist/app.css"],
            scripts: ["dist/app.js"]
        },

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

    grunt.registerTask('build', ['clean', 'dot', 'sass', 'browserify']);
    grunt.registerTask('default', ['build', 'parallel']);
};