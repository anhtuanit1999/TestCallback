let fs = require('fs');
let os = require('os');

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('Tham so phai la kieu number!'));
            }
            resolve(a + b);
        }, 0);
    });
};

add(1, 2)
.then((data) => {
    fs.writeFile('./1.txt', data, (err) => console.log(err +''))
    console.log('done!');
},
(err) => console.log(err + ''));

add(2, 2)
.then((data) => {
      fs.open('./1.txt', 'a', 666, (err, id) => {
         fs.write(id, os.EOL + data, null, 'utf8', () => {
            fs.close(id, () => {
                console.log('File is updated');
            })
         })
    });
    console.log('done!');
},
(err) => console.log(err +''));

let a, b;
fs.readFile('./1.txt', 'utf8', (err, data) => {
    if(err) throw err;
    a = parseInt(data);
    b = parseInt(data[data.length - 1]);
});


setTimeout(() => {
    add(a, b)
    .then((data) => {
        fs.open('./1.txt', 'a', 666, (err, id) => {
            fs.write(id, os.EOL + data, null, 'utf8', () => {
                fs.close(id, () => {
                    console.log('File is updated');
                })
            })
        });
        console.log('done!');
},
(err) => console.log(err +''));
}, 100);
