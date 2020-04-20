function sayHi(name){
    return 'hi ${name}'
}

function test(){
    const testsayHi = sayHi("mohammed")

    if (typeof testsayHi === "string"){
        console.log("passed")
    } else {
        console.log("failed")
    }

}