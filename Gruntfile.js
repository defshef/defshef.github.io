module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        devserver: {
            server: {
                options: { async: false }
            }
        },

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

    grunt.registerTask('default', ['sass:dist', 'devserver', 'watch']);

    grunt.loadNpmTasks('grunt-devserver')
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
}
