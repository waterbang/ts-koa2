import Koa from 'koa'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import routers from './routes'
import { DefaultState } from 'koa'
import CustomContext from './typings'

const app = new Koa<DefaultState, CustomContext>();


onerror(app)
app.use(json())
app.use(logger())
app.use(bodyparser({
  enableTypes: ['json', 'from', 'text']
}))

// logger
app.use(async (ctx, next) => {
  const start:Date = new Date()
  await next()
  const end:Date = new Date()
  const ms = end.valueOf() - start.valueOf()
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(routers.routes()).use(routers.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});


module.exports = app;
