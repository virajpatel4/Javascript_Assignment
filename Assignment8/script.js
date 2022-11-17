
$(document).ready(function(){  
           $('#find').keyup(function(){  
                show($(this).val());  
           });  
           function show(value){  
                $('#tb tr').each(function(){  
                     var w = 'false';  
                     $(this).each(function(){  
                       if(   $(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0  )
                          {  
                               w = 'true';  
                               $(this).css('bgcolor', 'yellow'); 
                           $(this).css('color', 'white');
                          }  
                          else{
                              $(this).css('background', 'yellow'); 
                           $(this).css('color', 'blue');
                         }
                     });  
                    
                       
                });  
           }  
      });  


 $(document).ready(function(){
 $.getJSON("data.json", 
 function (data) {
var student = '';


$.each(data, function (key, value) {


 student += '<tr>';
 student += '<td>' + 
     value.movieId+ '</td>';

 student += '<td>' + value.firstName + '</td>';

 student += '<td>' + value.lastName + '</td>';

 student += '<td>' + value.jounra + '</td>';

     
 student += '<td>' + 
 value.director + '</td>';

 student += '</tr>';
});

//INSERTING ROWS INTO TABLE 
$('#tb').append(student);
 });
});