// AJAX atau asynchronous Javascript and XML yaitu mengambil data dari server....
// What is AJAX
// basically is simply an technique in Javascript to make us able to interact with asynchronous request.
// example if you get data from internet

const xhr = new XMLHttpRequest();

// Basic syntax for we learn looks like this
xhr.open("GET", "https://your-url", true)
// param 1 : is the method
// param 2 : is the url
// param 3 : true or false, if true means that we using asynchronous WebAssembly, if false means that we using synchronous way. It is recommended to make it true because we use asynchronous in here.

xhr.onload = function () {}; // to load and check the status of the request
xhr.onerror = () {}; //loaded when it is errorwhen we requesting the data
xhr.send(); //send the request to the server

// AJAX is a techique for making asynchronous HTTP request from a web page to a server, using the XMLHTTPRequest object in the browser. Since the XMLHTTPRequest object is specific to the browser environment, it cannot be use directly in Node.JS. So we gonna make it directly in our project.

// and it is gonna using connection too, because we are gonna using AJAx to request data on internet.