module.exports = function(grunt) {

  //Grunt�̐ݒ�
  grunt.initConfig({
	karma: {
	  unit: {
	    configFile: 'karma.conf.js'
	  }
	}
  });
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['karma']);
};