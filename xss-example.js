// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

document.write(DOMPurify.sanitize("Hello to you!!!!!!!, " + username + "!!!"));
