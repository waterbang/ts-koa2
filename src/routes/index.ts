import { DefaultState } from 'koa'
import Router from 'koa-router'
import CustomContext from '../typings'

const router = new Router<DefaultState, CustomContext>({
  prefix: '/'
})

router.get('/', async ctx => {
  ctx.body = '对象检测模型 \n         --waterbang'
})



export default router