'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        // Compile the .less files into .css
        less: {
            dist: {
                files: {
                    'assets/css/style.min.css': [
                        'assets/less/style.less'
                    ]
                },
                options: {
                    compress: true
                }
            }
        },

        // Minify JS includes into one
        uglify: {
            dist: {
                files: {
                    'assets/js/scripts.min.js': [
                        'assets/vendor/jquery/dist/jquery.min.js',
                        'assets/vendor/bootstrap/dist/js/bootstrap.min.js',
                        'assets/js/app.js'
                    ],
                }
            }
        },

        // Watch / livereload for several filetypes
        watch: {
            less: {
                files: [
                    'assets/less/**/*.less'
                ],
                tasks: ['less']
            },
            options: {
                livereload: true
            }
        },
        clean: {
            dist: [
                'assets/css/style.min.css',
                'assets/js/scripts.min.js'
            ]
        }
    }); // initConfig

    // Load
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    
    // ----------------------------------------------------
    // TASKS
    // ----------------------------------------------------
    grunt.registerTask('default', [
        'build'
    ]);

    grunt.registerTask('build', [
        'clean',
        'less',
        'uglify'
    ]);
};