$(function(){$("a.page-scroll").bind("click",function(b){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},100,"easeInOutExpo");b.preventDefault()})});$("body").scrollspy({target:".navbar-fixed-top"});$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});$(".slider1").slick({dots:false,infinite:false,speed:400,autoplay:true,slidesToShow:1,slidesToScroll:1});var filtered=false;$(".filter").on("click",function(){if(filtered===false){$(".slider1").slick("slickFilter",":even");$(this).text("Unfilter Slides");filtered=true}else{$(".slider1").slick("slickUnfilter");$(this).text("Filter Slides");filtered=false}});$(".slider2").slick({dots:true,infinite:true,speed:300,slidesToShow:4,slidesToScroll:4,autoplay:600,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:true,dots:true}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,arrows:false}}]});$(".blog-slider").slick({dots:false,infinite:true,speed:300,slidesToShow:3,slidesToScroll:1,autoplay:600,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:true,dots:false}},{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:1,infinite:true,dots:false}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:true}}]});var image=document.getElementsByClassName("thumbnail");