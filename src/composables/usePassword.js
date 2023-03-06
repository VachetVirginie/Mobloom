
export default () => {
    const generatePassword = (password) => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let pass = ''
        for (let x = 0; x < 10; x++) {
            const i = Math.floor(Math.random() * chars.length)
            pass += chars.charAt(i)
        }
        password.value = pass
    }

    const copy = (data) => {
        console.log(typeof data)
        navigator.clipboard.writeText(data)
    }

    return {
        generatePassword,
        copy
    }
}
