module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		compass: {
			compile: {
				options: {
					config: 'config.rb'
				}
			},
			watch: {
				options: {
					config: 'config.rb',
					watch: true
				}
			}
		},
		imagemin: {
			options: {
				cache: false
			},
			soft: {
				options: {
					optimizationLevel: 3,
				//	pngquant: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'built/img/'
				}]
			},
			aggressive: {
				options: {
					optimizationLevel: 7,
					pngquant: true,
				},
				files: [{
					expand: true,
					cwd: 'src/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'built/img/'
				}]
			}
		},
		jshint: {
			options: {
				eqnull: true,
				reporter: require('jshint-stylish')
			},
			defaults: ['Gruntfile.js', 'src/javascripts/scripts.js']
		},
		clean: {
			//img: {
			//	src: ['img/**/*']
			//},
		concat: {
				src: ['src/javascripts/concat/*.js']
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			local: {
				src: ['src/javascripts/**/*.js'],
				dest: 'src/javascripts/concat/output.js'
			}
		},
		uglify: {
			ugly: {
				files: {
					'built/js/scripts.min.js': ['src/javascripts/concat/output.js']
				}
			},
			beautiful: {
				files: {
					'built/js/scripts.min.js': ['src/javascripts/concat/output.js']
				},
				options: {
					beautify: true
				}
			}
		},
		watch: {
			livereload: {
				files: ['built/css/style.css'],
				options: {
					livereload: {
                        port: 35728
                    }
				}
			},
			scripts: {
                files: ['src/javascripts/*.js'],
				tasks: ['jshint:defaults','clean:concat','concat:local','uglify:ugly'],
				options: {
					spawn: false,
				},
            },
			images: {
				files: ['src/images/**/*.{png,jpg,gif}'],
				//tasks: ['clean:img','imagemin:soft'],
				tasks: ['newer:imagemin:soft'],
			}
		},
		concurrent: {
			watch: {
				tasks: ['compass:watch', 'watch:livereload', 'watch:scripts', 'watch:images'],
                options: {
                    logConcurrentOutput: true,
                    limit: 5
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('default', 'concurrent');
	grunt.registerTask('jscrush', ['clean:concat', 'concat', 'uglify:ugly']);
	//grunt.registerTask('imgcrush', ['clean:img', 'imagemin:soft']);
	grunt.registerTask('imgcrush', ['newer:imagemin:soft']);
	grunt.registerTask('build', ['compass:compile', 'imgcrush', 'jscrush']);
};
