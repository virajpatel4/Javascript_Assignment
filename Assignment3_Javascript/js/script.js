//Viraj PAtel
//0791762
//2022-10-11

function AjaxData()
{
    $.ajax({
        url: "team.json",
        beforeSend: function() {
            var h1 = `<h1>Loading...</h1>`;
            $("div#team").html(h1);

        },
        error: function(xhr){
            alert("An error has found");

        },
        success: function(result){
            setTimeout(() => {
                $("div#team").html("");
                $.each(result, (index, data)=>{
                    $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
                });

            }, 3000);
        }
    });
}

function JSONData()
{
    $.getJSON( "team.json", function( result ) {    
        
        $.each( result, function( index, data ) {
            $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
        });
    });
}

$(document).ready(function()
{
    JSONData();
});
