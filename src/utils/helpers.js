export function validateEmail(email) {
    const re = /.+@.+..+/;
    return re.test(String(email).toLowerCase());
}


export function checkMessage(input) {
    if (input.length >= 3) {
        return true;
    }
    return false;
}