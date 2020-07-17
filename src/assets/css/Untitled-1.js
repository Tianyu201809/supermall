function a() {
    var array = 'aaaabccccddddeeeeaaaa';
    var outputAarray = [];
    for (let i = 0; i < array.length; i++) {
        var number = 1;
        if (i == 0) {
            outputAarray.push(array[i]);
            continue;
        }
        for (let j = i + 1; j < array.length; j++) {

            if (array[i] === array[j]) {
                number += 1;
            } else {
                outputAarray.push(number);
                break;
            }
        }
        if (array[i] == array[i + 1]) {
            continue;
        }
        var val1 = array[i];
        outputAarray.push(val1);

    }
    return outputAarray;
}

function h(array) {
    if (!array) {
        array = 'cvbnjhkmnbvaaaabccccddddeeeeaaaa';
    }
    debugger
    let sVal = array;
    let _Array = new Set(array);
    let str = '';
    for (const k of _Array) {
        str += k;
    }
    if (sVal === str) {
        return array;
    }
    let num = 1;
    let outPutArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            num++
        } else {
            outPutArray.push(array[i], num);
            num = 1;
        }
    }
    if (array.length <= outPutArray.length) {
        return array;
    } else {
        return outPutArray.toString().replace(/,/g, '');
    }
}


function compression(st) {
    var str = st[0];
    var count = 1;
    for (let i = 1; i < st.length; i++) {
        if (st[i] === st[i - 1]) {
            count++;

        } else {
            str += count;
            count = 1;
            str += st[i];
        }
        if (i === st.length - 1) {
            str += count;
        }
    }
    if (str.length >= st.length) {
        return st;
    } else {
        return str;
    }
}