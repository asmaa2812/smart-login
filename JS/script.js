// start sign up
//variable declaraition 
var nameSignUp = document.getElementById('nameSignUp')
var emailSignUp = document.getElementById('emailSignUp')
var passSignUp = document.getElementById('passSignUp')
var btn = document.getElementById('btnUp')
var userInput = []

if(localStorage.getItem('user') !=null){
    userInput=JSON.parse(localStorage.getItem('user'))
}
else{
    userInput=[];
}

//required
function requiredInput(){
    if(nameSignUp.value == '' || emailSignUp.value == '' || passSignUp.value == ''){
        alertSignUp.classList.remove('d-none')
    }
      else{
        alertSignUp.classList.add('d-none')
        var dataInput ={
            name:nameSignUp.value,
            email:emailSignUp.value,
            password:passSignUp.value
        }
        userInput.push(dataInput)
        console.log(userInput)
       // validateInput()
        location.href = 'index1.html'
        localStorage.setItem('user',JSON.stringify(userInput))
        
      }
   
}

// validation
// function validateInput(){
//     var nameRegex = /^[A-Z][a-z]{3,9}/
//     var userName = nameSignUp.value
//     if(nameRegex.test(userName) == true){
//         alert('yes')
//     }
    
//     else{
//         warning.classList.remove('d-none')
//     }
// }

//end sign up

//start log in
//declaration variable

var emailLogIn = document.getElementById('emailInput')
var passLogIn = document.getElementById('passInput')

userInput=JSON.parse(localStorage.getItem('user'))

//check user inputs
function checkData(){
    if(emailLogIn == '' || passLogIn.value == '' ){
        alertLogIn.classList.remove('d-none')
    }
   else{
    resultCheck();
   }  
}

function resultCheck(){
    for(var i=0; i<userInput.length; i++){
        if(emailLogIn.value == userInput[i].email && passLogIn.value == userInput[i].password){
            var data = userInput[i].name
            localStorage.setItem('userName', data)
            location.href='index3.html'
            break;
        }
    }
}


//home page
var button =document.getElementById('homeBtn')
document.getElementById('userName').innerHTML = localStorage.getItem('userName');
function btnClick(){
    localStorage.removeItem('userName');
    // location.href='index2.html'
}
