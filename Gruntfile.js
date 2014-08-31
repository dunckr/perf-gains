module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    'public/js/main.js': ['public/js/*.js']
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'public/css/main.css': ['public/css/*.css']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'public/',
                    src: ['**/*.html'],
                    dest: 'public/',
                }, ]
            },
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'test/',
                    src: ['*'],
                    dest: 'public/'
                }, ]
            }
        },
        clean: ['public']
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['clean', 'copy', 'imagemin', 'uglify', 'cssmin', 'htmlmin']);

};
