const num = document.getElementById('num');
const goBtn = document.getElementById('goBtn');
const resultBox = document.getElementById('resultBox');

goBtn.addEventListener("click",function () {
    let numVal = num.value;

    // Even or Odd
    if(numVal%2 == 0 ) {
        resultBox.innerHTML = `<p><b>${numVal}</b> is Even</p>`;
    }else {
        resultBox.innerHTML = `<p><b>${numVal}</b> is Odd</p>`;        
    }

    // Prime not Prime
    let isPrime = true;

    for(let dvr=2; dvr<numVal; dvr++) {
        if(numVal%dvr == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        resultBox.innerHTML += `<p><b>${numVal}</b> is PRIME</p>`;
    }else {
        resultBox.innerHTML += `<p><b>${numVal}</b> is not PRIME</p>`;
    }

    // table of number
    resultBox.innerHTML += `<h4>Displaying table of ${numVal}</h4>`;

    for(let cnt=1; cnt<=10; cnt++) {
        resultBox.innerHTML += `<p>${numVal} X ${cnt} = ${numVal*cnt}</p>`;
    }

});