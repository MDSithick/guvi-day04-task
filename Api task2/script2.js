var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var result = JSON.parse(req.response);
    for(let i=0; i< result.length; i++) {
        const country = result[i];
        console.log("country name", country.name.common,"region",country.region,"subregion",country.subregion,"population",country.population);
    }
}