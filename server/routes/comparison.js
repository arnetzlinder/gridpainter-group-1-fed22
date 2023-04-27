const express = require("express");
const router = express.Router();
const connection = require("../conn");

function compareArrays(array1, array2) {
    const length = array1.length;
    let counter = 0;

    for(let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++){
            if (array1[i][j] === array2[i][j]) {
                counter++
            } 
        }

    }

    const percentage = counter/(array1.length*array1.length);
    return percentage;
}






module.exports = router;