app.service('myserv', function() {
          this.getServiceList = function () {
    return [];
}
this.getISEndpoint = function() { 
 return 'http://IBM-PW07ED9G.pembo.local:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "14-08-2024 12:16:20 BST";
}
this.getPackageInfo = function(){
 return{"packageName":"fibonacciSequence","displayName":"FibonacciSequence","status":"Obsolete","tags":[""],"version":"1.0","buildNumber":"","description":"Fib Seq"};
}
});
