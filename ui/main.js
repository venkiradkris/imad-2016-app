

var button = document.getElementById('counter');
button.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
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

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
            if (request.status === 200) {
    
    
                //var names = ['name 1', 'name 2', 'name 3', 'name 4'];
                var names = request.ResponseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i<names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');    
                ul.innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://venkiradkris.imad.hasura-app.io/submit-name/' +name, true);
    request.send(null);
};
