$(document).ready(function(){
const form=document.getElementById("form");
const userName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("mnum");
const pass=document.getElementById("pass");
const cpass=document.getElementById("pass2");
$(form).on("submit",function(e){
   e.preventDefault();
   checkInputs();
});
function checkInputs(){
    const userNameValue=userName.value.trim();
    const emailValue=email.value.trim();
    const phoneValue=phone.value.trim();
    const passValue=pass.value.trim();
    const cpassValue=cpass.value.trim();
    //for username
    if(userNameValue === ''){
        setErrorFor(userName,"username should not be empty");
    } else if(userNameValue.length<=2){
         setErrorFor(userName,"username should contains atleast three characters")
    }else{
        setSuccessFor(userName)
    }
    //email
    if(emailValue===""){
        setErrorFor(email,"email should not be empty");
    }else if(!isemail(emailValue)){
        setErrorFor(email,"email not avoid");
    }
    else{
        setSuccessFor(email);
    }
    //mobile number
    if(phoneValue===""){
        setErrorFor(phone,'number should not be empty');
    }else if(phoneValue.length==10){
        setSuccessFor(phone);
    }else{
        setErrorFor(phone,"this field must contains ten numbers")
    }
    //password
    if(passValue===""){
        setErrorFor(pass,"password cannot be empty");
    }else if(passValue.length<=5){
        setErrorFor(pass,'password must contains six characters')

    }else{
            setSuccessFor(pass);
    }
    if(cpassValue===""){
        setErrorFor(cpass,"password cannot be empty");
    }else if(cpassValue.length<=5){
        setErrorFor(cpass,'password must contains six characters')

    }else if(cpassValue!==passValue){
        setErrorFor(pass,'your password dosnt match');
        setErrorFor(cpass,'your password dosnt match');
    }
    else{
            setSuccessFor(cpass);
    }
}
function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText=message;
    $(formControl).addClass('fail').removeClass('sucess')
    $(small).css("text-transform","lowercase")
}
function setSuccessFor(input){
    const formControl=input.parentElement;
   
    $(formControl).removeClass('fail').addClass('sucess')
    
}
//condition for email
function isemail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

}
});