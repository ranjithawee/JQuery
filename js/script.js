$(document).ready(function(){

















    

 // demo 40

 $(".doted").css("textDecoration", "underline");

 // demo 39

 $(".font_style").css("textTransform","capitalize");


 // demo 38

    $(".btn_mouseenter").on("mouseenter", function (){
        alert("this is mouseenter");
    })

 // demo 37

    $(".btn_dbl").on("dblclick", function(){
        alert("hi! you are sucessfull");
    })


 // demo 36

 $(".fadeToggle-1").on("click", function(){
    $(".fadeToggle").fadeToggle();
})



 // demo 35

 $(".fadeIN").on("click", function(){
    $(".fadeIn").fadeIn();
})
    

 // demo 34

    $(".fadeOut-1").on("click", function(){
        $(".fadeOut").fadeOut();
    })


 // demo 33

 $(".btn_slide2").on("click", function(){
    $(".slide_3").slideToggle(500);
})



 // demo 32

 $(".btn_slide1").on("click", function(){
    $(".slide_2").slideUp(500).slideDown(500);
})

 // demo 31

 $(".btn_slide").on("click", function(){
    $(".slide_1").slideUp(500);
})

 // demo 30

    $(".btn_toggle").on("click", function(){
        $(".peraShowHide").toggle(500);
    })

    // demo 29

    $(".btn_password").on("click", function (){

        var password1 = $(".password-1").val();
        var password2 = $(".password-2").val();

        if (password1!="" && password2!=""){
            if(password1 == password2){
                alert("You are successfull");
            }
            else{
                alert("Password does not match");
            }
        }
        else{
            alert("Please enter your correct Password");
        }

        $(".password_show").text("Password is "+password1);
        $(".password_re_show").text("Re-Password is "+password2);

    })


    // demo 28

$(".btn_email").on("click", function (){
    var email = $(".email").val();
    $(".value_email").text(email);
})



// demo 27

$(".btn_val").on("click", function (){
    var name = $(".name").val();
    $(".value_print").text(name);
})


// demo 26

$(".btn_multi").on("click", function(){
    var value = this.innerHTML;
    $(".demo10").text(value);
})



// demo 25

$(".btn_toggle2").on("mouseout", function (){
    $(".style_04").toggleClass("style_4");
})


// demo 24

$(".btn_toggle1").on("mouseover", function (){
    $(".style_03").toggleClass("style_4");
})


// demo 23

$(".btn_toggle").on("click", function (){
    $(".style_3").toggleClass("style_4");
})

// demo 22

$(".btn_p4").on("click", function(){
    $(".p4").removeClass("p4");
})

// demo 21

$(".btn_p3").on("click", function(){
    $(".p3").addClass("style1");
})

// demo 20

$("a").attr("href", "https://www.github.com/ranjithawee");

// demo 19

var newElement1 = $("<p></p>").text("This is new pera-3").css("background", "red");
$(".btn_p2").on("click", function(){
    $(".p2").before(newElement1);
})


// demo 18

var newElement = $("<p></p>").text("This is new pera-2").css("background", "red");
$(".btn_p1").on("click", function(){
    $(".p1").after(newElement);
})


// demo 17

$(".btn_bold").on("click", function(){
    $(".bold_1").html("<b>Bangladesh</b>");
})

// demo 16

$(".btn_prepend").on("click", function(){
    $(".prepend").prepend("Hi! this is prepend method ");
})


  // demo 15

    $(".btn_append").on("click", function(){
        $(".append").append(" Goodbye!").css("color", "red");
    })


  // demo 14

    $(".btn_add").on("click", function(){

        $("li").add(".add").css({"background": "red", "color": "white", "border": "3px solid black", "padding": "10px", "margin": "15px" });

    })

  // demo 13

    $(".btn_before").on("click", function(){
        $(".before_1").before("<p>Welcome! to before</p>");
    })



  // demo 12

    $(".btn_after").on("click", function(){
        $(".after_1").after("<p>Welcome! to after</p>");
    })


  // demo 11

 $(".video_1").text("This is video player");


  // demo 10

    $(".btn_w_h").on("click", function(){
        $(".width_heigh_100").css("width", "100px");
        $(".width_heigh_100").css("height", "100px");
        $(".width_heigh_100").css("backgroundColor", "red");
    })


   // demo 9

    $(".border_right").on("click", function(){
        $(".f_border_right").css("borderRight", "500px solid red");
    })



    // demo 8

    $(".border_bottom").on("click", function(){
        $(".f_border_bottom").css("borderBottom", "3px solid red");
    })

    // demo 7

    $(".fontSize30").on("click", function(){
        $(".b_font").css("fontSize", "30px");
    })

  // demo 6

    $(".colorBtn").on("click", function(){
       $(".c_color").css("color", "red");
    })


    // demo 5

    $(".cPera").on("click", function(){
        $(".pera").text("Changed");
    })


  // demo 4

    $(".b1").on("click", function(){
        $(".birds").attr("src", "images/b2.jpg");
    })
    $(".b2").on("click", function(){
        $(".birds").attr("src", "images/b3.jpg");
    })
    $(".b3").on("click", function(){
        $(".birds").attr("src", "images/b4.jpg");
    })


    // demo 3

    $(".bulb_on").on("click", function (){
       $(".bulb").attr("src", "images/on.gif");
    })
    $(".bulb_off").on("click", function (){
       $(".bulb").attr("src", "images/off.gif");
    })


    // demo 2

    $(".dShow").on("click", function(){
        $(".dShowHide").show();
    })

    $(".dHide").on("click", function(){
        $(".dShowHide").hide();
    })


    // demo 1
   $(".btn_alert").on("click", function (){
        alert("Welcome!");
   });


});
