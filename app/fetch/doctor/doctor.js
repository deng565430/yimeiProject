import { get } from '../get'

export function getDoctor(id) {
   const result = get('/api/date/getDoctor/' + id)
   return result
}
