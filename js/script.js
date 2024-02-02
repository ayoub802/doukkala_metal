// const text = new SplitType("#text")
// const boxes = document.querySelector(".boxes_wrapper")
// const preloader = document.querySelector(".preloader")
// gsap.from(".char", {
//   y: 105,
//   stagger: .06,
//   duration: .3,
//   rotate: 5,
// //   ease: "back.out(1.7)",
//   ease: "power1.out",

//   onUpdate: (progress) => {
//     // Update opacity during the animation
//     gsap.set("#text", { opacity: progress });
//   },
//   onComplete: () => {
//     // Zoom in animation
//     gsap.to("#text", {
//       scale: 1.2,
//       duration: 0.5,
//       stagger: 0.1,
//       ease: "power1.out",
//       onComplete: () => {
//         // Zoom out animation
//         gsap.to("#text", {
//           opacity: 0,
//           duration: 0.5,
//           ease: "power1.out",
//           onComplete: () => {
//             // Animation complete, add a class to .boxes
//             boxes.classList.add("animastart");
//             preloader.classList.add("removeheight");
//           },
//         });
//       },
//     });
//   },
// })
// const boxes = document.querySelector(".boxes")
// const tween = gsap.to(boxes, {yPercent:-50, repeat:3, ease:"none"})

// const eased = gsap.to(tween, {totalProgress:1, duration:0.5, ease:"power4.inOut"})

var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper_button-next",
    prevEl: ".swiper_button-prev",
  },
  speed: 700, // Set the duration in milliseconds

});



// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

