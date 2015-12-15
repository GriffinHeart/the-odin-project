$(document).ready(function(){
    
    var number;                                             /* Declare the variable */
    
    function getNumberMakeTable(a_number){                  /* Create a function that asks for a number, */
        
        number = prompt("Enter a number, foo'.");          /* uses that number for the rows and columns */
                                                            /* in a table, and then give the table life */
        
        while(isNaN(number)||number==""||number > 100){    /* If the prompted number of rows and columns isn't a number or is blank or is too large, keep asking for a number. */
            if (isNaN(number)||number==""){
                alert("That's not a number, foo'.");        /* If it's not a number then prompt for a number */
                number = prompt("Enter a number. Now.");    
            }
            else
            {
                alert("That number's too big, yo.");        /* If the prompted number of rows and columns */
                number = prompt("Enter a number. Now.");        /* is over 100, ask for a new number*/
            }
        }
        
        var code = '<div class="table">';                   /* Make that table */
        for (i=0; i<number; i++){
            code+= '<div class="row">';
            for (j=0; j<number; j++){
                code+= '<div class="cell"></div>';
            }
            code+='</div>';
        }
        code+= "</div>"
        $('#container').append(code);                       /* Add the code for the table to the element with */
                                                            /* id container */    
        
        $('.row div').mouseenter(function(){                /* Change cell colors when the cursor enters them */
            if($(this).hasClass('black')){                  /* Check if the cell is already black */
            }                                               /* If it is, do nothing */
            else
            {
                $(this).hide().addClass('black').fadeIn('fast');    /* If it isn't, hide the white cell and */
            }                                                       /* fade in the black one */
        });
    }
    
    
    /* End of defining the function, start of code */
    
    
    getNumberMakeTable(number);                 /* Run the function */
    
    $('.reset').on('click', function(){         /* Make the reset button work */
        $('#container').empty(); 
        
        getNumberMakeTable(number);
        
    }); 
}); 


