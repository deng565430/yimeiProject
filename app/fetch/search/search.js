import { get } from '../get'

export function getSearchData(start, kw) {
    const result = get('/api/date/gethomedate?start=' + start + '&kw=' + kw)
    return result
}