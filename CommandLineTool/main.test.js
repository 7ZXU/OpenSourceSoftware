const {test, expect} = require("@jest/globals");
const {spawn} = require("child_process"); //자식 프로세스 생성

test("Insufficient params", ()=>{
    const main = spawn("node", ["main.js", "avg"]); 
    //spawn(command, args=[], [options])
    //[options] //
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", ()=>{
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});

test("Wrong command", ()=>{
    // const main = spawn("node", ["main.js", "count", "0"]);
    const main = spawn("node", ["main.js", "count", "0"]);
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", ()=>{
        const output = outputs.join("").trim();
        expect(output).toBe("Wrong command!");
    });
});

/*test1*/
test("Invalid repeat", ()=>{
    const main = spawn("node", ["main.js","min","3@0","2", "3"]); 
    //프로세스에 인자 전달 
    //터미널에서 실행하는 명령어 전달이라고 생각하면됨
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", ()=>{
        const output = outputs.join("").trim();
        expect(output).toBe("Invalid repeat!");
    });
});  

/*test2*/
test("Invalid repeat", ()=>{
    const main = spawn("node", ["main.js","max","2","2", "3@0.5"]); 
    //프로세스에 인자 전달 
    //터미널에서 실행하는 명령어 전달이라고 생각하면됨
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", ()=>{
        const output = outputs.join("").trim();
        expect(output).toBe("Invalid repeat!");
    });
}); 

/*test3*/
test("Invalid repeat", ()=>{
    const main = spawn("node", ["main.js","med","2@3","2", "0@0"]); 
    //프로세스에 인자 전달 
    //터미널에서 실행하는 명령어 전달이라고 생각하면됨
    const outputs = [];
    main.stdout.on("data", (output) => {
        outputs.push(output);
    });

    main.stdout.on("end", ()=>{
        const output = outputs.join("").trim();
        expect(output).toBe("Invalid repeat!");
    });
}); 