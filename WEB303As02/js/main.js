// WEB303 Assignment 2
//Viraj Patel
//0791762
//2022-10-05


$(document).ready(function(){
  //$('#content-wrapper-').load('ajax.html #content');  
    $("#prospect").click(function(){

      
        $("#content").load("prospect.html", function(responseTxt1, content1, xhr){
            if(content1 == "success")
            {
                alert("Content for Prospect?");

               $("#content").fadeIn(3000);     
            }
                
            if(statusTxt1 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });

    });


    $("#convert").click(function(){
        $("#content").load("convert.html", function(responseTxt2, content2, xhr){
            if(content2 == "success") {
                alert("Content for Convert?");
                $("#content").fadeIn(3000);
            }
                
            if(statusTxt2 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });


    $("#retain").click(function(){
        $("#content").load("retain.html", function(responseTxt3, content3, xhr){
            if(content3 == "success") {
                alert("Content for Retain?");
            $("#content").fadeIn(3000);
        }
               //alert("Retain content loaded successfully!");
            if(statusTxt3 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
      
    });

});