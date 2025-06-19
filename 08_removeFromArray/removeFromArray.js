const removeFromArray = function(arr, ...toRemove) {
    for (let i = 0; i < toRemove.length; i++) {
        rem = toRemove[i];
        console.log(rem, typeof(rem))
        for (let j = 0; j < arr.length; j++) {

            if ((arr[j] == rem) && (typeof(arr[j]) == typeof(rem))) {
                arr.splice(j, 1);
                --j;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
