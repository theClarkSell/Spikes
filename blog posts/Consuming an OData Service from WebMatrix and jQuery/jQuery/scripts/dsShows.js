jQuery(document).ready(function () {
    var query = "http://developersmackdown.com/services/odata/Shows" //root uri
    + "?$select=ShowId,Title,PublicUri" //reduce the payload to what we need
    + "&$orderby=ShowId%20desc" //order by and sort by the latest shows
    + "&$top=5" //take the top 5
    + "&$format=json" //give me json
    + "&$callback=callback"; //this is my callback
   
     jQuery.ajax({
        dataType: 'jsonp',
        url: query,
        jsonpCallback: 'callback',
        success: callback
    });

    function callback(result) {
        var shows = result.d;
        jQuery('#dsListTemplate').tmpl(shows).appendTo('#ds_shows');
    }
});