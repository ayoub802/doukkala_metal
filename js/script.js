// const text = new SplitType("#text")
// const preloader = document.querySelector(".preloader");

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
//             gsap.to('.loading-words', {
//               display: 'none',
//               opacity: 0
//             })
//             preloader.classList.add("removeheight");
//           },
//         });
//       },
//     });
//   },
// })

