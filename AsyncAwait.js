let addPr = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error('Tham so phai la kieu number'));
            }
            resolve(a + b);
        }, 1000);
    });
};

let add = async () => {
    let res = await addPr(2, 3);
    console.log('Ket qua: ' + res);
};

add();