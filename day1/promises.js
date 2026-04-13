const mypromise = new Promise((resolve,reject) =>
{
    let age =20;
    if (age>18){
        resolve("eligible for vote")
    }else{
        reject("not eligible")
    }
})
