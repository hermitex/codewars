function smallest(n) {
    // Your code
    // 261235
    // store original n
    // to identify the smallest number, sm
    // is insert sm 
    // 262351
    // sm < n
    let numStr = n+""; '261235'
    let numArr = []; // [2, 6, 1, 2, 3, 5]
    let smallestNum = n; //126235
    let smallestDigit; // 1
    let coppyArr;
    let smallestNumStr = ''
    
    for(let i = 0; i < numStr.length; i++){   
      numArr.push(parseInt(numStr[i])) // an array of numbers [2,6,1,2,3,5]
    }
    
    smallestDigit = Math.min.apply(null, numArr); 
    
    coppyArr = [...numArr];
    
    for(let i =0; i<numArr.length; i++){
      for(let j = 1; i < numArr.length; j++){
         coppyArr.splice(coppyArr.indexOf(smallestDigit), 1); // remove the smallest digit from the original number [2,6,2,3,5]
  
      coppyArr.splice(i, 0, smallestDigit);  // [2,6,2,1,3,5]
      console.log(coppyArr)
      if(parseInt(coppyArr.join("")) < smallestNum){ // 261235 < 262135
        
        smallestNum = +coppyArr.join(""); 
        smallestNumStr = coppyArr.join("")
      }
      
    }
      }
   
    return [+numArr.sort().join(""), numArr.indexOf(smallestDigit), (smallestNumStr).indexOf(smallestDigit+"")]
  }