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
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};