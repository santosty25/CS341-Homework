
//Tyler Santos
//Javascript file for Cheesecake HTML
//2/8/23
$(document).ready(function() {

    //This case edits the page when the order has been placed
    $("#order").click(function(){
        //Check what is typed in the notes
        var notes = $("#notes").val(); 

        if(notes.indexOf("vegan") >= 0){
            //alert the user that the cheesecake isn't vegan
            alert("The cheesecakes include dairy.");
        } else {
            var quantity = $("#quantity").val();
            var topping;

            //Check which topping was selected
            if( $('#topping1').is(':checked') ) {
                topping = "Plain";
            } else if( $('#topping2').is(':checked') ) {
                topping = "Cherry";
            } else if( $('#topping3').is(':checked') ) {
                topping = "Chocolate";
            }

            //remove order form and print text repeating order
            $("#toppings").remove();
            $("#order").replaceWith("<p>Thank you! Your order has been placed. Your order was " + quantity + " " 
                + topping + ". Notes: " + notes +"</p>");
        }
    });

    
});

    //This code for the drop down menu was taken from w3schools
    //https://www.w3schools.com/howto/howto_css_dropdown.asp

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        } 
    } 
    
    // Changes the text of the drop down menu when pressed
    function changeButtonText(value) {
        document.getElementById("monthButton").innerText = value;
    }