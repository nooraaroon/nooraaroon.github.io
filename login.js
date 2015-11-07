var xmlHttp=createXmlHttpRequestObject(); 

function createXmlHttpRequestObject()
{
  var xmlHttp; 
  
  if(window.ActiveXObject)
  {
    try
    {
      xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"); 
    }
    catch(e)
    {
      xmlHttp=false; 
    }
    else
    {
      try
      {
        xmlHttp=new XMLHttpRequest(); 
      }
      catch(e)
      {
        xmlHttp=false; 
      }
    }
    if(!xmlHttp)
    {
      alert("Unable to create object");
    }
    else
    {
      return xmlHttp; 
    }
  }
}

function process()
{
  if(xmlHttp.readyState==0 || xmlHttp.readyState==4)
  {
    username=encodeURIComponent(document.getElementByID("username").value);
    username=encodeURIComponent(document.getElementByID("password").value);
    xmlHttp.open("GET","login.php?username="+username,true); 
    xml.onreadystatechange=handleServerResponse;
    xmlHttp.send(null);
  }
  else
  {
    setTimeout('process()',1000);
  }
}
