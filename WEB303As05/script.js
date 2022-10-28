/*
    Assignment 05
    Viraj Girishbhai Patel
    0791762
*/

$(document).ready(function () {

    class ContentItem{
        uniqueId;
        name;
        description;
        position;
       
    constructor(uniqueId, name, description, position){
               this.uniqueId = uniqueId;
               this.name = name;
               this.description = description;
               this.position = position;
               }
       
    updateContentItem(uniqueId, name, description, position){
            if(this.uniqueId == uniqueId && name && description && position){
                   this.uniqueId = uniqueId;
                   this.name = name;
                   this.description = description;
                   this.position = this.position;
                   }
       
               }
            toString(){
            return $('#content-item-list').append(`<div class="content-item-wrapper">
            <div id="content-item-${this.uniqueId}">
            
            <h2 class="name">${this.name}</h2>
            
            <p class="description">${this.description}</p>
            
            <div class="position">${this.position}</div>
            </div>
            </div>`);
                }
           }
           
           let content = [
           {
               "uniqueId": 0,
               "name": "Viraj Girishbhai Patel",
               "description": "Did MBA from Standford University and started business in 2022 in the name of Supreme Surgicals ",
               "position": "Enterprenuer"
           },
           {
               "uniqueId": 1,
               "name": "Haresh Patel",
               "description": "Childhood friend of Viraj PAtel also an intern of Tata Motors",
               "position": "Chief Executive"
           },
           {
               "uniqueId": 2,
               "name": "Panna Laal",
               "description": "done with M Com from Malibu Unviversity",
               "position": "Managing Director"
           },
            {
               "uniqueId": 3,
               "name": "Shakshi Parmar",
               "description": "Worked for Johnsons also known for her lifetime achievement",
               "position": "Financial Advisor"
           },
           {
               "uniqueId": 4,
               "name": "Narshimha Patel",
               "description": "Handles every issue and fix things coming in the tech areas.",
               "position": "Tech Supporter"
           }
       
           ];
       
           $.each(content, function(key, val){
             $('#content-item-list').append(`<div class="content-item-wrapper">
               <div id="content-item-${this.uniqueId}">
               <h2 class="name">${this.name}</h2>
               <p class="description">${this.description}</p>
               <div class="position">${this.position}</div>
               </div>
           </div>`);
           });
          
        $('.content-item-wrapper').css('width', '50%');

          $('.content-item-wrapper').css('margin', 'auto'); 
         $('.content-item-wrapper').css('margin-bottom', '30px');
         $('.content-item-wrapper').css('marging-top', '30px');
        $('.content-item-wrapper').css('padding', '30px');
         $('.content-item-wrapper').css('border', 'solid 1px black');
       
       });


