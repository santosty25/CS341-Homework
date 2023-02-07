

$(document).ready(function() {

    //This case edits the page when the order has been placed
    $("#order").click(function(){
        //Check what is typed in the notes
        var notes = $("#notes").val(); 

        if(notes.indexOf("vegan") >= 0){
            //alert the user that the cheesecake isn't vegan
            alert("The cheesecakes include dairy.");
        } else {
            var plain = $("#topping1").val();
            var cherry = $("#topping2").val();
            var chocolate = $("#topping3").val();
            var quantity = $("#quantity").val();
            var topping;

            //Check which topping was selected
            if(plain) {
                topping = "Plain";
            } else if(cherry) {
                topping = "Cherry";
            } else if(chocolate) {
                topping = "Chocolate";
            }

            //remove order form and print text repeating order
            $("#toppings").remove();
            $("#order").replaceWith("<p>Thank you! Your order has been placed. Your order was" + quantity + " " 
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