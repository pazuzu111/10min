console.log('connected')

$(document).ready(function(){

//***************** username input ******************

    //on keydown
    $('.usernameInput').keydown(function(event) {

        //if enter key is pressed
        if (event.keyCode == 13)
        {
            //if value is null or empty
            if(!this.value || this.value === " ")
            {
                //alert user for input
                alert('you have to put in a username')
            }
            else
            {
                //grant access to chat
                $('#username-container').fadeOut('slow');
                $('form').fadeIn('slow');

                //run chat function
                runChat()
            }
        }
  });
//***************************************************

//********************** chat ***********************

function runChat(){

//wait 10 mins to kick user out
setTimeout(off,600000)

    $(()=> {

        //declare variables
        let socket = io();
        let name = $('.usernameInput').val()

        //upon submit
        $('form').submit(function(){

            //put name and message inside for easy use
            const message = {
              name : name,
              msg : $('#m').val()
            }

            //emit data
            socket.emit('message', message);

            //initialize the input
            $('#m').val('');
            return false;

        });

        //on receive(chat)
        socket.on('message', function(msg){

            //append to dom
            $('#messages').append($('<li>').text(`${msg.name}: ${msg.msg}`));

        });

        //on receive (bot)
        socket.on('bot', function(messages){
            for (let i=0; i < 9; i++)
            {
                //pause 5 seconds before each append
                setTimeout(function timer()
                {
                    //append to dom
                    $('#messages').append($('<li>').text(`${messages[i].name}: ${messages[i].message}`));
                }, i*5000 );
            }
        });
    });
}
//*********************************************

//kick user out of server, redirect to index
function off(){
    window.location.href = "/";
    alert('Disengaging chat')
}
});
