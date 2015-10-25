$(document).ready(function(){
    
    var number = prompt("Enter a number, bitch.");
    if(number > 18){
        number = prompt('Eighteen or less, motherfucker.')
    }
    
    $('.reset').on('click', function(){
        $('body').empty; 
        number = prompt("Enter a number, bitch.");
    });
    
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
    
    $('.cell').mouseenter(function(){
        $(this).addClass('black').fadeIn('slow');
    });
        

})