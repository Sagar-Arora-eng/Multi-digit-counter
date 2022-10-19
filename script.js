var countInterval;
function setCounter(){
  
    var number =parseInt(document.getElementById("number").value);
    if(isNaN(number)){
        alert("Please enter a number");
        clearInterval(countInterval);
        return;
    }
    if(number < 1 || number > 99999){
        alert("range out of bound");
        clearInterval(countInterval);
        return;
    }
    var currentNo = document.querySelector(".counter .current");
    var nextNo = document.querySelector(".counter .next");
    var count = 0;
    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo, 5);
    // Clears the previous interval that was running
    clearInterval(countInterval);

    countInterval = setInterval(function(){
       if(count===number){
           clearInterval(countInterval);
           alert("counter has stopped");
           return;
       }
       increaseCounter(currentNo, nextNo, 4);
       count++;
    }, 1000)

}

function resetNumbers(currentNo, nextNo, end){
    console.log(end);
    for(var i=0;i<end;i++){
        currentNo[i].innerText = 0;
        nextNo[i].innerText = 1;
    }
}

function increaseCounter(currentNo, nextNo, index){
    let current = currentNo[index];
    let next = nextNo[index];
    if(current.innerText == 9){
        increaseCounter(currentNo, nextNo, index-1);
    }
    nextNo.classList.add("animate");
    
    setTimeout(function(){
     currentNo.innerText = nextNo.innerText;
     nextNo.classList.remove("animate");
     nextNo.innerText = parseInt(nextNo.innerText)+1;
     if(nextNo.innerText > 9){
         nextNo.innerText = 0;
     }
    }, 500)
}