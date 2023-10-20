import connection from './connection'
import { Customer } from '../../client/common/customer'

export function getAllCustomers(db = connection): Promise<Customer[]> {
  return db('customerdb').select('*')
}
