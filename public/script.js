$(document).ready(()=>{

     // input fonctionality
     const increment = $("#up"),
     decrement = $("#down"),
     input = $('#input-command');

    increment.on("click", (e)=>{
    var value = parseInt(input.val(), 10)
    if(value < 30){
        input.val(value + 1)
    }else{
        return
    }
    })

    decrement.on("click", (e)=>{
    var value = parseInt(input.val(), 10)
    console.log(value)
    if(value > 1){
        input.val(value - 1)
    }else{
        return
    }
    })

    /**
     * accordions features
     */
    $('.accordions #btn-accordion').each((i, btn)=>{
        $(btn).on('click', function(e){
        $(this).next().fadeToggle()
        $(this).toggleClass('active') // for chrevron rotation
        })
    })

})