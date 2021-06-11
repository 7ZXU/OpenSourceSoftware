#!/usr/bin/env node
// console.log(process.argv); //입력인자 받아옴


const lib = require("./lib"); //lib.js를 lib이라는 이름으로 사용 가능

//error처리
//인자 불충분한 경우
if(process.argv.length <=3 ){
    console.log("Insufficient parameter!");
    process.exit(1);
}

//명령어 분리 
//sum max 
let command = process.argv[2]; 

//숫자 분리
let numbers = process.argv.slice(3, process.argv.length).map((n) => (n));
let arrLen = numbers.length;
for(let i=0;i<arrLen;i++){
        let v = numbers[i];
        // console.log("v:"+v+"\n");
        //console.log("array:"+numbers+"\n");
        if(typeof(v)==="string"&&v.indexOf('@')!=-1){
            // let num = v.indexOf('@');
            let a = parseFloat(v.slice(0,v.indexOf('@'))); 
            //얘는 실수니까 실수 다 받으려면  slice 사용
            //수로 출력하려면 parseFloat 해줘야 함
            let b = parseFloat(v.slice(v.indexOf('@')+1,v.length)); //slice(a, b)는 a이상 b미만 자르니까 @ 이후부터 자르기 
            // console.log(typeof(b));
            /**error**/
            //정수가 아닌 b이면 종료
            if(Number.isInteger(b)===false||b<=0){
                // console.log(typeof(b));
                console.log("Invalid repeat!"); //“Invalid repeat!”
                process.exit(1);
            }
            // console.log(" a: "+a+" b: "+b+" num: " +num);
            
            // arr.splice(arr.indexOf(v),1);
            let num = numbers.indexOf(v); 
            // console.log(" a: "+a+" b: "+b+" num: " +num);
            numbers.splice(num,1); //하나 제거
            // console.log(arr);
            for(let i=0;i<b;i++){ //b번
                numbers.splice(num,0,a); //a 추가 
                num++;
            }
    
            // return arr[v.indexOf('@')-1];
            // return v[v.indexOf('@')-1];
            // arr.splice(); //배열 교체
            arrLen+=(b-1);
        }else{
            numbers[i]=parseFloat(v);
        }
};

// console.log(numbers);
// numbers = arr(numbers);
//배열 자르기 //시작위치~끝위치 지정
/**array.map**/ 
//map 내 함수를 적용한 값을 담아라 
/**parseFloat(n)**/ 
//convert string -> float

//error처리  //숫자가 아닌 인자 받을 경우
if(numbers.some((n) => isNaN(n))){
    console.log("some arguments are not numbers");
    process.exit(1);
}
/**array.some**/
//모든 원소에 대해 함수 적용
//함수결과가 하나라도 True가 나오면 numbers.some() = True
/**isNaN**/
//숫자가 아니면 True



let result;
//명령어에 따라 내용 실행 
switch (command){
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    case "min":
        result = lib.min(numbers);
        break;
    case "med":
        result = lib.med(numbers);
        break;
    default: //error 처리 //잘못된 명령어 받는 경우
        console.log("Wrong command!"); 
        process.exit(1); //프로그램 강제 종료
}

console.log(result); //result 출력
