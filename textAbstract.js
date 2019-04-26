module.exports = function textAbstract(text, length) {
    try {
        if (text == null) {
            return "";
        };
        if (text.length <= length) {
            return text;
        };
        text = text.substring(0, length);
        text = text.substring(0, text.length);
        return text + "...";
    } catch (e) {
        console.log(e,'Make sure you provided a string and length to textAbstract.');
    };
};
