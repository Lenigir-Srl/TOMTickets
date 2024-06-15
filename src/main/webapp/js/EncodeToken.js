document.addEventListener("DOMContentLoaded", function() {
    var sessionId = '<%= request.getSession().getId() %>';  // Get session ID from the server

    // Function to encode URLs
    function encodeUrl(url) {
         if (url.indexOf(';jsessionid=') !== -1) {
             return url; // Session ID already present
         }

         var anchorIndex = url.indexOf('#');
         var queryIndex = url.indexOf('?');
         var index = (queryIndex === -1) ? (anchorIndex === -1 ? url.length : anchorIndex) : queryIndex;

         return url.substring(0, index) + ';jsessionid=' + sessionId + url.substring(index);
    }

    // Update all <a> tags
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].href != "") {
            links[i].href = encodeUrl(links[i].href);
        }
    }

    // Update all form actions
    var forms = document.getElementsByTagName('form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].action = encodeUrl(forms[i].action);
    }

    // Update buttons with a specific attribute (if needed)
    var buttons = document.querySelectorAll('button[data-url]');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('data-url', encodeUrl(buttons[i].getAttribute('data-url')));
    }
});
