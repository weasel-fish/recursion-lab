// Code your solution here!

function printString(myString) {
    console.log(myString[0])

    if(myString.length > 1) {
        printString(myString.substring(1, myString.length))
    } else {
        return true
    }
}

function reverseString(myString) {
    if(myString.length > 1) {
        return myString[myString.length - 1] + reverseString(myString.substring(0, myString.length - 1))
    } else {
        return myString
    }
}

function isPalindrome(myString) {
    if(myString.length < 2) {
        return true
    } else if(myString[0] === myString[myString.length - 1]) {
        return isPalindrome(myString.substring(1, myString.length - 1))
    } else {
        return false
    }
}

function addUpTo(myArr, ind) {
    if(ind === 0) {
        return myArr[0]
    } else {
        return addUpTo(myArr, ind - 1) + myArr[ind]
    }
}

function maxOf(myArr) {
    if(myArr.length < 2) {
        return myArr[0]
    } else {
        return Math.max(maxOf(myArr.slice(1)), myArr[0])
    }
}

function includesNumber(myArr, num) {
    if(myArr.length < 1) {
        return false
    } else if (myArr[0] != num) {
        return includesNumber(myArr.slice(1), num)
    } else {
        return true
    }
}

