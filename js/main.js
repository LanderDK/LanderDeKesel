
if (sessionStorage.hasOwnProperty("name")) 
{
    h1Hallo.innerText = `Hallo ${sessionStorage.getItem("name")}, ik ben`;
}

if (!sessionStorage.hasOwnProperty("nameEntered")) 
{
    alert(
        "Note:\n\nDeze website is nog in opbouw!\nDe huidige staat is niet representatief voor het eindresultaat."
      );
      
    let naam;
    naam = prompt("Hallo daar!\nHoe mag ik u aanspreken? (annuleer indien nodig)");
    
    if (naam != null)
    {
        const h1Hallo = document.getElementById("h1Hallo");
        h1Hallo.innerText = `Hallo ${naam}, ik ben`;
        sessionStorage.setItem("nameEntered", true);
        sessionStorage.setItem("name", naam);
    }
}