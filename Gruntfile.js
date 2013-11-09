module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['sass:dist', 'notify:sass']
            }
        },

        notify: {
            sass: {
                options: {
                    message: 'Sass Complete'
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        }
    })

    grunt.registerTask('default', ['sass:dist', 'watch']);

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
}
