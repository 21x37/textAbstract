module.exports = function textAbstract(text, length) {
    try {
        if (text.length <= length) {
            return text;
        };
        text = text.substring(0, length);
        let last = text.lastIndexOf(" ");
        text = text.substring(0, last);
        return text + "..."; 
    } catch(e) {
        console.log('Please make sure you provided a string, and a length to textAbstract.')
    };
};