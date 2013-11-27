var hljs = require('highlight.js');

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
            },
            markdown: {
                files: ['markdown/*.md'],
                tasks: ['markdown:build', 'notify:markdown']
            }
        },

        notify: {
            sass: {
                options: {
                    message: 'Sass Complete'
                }
            },
            markdown: {
                options: {
                    message: 'Markdown Complete'
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },

        markdown: {
            build: {
                files: [
                    { src: 'markdown/meeting-2.md', dest: './meeting-2.html' }
                ],
                options: {
                    template: 'markdown-template.html',
                    markdownOptions: {
                        gfm: true,
                        highlight: function(code, lang) {
                            var out = code;
                            try {
                                out = hljs.highlight(lang, code).value;
                            } catch(e) {
                                out = hljs.highlightAuto(code).value;
                            }
                            return out;
                        }
                    },
                    preCompile: function(src, context) {
                        // Extract title
                        var m = /\# (.*?)\n/.exec(src);
                        context.title = m && m[1].trim();

                        // Real markup for <tag>
                        src = src
                            .replace(/<tag>/g, '<span class="tag">')
                            .replace(/<\/tag>/g, '</span>')

                        return src;
                    }
                }
            }
        }
    })

    grunt.registerTask('default', [
        'sass:dist', 'markdown:build', 'devserver', 'watch'
    ]);

    grunt.loadNpmTasks('grunt-devserver')
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-markdown');
}
