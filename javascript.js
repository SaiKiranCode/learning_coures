 // function to validate first name
function checkfield1()
{
  var field=document.getElementById("field1").value;
  var rel=/^[a-zA-Z\s\'\-]{1,15}$/;
  if(!rel.test(field))
  {
    document.getElementById("message1").style.color="Red";
    if(field.length==0)
    {
          document.getElementById("message1").innerHTML="first name is required";
    }
    else
    {
    document.getElementById("message1").innerHTML="Invalid";
  }
    return false;
  }
  else
  {
    if(field.length<3)
    {
          document.getElementById("message1").style.color="Blue";
      document.getElementById("message1").innerHTML="too short";
      return true;
    }
    else
    {
    document.getElementById("message1").style.color="Green";
    document.getElementById("message1").innerHTML="long enough";
    return true;
  }
  }


}

// function to check to lastname
function checkfield2()
{
  var field=document.getElementById("field2").value;
  var rel=/^[a-zA-Z\s\'\-]{0,15}$/;
    if(rel.test(field))
    {
  if(field.length<3)
  {
      document.getElementById("message2").style.color="Blue";
    document.getElementById("message2").innerHTML="too short";
    return true;
  }
  else
  {
      document.getElementById("message2").style.color="Green";
    document.getElementById("message2").innerHTML="long enough";
    return false;
  }
}
else
{
  document.getElementById("message2").style.color="Red";
  document.getElementById("message2").innerHTML="Invalid";
}

}

// function to validate phone number
function validatephone()
{
  var field=document.getElementById("phno").value;
  var rel=/^\+\d{2}-\d{10}$/;
  if(rel.test(field))
  {
    document.getElementById("phoneformat").style.color="Green";
    document.getElementById("phoneformat").innerHTML="<strong>valid</strong>";

  }
  else
  {
    document.getElementById("phoneformat").style.color="Red";
    document.getElementById("phoneformat").innerHTML="Invalid";
  }





}






// function to check email id
function checkfield4()
{
var field=document.getElementById("email_id").value;
if(field.length==0)
{
  document.getElementById("message4").style.color="Red";
  document.getElementById("message4").innerHTML="email_id is required";

}

}

// function to compute total cost for course
function compute()
{
  var totalcost=0;
document.getElementById("regcourses").innerHTML="";
document.getElementById("regcourses").style.visibility="hidden";
  if(document.getElementById("android").checked)
  {
    totalcost=totalcost+1000;
      document.getElementById("regcourses").innerHTML=document.getElementById("regcourses").innerHTML+ "  Android  , "  ;

  }
  if(document.getElementById("ios").checked)
  {
        document.getElementById("regcourses").innerHTML= document.getElementById("regcourses").innerHTML+ "  IOS , ";
    totalcost=totalcost+1500;

  }
  if(document.getElementById("Machine_learning").checked)
  {
        document.getElementById("regcourses").innerHTML=document.getElementById("regcourses").innerHTML +"  Machine_learning  "  ;
    totalcost=totalcost+5000;

  }
  if(document.getElementById("10percent").checked)
  {
      totalcost=totalcost*0.9;
  }
  if(document.getElementById("20percent").checked)
  {
    totalcost=totalcost*0.8;
  }


  if(totalcost==0)
  {

      alert('you did not select any course');
      return false;
  }

else
{
if(document.getElementById("field1").value.length==0||document.getElementById("email_id").value.length==0)
{
  alert('firstname and mailid are required');
}
else
{document.getElementById("regcourses").style.visibility="visible";

  document.getElementById("regcourses").innerHTML=" Registered courses :" +document.getElementById("regcourses").innerHTML;

  document.getElementById("order").innerHTML="Order Summary";
  document.getElementById("firstname").innerHTML="Firstname : "+document.getElementById("field1").value;
  document.getElementById("mail").innerHTML="Mail Id :"+document.getElementById("email_id").value;
  document.getElementById("cost").innerHTML="totalcost :"+totalcost;
}
    return true;
}

}
