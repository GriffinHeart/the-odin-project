$(document).ready(function(){
    
    var number;                                             /* Declare the variable */
    
    function getNumberMakeTable(a_number){                  /* Create a function that asks for a number, */
        
        number = prompt("Enter a number, bitch.");          /* uses that number for the rows and columns */
                                                            /* in a table, and then give the table life */
        while(isNaN(number)||number==""){                   /* If the prompted number of rows and columns */
            alert("That's not a number, dumbshit.");        /* isn't a number or is blank, keep asking for */
            number = prompt("Enter a number, bitch.");      /* a number. */
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


