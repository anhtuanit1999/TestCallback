let add = (a, b, cb) => {
    setTimeout(() => {
        
            return cb('Tham so phai laf kieu number');
        cb(undefined, a + b); // callback
    }, 100);
};

let multiply = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number')
            return cb('Tham so phai laf kieu number');
        cb(undefined, a * b); // callback
    }, 100);
};

let divide = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number')
            return cb('Tham so phai laf kieu number');
        if(b === 0) return cb('Chia cho 0');
        cb(undefined, a / b); // callback
    }, 100);
};

let tinhDienTichHinhThang = (a, b, h, cb) => { // callback hell
    add(a, b, (err, result) => {
        if(err) return cb(err);
        multiply(result, h, (err, result) => {
            if(err) return cb(err);
            divide(result, 2, (err, square) => {
                if(err) return cb(err);
                cb(undefined, square);
            });
        });
    });
};

tinhDienTichHinhThang(2, 3, 2, (err, result) => {
    if(err) return console.log(err + '');
    console.log('Dien tich hinh thang: ' + result);
});