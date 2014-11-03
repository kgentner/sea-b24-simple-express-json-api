'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      all: ['server.js'],
      options: {
        jshintrc: true
      }
    },
    jscs: {
      all: {
        options: {
          //standard: 'airbnb'
          // 'preset':'aribnb'
        },
        files: {
          src: [ 'server.js']
        }
      }
    },

    simplemocha: {
      src: ['test/**/*.js']
    }
  });

  grunt.registerTask('test', ['jshint','jscs', 'simplemocha']);
  grunt.registerTask('default',  ['test']);
};
