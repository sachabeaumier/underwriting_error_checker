import express from 'express'
import path from 'path'
import customers from './routes/customers'

const server = express()

server.use('/api/v1/customers', customers)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

export default server
