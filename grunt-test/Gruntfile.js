module.exports = function(grunt) {

  //Grunt‚Ìİ’è
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