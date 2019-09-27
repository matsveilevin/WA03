module.exports = function (grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './source/',
                    src: ['*.js'],
                    dest: './build/'
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './build/*.js',
                dest: './build.min/build.min.js'
            }
        },
        watch: {
            scripts: {
                files: './**/*.js',
                tasks: ['babel', 'uglify'],
            },
        }

    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['babel', 'uglify', 'watch']);

};