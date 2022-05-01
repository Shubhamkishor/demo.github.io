// JavaScript Document
$(document).ready(function() {
 	"use strict";
$(window).resize(function(){
	if ($(window).width() >= 980){	

     
      $(".navbar .dropdown-toggle").hover(function () {
         $(this).parent().toggleClass("show");
         $(this).parent().find(".dropdown-menu").toggleClass("show"); 
       });

        
      $( ".navbar .dropdown-menu" ).mouseleave(function() {
        $(this).removeClass("show");  
      });
  
		 
	}	
});  
  
	//toggle filter
	$(".open-subCategory").click(function(){
		$(this).children("i").toggleClass("fa fa-angle-down fa fa-angle-up");
		$(".sub-category").slideToggle();
	});
	
	//Mobile Menu
 	$(".dropdownMenu").click(function(){
		$(this).siblings(".dropdownList").toggle();
		$(this).parent("li").siblings("li").children(".dropdownList").hide();
		$(this).parent("li").siblings("li").find(".dropdownMenu i").removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
		$(this).children("i").toggleClass("fa fa-angle-down fa fa-angle-up");
	});
	
	//sidebar Menu
	$(".sidebar-btn").on("click", function(){
		$(".sidebar-menu").addClass("open-menu");
		$(".menu-overlay").show();
		$("body").css("overflow","hidden");
	});
	$(".menu-overlay").on("click", function(){
		$(this).hide();
		$(".sidebar-menu").removeClass("open-menu");
		$("body").css("overflow","auto");
	});
	$(".close_menu").on("click", function(){
		$(".sidebar-menu").removeClass("open-menu");
		$(".menu-overlay").hide();
		$("body").css("overflow","auto");
	});
	
	//mobile search box
	$(".mobile-search-btn").click(function(){
		$(".mobile-search").toggle();
	});
	
	//signup model
	$(".create-signup a").click(function(){
		$("body").addClass("modal-open");
	});
  
	//mobile filter toggle
	$(".show-cate-mob").click(function(){
		$(this).parent(".filter-title").next(".filter-form-data").slideToggle();
		$(this).children("i").toggleClass("fa fa-angle-up fa fa-angle-down");
	});
	
	//mobile filter open close
	$(".mobile-filter-btn").click(function(){
		$(".mobile-filter").toggleClass("open-menu");
		$(".filter-overlay").toggle();
		$("body").toggleClass("filter-open");
		
	});
	$(".filter-overlay").on("click", function(){
		$(this).hide();
		$(".mobile-filter").removeClass("open-menu");
		$("body").removeClass("filter-open");
	});
	 
	
	
 
$('#user_button').toggle(function () {
    $("#user_button").css({borderBottomLeftRadius: "0px"});
}, function () {
    $("#user_button").css({borderBottomLeftRadius: "5px"});
});

// document ready  
});








