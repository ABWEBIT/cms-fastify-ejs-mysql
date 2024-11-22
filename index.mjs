import fastifyFramework from 'fastify'
import fastifyView from '@fastify/view'
import fastifyStatic from '@fastify/static'
import fastifyAutoLoad from '@fastify/autoload'
import ejs from 'ejs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const appPort = 3000
const appHost = '127.0.0.1'

const app = fastifyFramework({
  logger: false,
  ignoreTrailingSlash: true,
  caseSensitive: false
})

await app.register(fastifyStatic,{
  root: path.join(__dirname,'public'),
  prefix: '/public/'
})

await app.register(fastifyView,{
  engine: {ejs},
  root: path.join(__dirname,'views'),
  layout: './layouts/default.ejs',
  charset: 'utf-8'
})

await app.register(fastifyAutoLoad,{
  dir: path.join(__dirname,'private/routes'),
  maxDepth: 2,
  forceESM: true
})

try{
  await app.listen({port: appPort, host: appHost})
  console.log(`http://${appHost}:${appPort}/`)
}
catch(error){
  console.error(error)
  process.exit(1)
}