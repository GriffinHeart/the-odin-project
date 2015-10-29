$(document).ready(function(){
    
    var number = prompt("Enter a number, bitch.");

    while(isNaN(number)){
        alert("That's not a number, dumbshit.");
        number = prompt("Enter a number, bitch.");
    } 
    
    var code = '<div class="table">';
    for (i=0; i<number; i++){
        code+= '<div class="row">';
            for (j=0; j<number; j++){
                code+= '<div class="cell"></div>';
            }
        code+='</div>';
    }

    code+= "</div>"
        
    $('#container').append(code);
    
    $('.row div').mouseenter(function(){
        if($(this).hasClass('black')){    
        }
        else
        {
            $(this).hide().addClass('black').fadeIn('fast');
        }
    });
    
    $('.reset').on('click', function(){
        $('#container').empty(); 
       
        number = prompt("Enter a number, bitch.");
        while(isNaN(number)){
            alert("That's not a number, dumbshit.");
            number = prompt("Enter a number, bitch.");
        }
        
        var code = '<div class="table">';
        for (i=0; i<number; i++){
            code+= '<div class="row">';
            for (j=0; j<number; j++){
                code+= '<div class="cell"></div>';
            }
            code+='</div>';
        }   

        code+= "</div>"

        $('#container').append(code);
    
        $('.row div').mouseenter(function(){
            if($(this).hasClass('black')){
                
            }
            else
            {
                $(this).hide().addClass('black').fadeIn('fast');
            }
        });
        
    }); 
}); 