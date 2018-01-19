/**
    @file: gruntfile.js
    @author: Xiao Ling <lingxiao@seas.upenn.edu>
    @date: 1/19/2018
*/

module.exports = function(grunt){

	"use strict";

	grunt.initConfig({

	    copy: {
	      build: {
	        files: [
	          {
	            expand: true,
	            cwd: "./public",
	            src: ["**"],
	            dest: "./dist/public"
	          },
	          {
	            expand: true,
	            cwd: "./views",
	            src: ["**"],
	            dest: "./dist/views"
	          }
	        ]
	      }
	    },

	    ts: {
	      app: {
	        files: [{
	          src: ["src/\*\*/\*.ts", "!src/.baseDir.ts"],
	          dest: "./dist"
	        }],
	        options: {
	          module: "commonjs",
	          target: "es6",
	          sourceMap: false,
	          rootDir: "src"
	        }
	      }
	    },

	    watch: {
	      ts: {
	        files: ["src/\*\*/\*.ts"],
	        tasks: ["ts"]
	      },
	      views: {
	        files: ["views/**/*.pug"],
	        tasks: ["copy"]
	      }
	    }
	  });

	  grunt.loadNpmTasks("grunt-contrib-copy");
	  grunt.loadNpmTasks("grunt-contrib-watch");
	  grunt.loadNpmTasks("grunt-ts");

	  grunt.registerTask("default", [
	    "copy",
	    "ts"
	  ]);


}