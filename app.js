var minutes = 0
var seconds = 0
var miliseconds = 0

var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('msec')

var integer ; 

function START(){
  integer = setInterval(function(){
    miliseconds++
    getmili.innerHTML=miliseconds
    if( miliseconds >=100  ){
        seconds++
        getsec.innerHTML=seconds
        miliseconds=0

    }
    else if ( seconds >=60){
        minutes++
        getmin.innerHTML=minutes
        seconds=0
    }



  },10)
  
  document.getElementById('START') .disabled = true
}

function STOP(){
 clearInterval(integer)
 document.getElementById('START') .disabled = false
}

function Reset(){
    minutes = 0
    seconds = 0
    miliseconds = 0

    getmin.innerHTML= minutes
    getsec.innerHTML= seconds
    getmili.innerHTML= miliseconds

}