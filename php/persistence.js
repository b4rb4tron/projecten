
let per = 0;
let temp = [];

function persistence(num){
    num = num.toString();
    if (num.length > 1){
        let counter = num.length;
        for( let i =0; i< counter ; i++ ){
        temp.push(num.slice(0,1));
        }
        num = 1;
        for (let i = 0; i<temp.length; i++){
            num = num * temp[i];
        }
        per++;
        temp = [];
    }else if (num.length == 1){
        return per;
    }
    persistence(num);
}


persistence(9999999994);
console.log(per);