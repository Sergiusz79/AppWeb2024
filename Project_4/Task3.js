function ustawKolor()  
{
    color=document.getElementById("poleTekstowe").value;  
    element=document.getElementById("akapit"); 
    element.style.backgroundColor="rgb(" + color + "," + color + "," + color + ")";
}