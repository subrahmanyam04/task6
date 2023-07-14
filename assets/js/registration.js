
function fn(){
    var valid= true;
    

    var name=document.getElementById('username').value ;
    var nameinput= document.getElementById('username');
    var email=document.getElementById('mailid').value ;
    var emailinput = document.getElementById('mailid');
    var phone = document.getElementById('pnum').value;
    var phoneinput = document.getElementById('pnum');
    
    // username validation
    
    
    
    
    let pattern = /^[A-Z][a-z]*[!@#$%^&*]?(\d{1,4}|[a-z]*)$/;
    if(name==''){
        valid=false;
         errors= document.getElementById('name');
        errors.innerHTML="*please enter the name";
        nameinput.classList.add('is-invalid');
        nameinput.classList.remove('is-valid');
    

    } else if (name.length < 3){
        valid=false;
      errors= document.getElementById('name');
        errors.innerHTML="*please enter more than 3 characters";
        nameinput.classList.add('is-invalid');
        nameinput.classList.remove('is-valid');        
    }
    
    else if (!pattern.test(name)){
        valid=false;
        errors= document.getElementById('name');
        errors.innerHTML="*Name should start with capital letter";
        nameinput.classList.add('is-invalid');
        nameinput.classList.remove('is-valid');        
        
    }else{
        
        nameinput.classList.remove('is-invalid');
        nameinput.classList.add('is-valid');
        document.getElementById('name').innerHTML="";
      
    }



    // email validation
    let emailPattern = /^[\w.-]+@([\w-]+\.)+com$/

    if(email==''){
        valid=false;
        errors= document.getElementById('email');
        errors.innerHTML="*please enter the mailid";
        emailinput.classList.add('is-invalid');
    }else if(!emailPattern.test(email)){
        valid=false;
        errors= document.getElementById('email');
        errors.innerHTML="*please enter the valid mail";
        emailinput.classList.add('is-invalid');    
    }    
    else{
        
        document.getElementById('email').innerHTML="";
        emailinput.classList.remove('is-invalid');
        emailinput.classList.add('is-valid');    
    }


    //dob validation
  var date = document.getElementById("dateOfBirth").value;
  var dateinput= document.getElementById("dateOfBirth");
  
  
  if(date == null || date== ''){ 
      valid = false;
      errors= document.getElementById('dateOfBirthrErr');
      errors.innerHTML="*please enter the date of birth"
      dateinput.classList.add('is-invalid');
      
  }
  else { 
     
      document.getElementById('dateOfBirthrErr').innerHTML='';
    
      dateinput.classList.remove('is-invalid');
      dateinput.classList.add('is-valid');
      
  }


// phone validation

    let pattern1=/^[6-9]\d{9}$/

    if(phone== ''){
        valid=false;
        errors = document.getElementById('phone');
        errors.innerHTML="*please enter the digits";
        phoneinput.classList.add('is-invalid');

    
    }else if(phone.length > 10){
        valid=false;
        errors = document.getElementById('phone');
        errors.innerHTML="*please enter the 10 digits";
        phoneinput.classList.add('is-invalid');

    }else if (phone.length < 10){
        valid=false;
        errors= document.getElementById('phone');
        errors.innerHTML="*please enter the 10 digits";
        phoneinput.classList.add('is-invalid');
       
      
     }
     else if(!pattern1.test(phone)){
        valid=false;
        errors= document.getElementById('phone');
        errors.innerHTML="*First Number should be 6,7,8,9";
        phoneinput.classList.add('is-invalid');
       
      
    }        
    else{
         phoneinput.classList.remove('is-invalid');
    phoneinput.classList.add('is-valid');

    document.getElementById('phone').innerHTML="";
    
    }
    
// gender validation



var male = document.getElementById('gridRadios1');
var female = document.getElementById('gridRadios2');
var other = document.getElementById('gridRadios3');
var inputmale = document.getElementById('gridRadios1')
var inputfemale = document.getElementById('gridRadios2');
var inputother = document.getElementById('gridRadios3');



if(male.checked == false && female.checked== false && other.checked==false){
    valid= false;
    errors = document.getElementById('genderError');
    errors.innerHTML="*please select the gender";
     inputmale.classList.add('is-invalid');
     inputfemale.classList.add('is-invalid');
     inputother.classList.add('is-invalid');
}else if(male.checked == true && female.checked== false && other.checked==false){
    document.getElementById('genderError').innerHTML="";
    inputmale.classList.remove('is-invalid');
     inputfemale.classList.remove('is-invalid');
     inputother.classList.remove('is-invalid');
     
     

}else if(male.checked == false && female.checked== true && other.checked==false){
    document.getElementById('genderError').innerHTML="";
   
    inputmale.classList.remove('is-invalid');
     inputfemale.classList.remove('is-invalid');
     inputother.classList.remove('is-invalid');
      
}else if(male.checked == false && female.checked== false && other.checked==true){
    document.getElementById('genderError').innerHTML="";
   
    inputmale.classList.remove('is-invalid');
     inputfemale.classList.remove('is-invalid');
     inputother.classList.remove('is-invalid');

}else if(male.checked == true && female.checked== true && other.checked==true){
    document.getElementById('genderError').innerHTML="";
    
    inputmale.classList.remove('is-invalid');
     inputfemale.classList.remove('is-invalid');
     inputother.classList.remove('is-invalid');
}else{
    document.getElementById('genderError').innerHTML="";
}



// dropdown validation

var drop= document.getElementById('inlineFormSelectPref').value;
var inputdrop =document.getElementById('inlineFormSelectPref');

if(drop == "Choose your place"){

    valid=false;
    errors = document.getElementById('droperror');
    errors.innerHTML="*please choose your the place";
    inputdrop.classList.add('is-invalid');
}else{
   
    document.getElementById('droperror').innerHTML="";
   
    inputdrop.classList.remove('is-invalid')
    inputdrop.classList.add('is-valid')
}



// checkbox validation

const check= document.getElementById('defaultCheck1');

if(check.checked == false){
    console.log(check.checked,"jbcjbsjcbs")
    valid=false;
    errors = document.getElementById('checkerror');
    errors.innerHTML="*Please Tick The Box To Agree The Policy ";

}if(check.checked == true){
    console.log(check.checked,"jbcjbsjcbs")
    
    document.getElementById('checkerror').innerHTML="";
    
}






// success notification


 if(valid){
    var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
   
    
    document.getElementById('username').value = ""
    nameinput.classList.remove('is-invalid');
    nameinput.classList.remove('is-valid');
    document.getElementById('valid1').innerHTML = "";

    document.getElementById('dateOfBirth').value = ""
    dateinput.classList.remove('is-invalid');
    dateinput.classList.remove('is-valid');
    document.getElementById('valid3').innerHTML = "";

    document.getElementById('pnum').value = ""
    phoneinput.classList.remove('is-invalid');
    phoneinput.classList.remove('is-valid');
    document.getElementById('valid4').innerHTML = "";

    document.getElementById('mailid').value = ""
    emailinput.classList.remove('is-invalid');
    emailinput.classList.remove('is-valid');
    document.getElementById('valid2').innerHTML = "";
    

    document.getElementById('inlineFormSelectPref').value = "Choose your place"
    inputdrop.classList.remove('is-invalid');
    inputdrop.classList.remove('is-valid');
    document.getElementById('valid6').innerHTML = "";

    document.getElementById("defaultCheck1").checked = false;
    document.getElementById('valid7').innerHTML = "";
    document.getElementById("gridRadios1").checked = false
    document.getElementById("gridRadios2").checked = false
    document.getElementById("gridRadios3").checked = false
    document.getElementById('valid5').innerHTML = "";
    
    
 }


}   



