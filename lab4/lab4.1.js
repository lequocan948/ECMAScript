let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
//alert ra 1 và sau khi đợi 1s thì cũng không ra 2.