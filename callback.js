let multiply = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number')
            return cb('Tham so phai laf kieu number');
        cb(undefined, a * b); // callback
    }, 100);
};

multiply(3, 6, (err, result) => {
    if(err) return console.log(err + '');
    console.log('Ket qua: ' + result);
});