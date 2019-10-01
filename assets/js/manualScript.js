// window.onload = function () {
//      // Array of Images
//       var backgroundImg=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyB57zuc4bms-hDtWMa-4BZvscIlJDm4r7a9WLaO4SAxUvKM-DDA",
//                         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBinSpWOvAtkxjmkf709O3rjH2ObRbWAEn9s0JcWaeL6LMtCbOrQ",
//                         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY4J2qIFqkuDnABMzeypywbMSZL1cleS8vpySz0KD02wOYORU1g",
//                         "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQkdQT0zN0xDVP-VuvwojSbS5dOstX14eZvJCOWNPxKJ5dWTIc"
//                         ]

//         setInterval(changeImage, 5000);
//        function changeImage() {   
//         var i = Math.floor((Math.random() * 3));

// //         document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";

// //       }
// //     }

// $(document).ready(function(){
// $("#contact-form").on("submit",function(e){
// e.preventDefault();
// if($("#contact-form [name='your_name']").val() === '')
// {
// $("#contact-form [name='your_name']").css("border","1px solid red");
// }
// else if ($("#contact-form [name='your_email']").val() === '')
// {
// $("#contact-form [name='your_email']").css("border","1px solid red");
// }
// else
// {
// $("#loading-img").css("display","block");
// var sendData = $( this ).serialize();
// $.ajax({
// type: "POST",
// url: "contactform.php",
// data: sendData,
// success: function(data){
// $("#loading-img").css("display","none");
// $(".response_msg").text(data);
// $(".response_msg").slideDown().fadeOut(3000);
// $("#contact-form").find("input[type=text], input[type=email], textarea").val("");
// }
// });
// }
// });
// $("#contact-form input").blur(function(){
// var checkValue = $(this).val();
// if(checkValue != '')
// {
// $(this).css("border","1px solid #eeeeee");
// }
// });
// });

