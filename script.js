// Set up the GSAP timeline
const tl = gsap.timeline({ paused: true });

// Define the animation for highlighting a box
const highlightBox = (box) => {
  tl.to(box, { backgroundColor: "#FFD700", duration: 0.5 });
};

// Define the animation for resetting a box's color
const resetBox = (box) => {
  tl.to(box, { backgroundColor: "#333", duration: 0.5 });
};

// Define the animation for moving the search pointer
const movePointer = (pointer, box) => {
  tl.to(pointer, { left: box.offsetLeft, duration: 0.5 }, "-=0.5");
};

// Define the search function
const linearSearch = (arr, target) => {
  // Get the boxes
  const boxes = document.querySelectorAll(".box");

  // Create a search pointer element
  const pointer = document.createElement("div");
  pointer.classList.add("pointer");
  pointer.style.left = `${boxes[0].offsetLeft}px`;
  document.body.appendChild(pointer);

  // Loop through the boxes and highlight each one
  for (let i = 0; i < arr.length; i++) {
    // Highlight the current box
    highlightBox(boxes[i]);

    // Move the pointer to the current box
    movePointer(pointer, boxes[i]);

    // Check if the current box contains the target value
    if (arr[i] === target) {
      // If it does, reset the colors of all boxes and return the index
      tl.add(() => {
        boxes.forEach((box) => resetBox(box));
        document.body.removeChild(pointer);
      }, "-=0.5");
      return i;
    }

    // If it doesn't, reset the color of the current box
    resetBox(boxes[i]);
  }

  // If the target value isn't found, reset the colors of all boxes and return -1
  tl.add(() => {
    boxes.forEach((box) => resetBox(box));
    document.body.removeChild(pointer);
  }, "-=0.5");
  return -1;
};


const binarySearch = (arr, target) => {
    // Get the boxes
    const boxes = document.querySelectorAll(".box");
  
    // Create a search pointer element
    const pointer = document.createElement("div");
    pointer.classList.add("pointer");
    pointer.style.left = `${boxes[0].offsetLeft}px`;
    document.body.appendChild(pointer);
  
    // Define variables for the start and end indices
    let start = 0;
    let end = arr.length - 1;
  
    // Loop until the start and end indices cross over
    while (start <= end) {
      // Calculate the middle index
      const mid = Math.floor((start + end) / 2);
  
      // Highlight the middle box
      highlightBox(boxes[mid]);
  
      // Move the pointer to the middle box
      movePointer(pointer, boxes[mid]);
  
      // Check if the middle box contains the target value
      if (arr[mid] === target) {
        // If it does, reset the colors of all boxes and return the index
        tl.add(() => {
          boxes.forEach((box) => resetBox(box));
          document.body.removeChild(pointer);
        }, "-=0.5");
        return mid;
      }
  
      // If the target value is less than the middle value, search the left half of the array
      if (target < arr[mid]) {
        end = mid - 1;
      }
      // If the target value is greater than the middle value, search the right half of the array
      else {
        start = mid + 1;
      }
  
      // Reset the color of the middle box
      resetBox(boxes[mid]);
    }
  
    // If the target value isn't found, reset the colors of all boxes and return -1
    tl.add(() => {
      boxes.forEach((box) => resetBox(box));
      document.body.removeChild(pointer);
    }, "-=0.5");
    return -1;
  };

  // Test the function
const arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
const target = "D";
const index = linearSearch(arr, target);

tl.play();