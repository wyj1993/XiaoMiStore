$(function(){
    /*****购物车*****/
    $(".first-nav .top_cart").hover(
        function(){
            $(this).find("div").css("zIndex",999)
            .slideDown(100);
        },
        function(){
            
            $(this).find("div").slideUp();
        }
    )
    /*** 二维码弹出层**** */
    $(".header .container .top_nav li.app").hover(function(){
        $(this).children("div").toggle();
    })
    /****搜索框***/
    $(".header>.container form>input:text").focus(function(){
            $(this).css("border","1px solid #ff6700");
            $(this).next().css({
                "border":"1px solid #ff6700",
                "border-left":0
            })
            .siblings("div.search-hot-words").hide();
            $(this).siblings(".keyword-list").show();
    })
    $(".header>.container form>input:text").blur(function(){
        $(this).css("border","1px solid #a8a8a8");
        $(this).next().css({
            "border":"1px solid #a8a8a8",
            "border-left":0
            })
        .siblings("div.search-hot-words").show();
        $(this).siblings(".keyword-list").hide();
    })
    /**** 子菜单弹出层*** */

   $(".header .nav-list>li").hover(
       function(){
        var $li=$(this);
        var index=$li.index();
        $li.parents(".container").next().find(`div.child${index}`).show();
       },
        function(){
            var $li=$(this);
            var index=$li.index();
            var $div=$li.parents(".container").next().find(`div.child${index}`);
            if($div.length==0){
                return ;
            }
            if(!$div.is(':hover')){
                $div.hide();
            }else{
                $div.mouseleave(function(){
                $div.hide();
                })
            }
            }
        );
})













  

































