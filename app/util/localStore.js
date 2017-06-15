export default {
    getItem: function (username) {
        let value
        try {
            value = localStorage.getItem(username)
        } catch (ex) {
            // 开发环境下提示error
            if (__DEV__) {
                console.error('localStorage.getItem报错, ', ex.message)
            }
        } finally {
            return value
        }
    },
    setItem: function (username, value) {
        try {
            // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
            localStorage.setItem(username, value)
        } catch (ex) {
            // 开发环境下提示 error
            if (__DEV__) {
                console.error('localStorage.setItem报错, ', ex.message)
            }
        }
    }
}