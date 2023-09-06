


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})


//   Email Js

function sendMail() {
    var params = {
      email: document.getElementById("email").value,
    };

    const serviceID = "service_5ozc1eg";
    const templateID = "template_4ocb9er";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("email").value = "";
        console.log(res);
        // alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}





// const loaderButton = document.getElementById('loaderButton');
// const loader = document.getElementById('loader');
// const buttonText = document.getElementById('buttonText');
// const textInput = document.getElementById('textInput');
// const successPopup = document.getElementById('successPopup');
// const closeButton = document.getElementById('closeButton');

// loaderButton.addEventListener('click', function() {
//   const inputValue = textInput.value.trim();
//   if (inputValue !== '') {
//     loader.classList.remove('hidden');
//     buttonText.classList.add('hidden');

//     // Simulating an asynchronous action
//     setTimeout(function() {
//       loader.classList.add('hidden');
//       buttonText.classList.remove('hidden');
//       successPopup.classList.remove('hidden');
//     }, 2000); // Delay of 2 seconds (2000 milliseconds)
//   }
// });

// closeButton.addEventListener('click', function() {
//   successPopup.classList.add('hidden');
// });




// const loaderButton = document.getElementById('loaderButton');
// const loader = document.getElementById('loader');
// const buttonText = document.getElementById('buttonText');
// const textInput = document.getElementById('email')

// loaderButton.addEventListener('click', function() {
//     const inputValue = textInput.value.trim();
//     if (inputValue !== '') {
//       loader.classList.remove('hidden');
//       buttonText.classList.add('hidden');

//       // Simulating an asynchronous action
//       setTimeout(function() {
//         loader.classList.add('hidden');
//         buttonText.classList.remove('hidden');
//       }, 1000); // Delay of 2 seconds (2000 milliseconds)
//     }
//   });



//   const successButton = document.getElementById('loaderButton');
//   const successPopup = document.getElementById('successPopup');
//   const closeButton = document.getElementById('closeButton');

//   successButton.addEventListener('click', function() {
//     const inputValue = textInput.value.trim();
//     if(inputValue !== ''){
//         setTimeout(function() {
//             successPopup.classList.remove('hidden');
//           }, 1000);
//     }
//      // Delay of 2 seconds (2000 milliseconds)
//   });

//   closeButton.addEventListener('click', function() {
//     successPopup.classList.add('hidden');
//   });






const successButton = document.getElementById('loaderButton');
const successPopup = document.getElementById('successPopup');
const closeButton = document.getElementById('closeButton');

successButton.addEventListener('click', function() {
  setTimeout(function() {
    successPopup.classList.remove('hidden');
  }, 1000);
});

closeButton.addEventListener('click', function() {
  successPopup.classList.add('hidden');
});



const loaderButton = document.getElementById('loaderButton');
const loader = document.getElementById('loader');
const buttonText = document.getElementById('buttonText');
const textInput = document.getElementById('email')

loaderButton.addEventListener('click', function() {
  loader.classList.remove('hidden');
  buttonText.classList.add('hidden');

  // Simulating an asynchronous action
  setTimeout(function() {
    loader.classList.add('hidden');
    buttonText.classList.remove('hidden');
  }, 1000);
});
