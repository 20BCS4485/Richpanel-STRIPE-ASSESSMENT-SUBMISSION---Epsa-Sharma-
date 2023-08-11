function signup(){
    //console.log("Generating CV");

    let Name= document.getElementById('Name').value;
    
    let nameT1= document.getElementById('nameT1');
      
    nameT1.innerHTML= Name;

    //direct
    document.getElementById("nameT2").innerHTML = Name;

    /*//DOB 

    let DOB= document.getElementById('DOB').value;
    let dobT= document.getElementById('dobT');
    dobT.innerHTML= DOB;

    */
   
    //email id

    document.getElementById("Email").innerHTML=document.getElementById("EmailID").value;
    //Pass ID

    document.getElementById("Password").innerHTML=document.getElementById("PassID").value;

    document.getElementById('interface').style.display='none';

}