
$(function(){


 $("#userInput").keypress(function(key) {
    

const bigList = $("#list-group");
const bigInput = $("#userInput");


const userText = bigInput.val();


            if(key.keyCode == 13) 
            {

                         var audio = new Audio('voice.mp3');
                         audio.volume = 0.5;                         
                         audio.play()


                        event.preventDefault();
            

                        console.log(userText);
                      

                        bigInput.val(" ");


                         bigList.append("<li class='list-group-item list-group-item bg-dark text-white text-left'>" + "<b>User : </b>" + userText + "</li>");


                         $("html, body").scrollTop($("body").height());
                         
                       
            }
            

            else
            {
                return;
            }



            const queryParams = {
                "userInput" : userText
            }


            $.get("/chat", queryParams)
            .done(function(resp) {


                const nextListItem = "<li class='list-group-item list-group-item-primary bg-warning text-black text-right'>" + "<b>Hal :</b> " + resp + "</li>";
                

                $("html, body").scrollTop($("body").height());                
                bigList.append(nextListItem)        
                        
            })
            
            
           
       
    });
   
});


