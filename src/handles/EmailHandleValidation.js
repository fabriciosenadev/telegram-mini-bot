
class EmailHandlesValidation {
    async GetEmail(text) {
        let rawArr = await String(text).toLowerCase().split(' ');

        if(rawArr.length !== 2)
            return null;

        return rawArr[1];
    }
    IsValid(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

module.exports = EmailHandlesValidation;