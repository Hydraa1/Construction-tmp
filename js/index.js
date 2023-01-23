// const list = document.querySelectorAll('.nav-link');
// function activeLink(){
//     // this.classList.remove('cusa')
//     list.forEach((item)=>
//     item.classList.remove('show2'));
//     this.classList.add('show2');
//     // this.classList.add('cusa')
//     // list.forEach((item)=>
//     // item.classList.add('cusa'));
// }


// list.forEach((item) => 
// item.addEventListener('click', activeLink));

$('#cusid2').hide()

$(document).ready(function () {
    $('.searchdiv').hide()
    // let position = my_window.scrollTop()
    var my_window = $(window);
    my_window.scroll(function(){
        if(my_window.scrollTop() <= 10){
            $('#cusid').fadeIn(500)
            $('#cusid2').fadeOut(500)
        }else if (my_window.scrollTop() > 11){
            $('#cusid').fadeOut(500)
            $('#cusid2').fadeIn(500)
        }
        else{
            $('#cusid').fadeIn(500)
            $('#cusid2').fadeOut(500)
        }
        
    })
    // position == 0
    $('.search').click(function(){
        // $('#searchid').val('');
        // $('.searchdiv').hide(500)
        $('.searchdiv').slideDown(500)
        setTimeout(() => {
            $('#cusid').addClass('cusid')
            $('#cusid2').addClass('cusid')
        }, 200);
        
    })
    $('#exitbtn').click(function(){
        $('#searchid').val('');
        $('.searchdiv').slideUp(500)
        setTimeout(() => {
            $('#cusid').removeClass('cusid')
            $('#cusid2').removeClass('cusid')
        }, 200);
    })
    
});
