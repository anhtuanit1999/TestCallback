let check = (a, cb) => {
    if(typeof a != 'number')
        return cb('Tham so phai la number');
    cb(undefined, a);
};

let add = (a, b, cb) => { // callback in callback in callback
    check(a, (err, result) => {
        if(err) return console.log(err + '');
        check(b, (err, result) => {
            if(err) return console.log(err + '');
            cb(undefined, a + b);
        });
    });
};

add(2, 3, (err, result) => {
    if(err) return console.log(err + '');
    console.log('Ket qua: ' + result);
});