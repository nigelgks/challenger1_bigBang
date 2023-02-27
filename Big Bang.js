const fs = require('fs');

function bigBang() {
    let arr = [];
    for (let i=0; i<100; i++) {
        let n = i+1;
        if ((n)%3===0 && (n)%5===0) arr[i] = "BIGBANG";
        else if ((n)%3===0) arr[i] = "BIG";
        else if ((n)%5===0) arr[i] = "BANG";
        else arr[i] = n.toString();
    }
    return arr;
}

let result = bigBang();

fs.writeFile('output.json', JSON.stringify(result), (err) => {
    if (err) throw err;
    console.log('File saved successfully.');
});