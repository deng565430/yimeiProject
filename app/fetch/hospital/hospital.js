import { get } from '../get'

export function getHospital(id) {
   const result = get('/api/date/hospiyaldetailed/' + id)
   return result
}
