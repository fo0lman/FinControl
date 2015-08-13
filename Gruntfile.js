module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'dist/css/style.css': 'dist/css/sass/style.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'dist/css/sass/*.scss',
                tasks: 'sass'
            }
        },
        handlebars: {
            compile: {
                namespace: 'JST',
                options: {
                    amd: true,
                    processName: function(filePath) {
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    }
                },
                files: {
                    'dist/js/templates/jst.js': 'dist/js/templates/*.hbs'
                }
            }
        },
        jscs: {
            files: {
                src: [ "dist/js/**/*.js", "dist/js/views/pages/*.js", "dist/js/core.js" ]
            },
            options: {
                config: ".jscsrc",
                esnext: true, 
                verbose: true, 
                requireCurlyBraces: [ "if" ]
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['dist/css/*.css']      
            },
            lax: {
                options: {
                    import: false
                },
                src: ['dist/css/*.css']
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/style.css': 'dist/css/sass/style.scss'
                }
            }
        },
        //imagemin: {
        //    static: {
        //        options: {
        //            optimizationLevel: 3,
        //            svgoPlugins: [{ removeViewBox: false }],
        //            use: [mozjpeg()]
        //        },
        //        files: {
        //            src: [ "dist/img/img.png", "dist/img/img.jpg", "dist/img/img.gif" ]
        //        }
        //    }
        //},
        jshint: {
            all: ['Gruntfile.js', 'dist/js/**/*.js', 'dist/js/views/pages/*.js', 'dist/js/core.js']
        },
        uglify: {
            my_target: {
                files: {
                    src: [ "dist/js/**/*.js", "dist/js/views/pages/*.js", "dist/js/core.js" ]
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "dist/js",
                    mainConfigFile: "dist/js/core.js",
                    out: "dist/js/main.min.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    //grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-requirejs');
};