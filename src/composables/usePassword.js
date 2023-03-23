export default function usePassword() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const generatePassword = (password) => {
        let pass = ''
        for (let x = 0; x < 10; x++) {
            pass += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        password.value = pass
    }

    const  copyToClipboard = (data) => {
        navigator.clipboard.writeText(data);
    }

    return {
        generatePassword,
        copyToClipboard
    };
}
