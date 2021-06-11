//function 정의 파일
// function arr(numbers){
//     // let arr = ["2@3", 3, 4, "2@3", "2@3"];
// let arrLen = numbers.length;

// for(let i=0;i<arrLen;i++){
//     let v=numbers[i];
//     console.log("v:"+v+"\n");
//     console.log("array:"+numbers+"\n");
//     if(typeof(v)==="string"&&v.indexOf('@')!=-1){
//         // let num = v.indexOf('@');
//         let a = parseFloat(v.slice(0,v.indexOf('@'))); 
//         //얘는 실수니까 실수 다 받으려면  slice 사용
//         //수로 출력하려면 parseFloat 해줘야 함
//         let b = parseFloat(v.slice(v.indexOf('@')+1,v.length)); //slice(a, b)는 a이상 b미만 자르니까 @ 이후부터 자르기 
//         // console.log(typeof(b));
//         /**error**/
//         //정수가 아닌 b이면 종료
//         if(Number.isInteger(b)===false||b<=0){
//             // console.log(typeof(b));
//             console.log("Invalid reapeat!");
//             process.exit(1);
//         }
//         // console.log(" a: "+a+" b: "+b+" num: " +num);
        
//         // arr.splice(arr.indexOf(v),1);
//         let num = numbers.indexOf(v); 
//         console.log(" a: "+a+" b: "+b+" num: " +num);
//         numbers.splice(num,1); //하나 제거
//         // console.log(arr);
//         for(let i=0;i<b;i++){ //b번
//             numbers.splice(num,0,a); //a 추가 
//             num++;
//         }

//         // return arr[v.indexOf('@')-1];
//         // return v[v.indexOf('@')-1];
//         // arr.splice(); //배열 교체
//         arrLen+=(b-1);
//     } 
//     reuturn numbers;
//     }
// }


function sum(numbers){
    return numbers.reduce((prev, curr)=>prev + curr, 0);
}

//array.reduce(function, number)
//number(초기값)에 function을 순차적으로 적용한다

function avg(numbers){
    return sum(numbers) / numbers.length;
}

function max(numbers){
    return numbers.reduce((max, curr)=>(max>curr?max:curr), numbers[0]);
}

function min(numbers){
    return numbers.reduce((min, curr)=>(min<curr?min:curr), numbers[0]);
}

function med(numbers){
    numbers.sort(function(a,b){ //오름차순 sorting
        return a-b;
    });

    if (numbers.length%2===0) { //짝수
        return (numbers[(numbers.length/2)-1] + numbers[numbers.length/2]) / 2 ;
    } else if (numbers.length%2===1){ //홀수 
        return numbers[parseInt(numbers.length/2)]; //정수변환
    }
}


module.exports={
    sum,
    avg, 
    max,
    min,
    med,
}; //해당 이름으로 함수 내보냄


