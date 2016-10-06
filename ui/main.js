//var button = document.getElementById('counter');
//var counter = 0;
//button.onclick = function () {
    //counter = counter + 1;
    //var span = document.getElementById("count");
    //span.innerHTML = counter.toString();
//};

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechangew = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http://venkiradkris.imad.hasura-app.io/counter', true);
    request.send(null);
};