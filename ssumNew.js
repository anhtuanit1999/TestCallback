let fs = require('fs');
let os = require('os');

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a != 'number' || typeof b != 'number'){
             return reject(new Error('Tham so phai la kieu number!'));
        }
        resolve(a + b);
    });
};

add(1,  2)
.then(res => {
    fs.writeFile('./1.txt', res, err => console.log(err + ''));
    console.log('done1!');
    return add(2, 2);
})
.then((result) => {
    fs.open('./1.txt', 'a', 666, (err, id) => {
        fs.write(id, os.EOL + result, null, 'utf8', () => {
            fs.close(id, () => {
               console.log('File is updated1');
            });
            let data = fs.readFileSync('./1.txt', 'utf8');
            a = parseInt(data);
            b = parseInt(data[data.length - 1]);
            add(a, b)
            .then((ketqua) => {
                fs.open('./1.txt', 'a', 666, (err, id) => {
                    fs.write(id, os.EOL + ketqua, null, 'utf8', () => {
                        fs.close(id, () => {
                            console.log('File is updated2');
                        })
                    })
                });
                console.log('done3!');
            })
            .catch(err => console.log(err));
        });
        console.log('done2!');
    });
})
.catch(err => console.log(err + ''));
