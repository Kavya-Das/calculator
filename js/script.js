
function sele(){
    var menu = calculator.value;
   
    return menu
}
    
function clickme(){

    var strUser = sele()    
    console.log(strUser)
    var getFirst = document.getElementById("first").value
    var getSecond = document.getElementById("second").value
    var getFirstInt = parseInt(getFirst)
    var getSecondInt = parseInt(getSecond)
    console.log(getFirstInt)
    console.log(getSecondInt)
    if (strUser == 'Add') {
        var result= getFirstInt + getSecondInt
        console.log(result)
    }
    else if (strUser == 'Subtract') {
        var result= getFirstInt - getSecondInt
        console.log(result)
    }
    else if (strUser == 'Mul') {
        var result= getFirstInt * getSecondInt
        console.log(result)
    }
    else if (strUser == 'Div') {
        var result= getFirstInt / getSecondInt
        console.log(result)
    }
    document.getElementById("res").innerHTML=result
} 
function clickAdd(){

    var getFirst = document.getElementById("first").value
    var getSecond = document.getElementById("second").value
    var getFirstInt = parseInt(getFirst)
    var getSecondInt = parseInt(getSecond)
    console.log(getFirstInt)
    console.log(getSecondInt) 
    var resultAdd = getFirstInt + getSecondInt
    console.log(resultAdd)
    document.getElementById("resAdd").innerHTML=resultAdd
}
function clickMul(){

    var getFirst = document.getElementById("first").value
    var getSecond = document.getElementById("second").value
    var getFirstInt = parseInt(getFirst)
    var getSecondInt = parseInt(getSecond)
    console.log(getFirstInt)
    console.log(getSecondInt) 
    var resultMul = getFirstInt * getSecondInt
    console.log(resultMul)
    document.getElementById("resMul").innerHTML=resultMul
}
function clickSub(){

    var getFirst = document.getElementById("first").value
    var getSecond = document.getElementById("second").value
    var getFirstInt = parseInt(getFirst)
    var getSecondInt = parseInt(getSecond)
    console.log(getFirstInt)
    console.log(getSecondInt) 
    var resultSub = getFirstInt - getSecondInt
    console.log(resultSub)
    document.getElementById("resSub").innerHTML=resultSub
}
function clickDiv(){

    var getFirst = document.getElementById("first").value
    var getSecond = document.getElementById("second").value
    var getFirstInt = parseInt(getFirst)
    var getSecondInt = parseInt(getSecond)
    console.log(getFirstInt)
    console.log(getSecondInt) 
    var resultDiv = getFirstInt / getSecondInt
    console.log(resultDiv)
    document.getElementById("resDiv").innerHTML=resultDiv
}
