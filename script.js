function checking()
{
  var ans=answer.value;
  if (ans=="KRUM")
    {
      document.getElementById("code").innerHTML=" Congrats, you got it right. The colour you are looking for is Red";
}
  else{
    document.getElementById("code").innerHTML="Check your answer";
  }
  
}