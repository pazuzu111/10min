console.log('connected')

$(document).ready(function(){

    //when list is clicked fade in modal
    $("#list").on('click', function(){
        $("#message-container").fadeIn('slow');
    });

    //when clicked append list item to dom
    $("#addBot").on('click', function(){
        $("#addData").fadeIn('slow');
    });

    $('#add').click(function(event) {

        $("#addData").fadeOut('slow');
    });

    //on keydown
    $('#key').keydown(function(event) {

        //if enter button pressed
        if (event.keyCode == 13)
        {
            //if key is true
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


