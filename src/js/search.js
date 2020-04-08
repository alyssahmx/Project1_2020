var cities=new Array(3);
cities[0]=new Array("Shanghai","Kunming","Beijing","Yantai");
cities[1]=new Array("Tokyo","Osaka","Kamakura");
cities[2]=new Array("Roma","Milan","Venice","Florence");
cities[3]=new Array("New York","San Francisco","Washington");

function changeCity(val){
    var cityEle=document.getElementById("city");
    cityEle.options.length=0;
    for(var i=0;i<cities.length;i++){
        if(val==i){
            for(var j=0;j<cities[i].length;j++){
            var textNode=document.createTextNode(cities[i][j])
            var opEle=document.createElement("option");
            opEle.appendChild(textNode);
            cityEle.appendChild(opEle);
            }
        }
    }
}