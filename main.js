
// //直接跳转
// $('#login').submit();

//点击后提交 跳转到另一个页面
$('#login-trigger')
.click(function(){
    $('#login').submit();
})

$('div')
.find('.child')
.css('border','2px solid #999');


$('div:first')
.css('border','2px solid blue');
$("#b")
.css('background','blue');
$('.b')
.css('background','red')
$('.a')
.css({
// //     color:'red',
// //     'background-color':'black',
// //     border:'15px solid gray',
})
.addClass('black');
$('input[type="number"]')
.css('background','yellow');
var c=$('.c')
c.hide();
c.fadeIn(10000);
var board=$('#board');

function toggle(){
if (board.hasClass('active')) {
    board.removeClass('active');
}else{
    board.addClass('active');
}
}
setInterval(toggle,200);
 var card =$('#card');
 var cardTrigger =$('#card-trigger');

 cardTrigger.on('click',
//  用on 的方法 》双击用dblclick 当单击的时候启用一个回掉函数function()
    function(){
        //如果card是可见的我们在隐藏
        if(card.is(':visible')){
            card.slideUp();
            // card.hide();
            //否则就显示
        }else{
            card.slideDown();
            // card.show();
        }

 })
 //当鼠标进入的时候我们就执行
 card.on('mouseenter',function(){
     card.addClass('active');
 })
//  当鼠标出去的时候
 card.on('mouseleave',function(){
    card.removeClass('active');
})

$('#nickname').blur();

//一开始里面的值都选中了
$('#nickname').select();

// //一开始就高亮了
// var nn=$('#nickname').focus();


//获取input中的值用val，也可以在其中设置值
// var nn=$('#nickname').val('Young');
// console.log("nn:",nn);