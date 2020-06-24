var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}
var ip = "play.trenend.eu"
var theurl = 'https://api.mcsrvstat.us/2/' + ip;
var client = new HttpClient();
client.get(theurl, function(response) {
    var response1 = JSON.parse(response);
    if (response1.online == true){
      var status = "Online";
    } else {
      var status = "Offline";
    }
    document.getElementById("ip").innerHTML = ip;
    document.getElementById("status").innerHTML = status;
    document.getElementById("version").innerHTML = response1.version;
    document.getElementById("players.online").innerHTML = response1.players.online;
});
