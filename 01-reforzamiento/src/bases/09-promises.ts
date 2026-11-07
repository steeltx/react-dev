
const myPromise = new Promise<number> ( (resolve, reject) => {
    setTimeout(() => {
        //resolve(100);
        reject('perdio');
    },2000);
});

myPromise.then(
    (money) => {
        console.log(`Dinero de regreso ${money}`) 
    }
).catch(reason => {
    console.warn(reason)
}).finally(
    () => {
        console.log('continuar');
    }
);
