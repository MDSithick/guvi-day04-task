const user = {
    "name": "sithick",
    "age": "26",
    "test": "11"
}

const user2 = {
    "age": "26",
    "name": "sithick",
    "test": "11"
}

const keys1 = Object.keys(user);
const keys2 = Object.keys(user2);
let valid = false;
for(let i=0; i<keys1.length; i++) {
    for(let j=0; j<keys2.length; j++) {
        const key1 = keys1[i], key2 = keys2[j];
        const val1 = user[key1];
        const val2 = user2[key2];
        if (key1 == key2 && val1 == val2) {
            valid = true;
            break;
        }else {
            valid = false;
        }
    }
    if(!valid) break;
}

if(valid && keys1.length == keys2.length) {
    console.log("equal");
}else {
    console.log("not equal");
}
//C:\Program Files\nodejs\node.exe .\script3.js
//equal
//script3.js:32


