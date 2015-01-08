module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['app/**/*.js'],
      options: {
        
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    coffee: {
      compile: {
        files: {
          'app/result.js': ['app/**/*.coffee'] // compile and concat into single file
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['jshint']);

};