const app = require('./app')

const server = app.listen(3000, () => {
  console.log('🥣 Server is running at http://localhost:3000');
  console.log('🤚 Press CTRL-C to stop \n')
})