#!/usr/bin/env node

var sys = require('util')
var path = require('path')
var exec = require('child_process').exec
var glob = require('glob')
var fs = require('fs')

var userName = process.argv[2]
var url = process.argv[3]

function launchChrom(userName) {
	var profileDirectory
	var confDir = process.env.HOME + "/.config/google-chrome"
	// Search profile directories for files named 'Preferences'
	glob(confDir + "/*/Preferences", function(err, files) {
		files.forEach(function(file) {
			fs.readFile(file, function(err, contents) {
				var prefs = JSON.parse(contents)
				// Launch browser if user name matches
				var confUser = prefs.google && (prefs.google.services.username || prefs.google.services.last_username)
				if (confUser && confUser.indexOf(userName) != -1) {
					profileDirectory = path.basename(path.dirname(file))
					exec('google-chrome --profile-directory=\'' + profileDirectory + '\' ' + (url || ''))
				}
			})
		})
	})
}

launchChrom(userName)
