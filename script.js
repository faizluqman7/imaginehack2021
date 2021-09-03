function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i=0; i<x.length;i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}


	var link = 'https://api.openweathermap.org/data/2.5/weather?q=cyberjaya&appid=f5c785aab72d5c8b9bb02f30510b4183';
	var request = new XMLHttpRequest();
	request.open('GET',link,true);
	request.onload = function(){
		var obj = JSON.parse(this.response);
		document.getElementById('weather').innerHTML = Math.round(obj.main.temp - 273.15)+'   degrees celcius';
		document.getElementById('conditions').innerHTML = obj.weather[0].description;
	}
	if (request.status==200){
		console.log("error")
	}
	request.send();
	

function calculateenergy(){
	var rating = document.getElementById("rating").value;
	var hours = document.getElementById("hours").value;
	
	var result = (parseFloat(rating)*parseFloat(hours))/1000;
	
	if(!isNaN(result)){
		document.getElementById("kwh").innerHTML="Energy Usage: "+result+"kWh";
	}
}

function gototop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}