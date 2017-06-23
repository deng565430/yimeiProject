import { get } from '../get'

export function getInfoData(id) {
   const result = get('/api/date/getHospitalById?id=' + id)
   return result
}

export function getCommentData(page, id) {
    const result = get('/api/detail/comment/' + page + '/' + id)
    return result
}