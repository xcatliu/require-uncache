module.exports = (grunt) ->

  grunt.initConfig
    release:
      options:
        bump: true
        add: true
        commit: true
        tag: true
        push: true
        pushTags: true
        npm: true

  grunt.loadNpmTasks 'grunt-release'