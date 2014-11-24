var	spawn = require("child_process").spawn,
    fs = require("fs");

module.exports = function(grunt) {

    grunt.registerTask("shell:ensamblador", "Ensamblador clone, make, ensamblar", function() {

        var done = this.async(),
            cmd = "git clone";
            args = ["clone", "https://github.com/fishkel-truelogic/so-ensamblador"];

        var clone = spawn(cmd, args);

        clone.stdout.on("data", function(chunk) {
            grunt.log.write(chunk);
		});

        clone.stderr.on("data", function(chunk) {
            grunt.log.error(chunk);
		});

        clone.on("close", function(code) {
            done();
        });

    });

}