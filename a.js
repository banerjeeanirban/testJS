const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => 
  {
  console.log(Http.responseText)
  data    =   {"some":"thing","another":"thing"};
  http({method: 'GET', url: '[the-target-url]', headers:   {'Authorization': '[your-api-key]'}
});
  
  
  


  
  
$.ajax({
   type : "GET",
   url : "[the-target-url]",
   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', '[your-api-key]');},
   success : function(result) {
       //set your variable to the result
   },
   error : function(result) {
     //handle the error
   }
 });
}












//gap gap gap


$.ajax({
   type : "POST",
   url : "[the-target-url]",
  data = {some2:thing2,another2:thing2},
   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', '[your-api-key]');},
   success : function(result) {
       //set your variable to the result
   },
   error : function(result) {
     //handle the error
   }
 });
}
