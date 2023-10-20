import express from 'express'
import { Customer } from '../../client/common/customer'
import { getAllCustomers } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllCustomers()
    .then((customers) => {
      res.json(customers)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
