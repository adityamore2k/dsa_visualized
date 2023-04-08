import GsapAnimation from "./javascript/GsapAnimation.js";

function linear_search_visualizer(){
  // Define the search function
  
  let arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const target = "D";
  
  const linear_search = new GsapAnimation(arr);
  
  // arr is undefined???
  linear_search.linearSearch(target);

}

document.getElementById("linear-search").onclick=linear_search_visualizer;


// function binary_search_visualizer(){
//   const binarySearch = (arr, target) => {
//       const tl = gsap.timeline({ paused: true });
  
//       // Get the boxes
//       const boxes = document.querySelectorAll(".box");
    
//       // Create a search pointer element
//       const pointer = document.createElement("div");
//       pointer.classList.add("pointer");
//       pointer.style.left = `${boxes[0].offsetLeft}px`;
//       document.body.appendChild(pointer);
    
//       // Define variables for the start and end indices
//       let start = 0;
//       let end = arr.length - 1;
    
//       // Loop until the start and end indices cross over
//       while (start <= end) {
//         // Calculate the middle index
//         const mid = Math.floor((start + end) / 2);
    
//         // Highlight the middle box
//         highlightBox(boxes[mid]);
    
//         // Move the pointer to the middle box
//         movePointer(pointer, boxes[mid]);
    
//         // Check if the middle box contains the target value
//         if (arr[mid] === target) {
//           // If it does, reset the colors of all boxes and return the index
//           tl.add(() => {
//             boxes.forEach((box) => resetBox(box));
//             document.body.removeChild(pointer);
//           }, "-=0.5");
//           return mid;
//         }
    
//         // If the target value is less than the middle value, search the left half of the array
//         if (target < arr[mid]) {
//           end = mid - 1;
//         }
//         // If the target value is greater than the middle value, search the right half of the array
//         else {
//           start = mid + 1;
//         }
    
//         // Reset the color of the middle box
//         resetBox(boxes[mid]);
//       }
    
//       // If the target value isn't found, reset the colors of all boxes and return -1
//       tl.add(() => {
//         boxes.forEach((box) => resetBox(box));
//         document.body.removeChild(pointer);
//       }, "-=0.5");
//       return -1;
//     };
//     const arr=[1,2,3,4,5,6,7,8];
//     const target=3;
//     let index = binarySearch(arr,target);

//     tl.play();
// }
// document.getElementById("binary-search").onclick = binary_search_visualizer