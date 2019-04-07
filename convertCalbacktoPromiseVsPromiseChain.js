let add = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a != 'number' || typeof b != 'number')
            return reject(new Error('Tham so phai la number'));
        resolve(a + b);
    });
};

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a != 'number' || typeof b != 'number')
            return reject(new Error('Tham so phai la number'));
        resolve(a * b);
    });
};

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        if(typeof a != 'number' || typeof b != 'number')
            return reject(new Error('Tham so phai la number'));
        if(b === 0) return reject(new Error('Chi cho 0'));
        resolve(a / b);
    });
};

let tinhDienTichHinhThang = (a, b, h) => {
    return add(a, b)
    .then(result => multiply(result, h)) // promise chain
    .then(result => divide(result, 2));
};

tinhDienTichHinhThang(2, 3, 2)
.then(square => console.log('Dien tich hinh thang: ' + square))
.catch(err => console.log(err + ''));