npmRun.exec('mocha --debug-brk --sort', {cwd: __dirname + '/tests'}, function (err, stdout, stderr) {
  // err Error or null if there was no error 
  // stdout Buffer|String 
  // stderr Buffer|String 
})