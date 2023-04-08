export default class GsapAnimation{
    construtor(array){
     this.tl = gsap.timeline({paused:true});
  
     this.arr = array.copy();
     
    }
    getLogged(){
      console.log(this.arr);
    }
    highlightBox = (box) => {
      this.tl.to(box, { backgroundColor: "#FFD700", duration: 0.5 });
    }
    resetBox = (box) => {
      this.tl.to(box, { backgroundColor: "#333", duration: 0.5 });
    }
    // Define the animation for moving the search pointer
    movePointer = (pointer, box) => {
    this.tl.to(pointer, { left: box.offsetLeft, duration: 0.5 }, "-=0.5");
    }
    // linear search
    linearSearch = (target) => {
      // Get the boxes
      const boxes = document.querySelectorAll(".box");
    
      // Create a search pointer element
      const pointer = document.createElement("div");
      pointer.classList.add("pointer");
      pointer.style.left = `${boxes[0].offsetLeft}px`;
      document.body.appendChild(pointer);
    
      // Loop through the boxes and highlight each one
      for (let i = 0; i < this.arr.length; i++) {
        // Highlight the current box
        this.highlightBox(boxes[i]);
    
        // Move the pointer to the current box
        this.movePointer(pointer, boxes[i]);
    
        // Check if the current box contains the target value
        if (this.arr[i] === target) {
          // If it does, reset the colors of all boxes and return the index
          this.tl.add(() => {
            boxes.forEach((box) => this.resetBox(box));
            document.body.removeChild(pointer);
          }, "-=0.5");
          return i;
        }
    
        // If it doesn't, reset the color of the current box
        this.resetBox(boxes[i]);
      }
    
      // If the target value isn't found, reset the colors of all boxes and return -1
      this.tl.add(() => {
        boxes.forEach((box) => this.resetBox(box));
        document.body.removeChild(pointer);
      }, "-=0.5");
      return -1;
    }
  }