const repeatString = function(str, n) {
    if (n < 0) {
        return "ERROR";
    }

    final = "";
    for (let i = 0; i < n; i++) {
        final = final + str;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
