
function sendForm(form) {
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://lightsout.co/podcasts/Create', true);
    
    xhr.onload = function(e) { 
        alert ('onload called');
    };

    xhr.send(formData);
}

function queryService() {
     var xhr = new XMLHttpRequest();

    //xhr.open('GET', 'http://developersmackdown.com/services/odata/Shows(PodcastId=1,ShowId=54)?$format=json');
    xhr.open('GET', 'http://developersmackdown.com/services/odata/Shows(PodcastId=1,ShowId=54)');
    xhr.setRequestHeader('accept', 'application/json');

    xhr.onload = function (e) {  
                    
        //alert("in callback");
        $('#result').text(this.responseText);
                    
        var data = JSON.parse(this.responseText);
        $('#x').text(data.d.Title);
    }
            
    xhr.send();

};

function getBlob(){

    window.URL = window.URL || window.webkitURL;  // Take care of vendor prefixes.
    var xhr = new XMLHttpRequest();

    //xhr.open('GET', 'http://lightsout.co/img/html5_badge.png', true);
    xhr.open('GET', 'http://0.gravatar.com/avatar/592fd4bb2692c7d9fbe8f5ef3af52309?size=420', true);

    xhr.responseType = 'blob';

    xhr.onload = function(e) {
      
        if (this.status == 200) {
            var blob = this.response;

            var img = document.createElement('img');
            img.onload = function(e) {
              window.URL.revokeObjectURL(img.src);
            };

            img.src = window.URL.createObjectURL(blob);
            document.body.appendChild(img);
    
        }
    };

    xhr.send();

};