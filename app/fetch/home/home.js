import { get } from '../get'

export function getAdData() {
    const result = get('/api/date/date/gethomedate')
    return result
}

export function getListData(start) {
    const result = get('/api/date/gethomedate?start=' + start)
    return result
}
