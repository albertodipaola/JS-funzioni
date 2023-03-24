function iniziali(stringa) {
    let nomeCognome = stringa.split(' ');
    return nomeCognome.map(x=>x[0]+'.').join('');
}
console.log(iniziali('Tizio Caio'));

function strSum(stringa) {
    return stringa.split(' ').filter(el=>!isNaN(el)).reduce((acc, el)=>Number(acc)+Number(el));
}
console.log(strSum("Sono 1 stringa di 6 parole"));

function longest(stringa) {
    return stringa.split(' ').sort((a,b)=>b.length-a.length).shift()
}
console.log(longest("quale parola è la piuuuuuuuuuuuuuuuu lunga?"));

function xy(stringa) {
    let numX = stringa.split('').filter(el => el == 'x').length;
    let numY = stringa.split('').filter((el) => el == "y").length;
    console.log(numX);
    console.log(numY);
    return (numX === numY); 
}
console.log(xy("xyxyxyyxyxyxyyxyyxyxyyxyx"));

function fibonacci(num) {
    let arr=[0,1];
    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}
console.log(fibonacci(10));

function vocals(stringa) {
    return stringa
      .toLowerCase()
      .split("")
      .filter((e) => e === "a" || e === "e" || e === "i" || e === "o" || e === "u").length;
}
console.log(vocals("supernonno"));

function collatz(num) {
    let arr =[]
    while(num!==1){
        num%2===0 ? num/=2 : num=(num*3)+1;
        arr.push(num)
    }
    return arr;
}
console.log(collatz(7));
