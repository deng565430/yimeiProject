export const path = 'http://192.168.1.112:8080'

export const addPath = function (arr) {
    arr.filter(item => {
        if(item instanceof Array) {
            return path + item
        }
    })
}