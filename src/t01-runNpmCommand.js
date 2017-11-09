const npmRun = require('npm-run')

npmRun.exec('knex seed:run', (err, stdout, stderr) => {
  console.log(err)
  console.log(stdout)
  console.log(stderr) 
})