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
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-jscs");
};