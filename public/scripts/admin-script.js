console.log('connected')

// const authentication = require('express-authentication');
$(document).ready(function(){
// let ex = require('express');
// let app = ex();


    // app.use(function myauth(req, res, next) {

    // // provide the data that was used to authenticate the request; if this is
    // // not set then no attempt to authenticate is registered.
    // req.challenge = req.get('Authorization');

    // req.authenticated = req.authentication === 'jelly';

    // // provide the result of the authentication; generally some kind of user
    // // object on success and some kind of error as to why authentication failed
    // // otherwise.
    // if (req.authenticated)
    // {
    //   //on keydown
    //   $('#key').keydown(function(event) {

    //       //if enter button pressed
    //       if (event.keyCode == 13)
    //       {
    //           //if key is correct
    //           if(this.value === "jerry")
    //           {
    //               //grant access
    //               $("#auth").fadeOut('slow');
    //           }
    //           else
    //           {
    //               //wrong key
    //               alert('wrong key')
    //           }
    //       }
    //     });
    // }

    // // That's it! You're done!
    // next();
    // });

    // app.get('/admin', authentication.required());
    //when list is clicked fade in modal
    $("#list").on('click', function(){
        $("#message-container").fadeIn('slow');
    });

    //when clicked append list item to dom
    $("#addBot").on('click', function(){
        $('#listContainer').append('<div id="list">BOT</div>')
    });

    //on keydown
    $('#key').keydown(function(event) {

        //if enter button pressed
        if (event.keyCode == 13)
        {
            //if key is correct
            if(this.value === "jerry")
            {
                //grant access
                $("#auth").fadeOut('slow');
            }
            else
            {
                //wrong key
                alert('wrong key')
            }
        }
      });

//grab modal
let modal = document.getElementById("message-container");

    //if the modal is clicked close modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});


