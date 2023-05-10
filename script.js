let textLength = 13;
let i = 1;
let typingSpeed = 70;
let isPaused = false;

const opacityFunc = () => {
  if (i <= textLength) {
    let currentElementID = "typing-" + i;
    let previousElementID = "typing-" + (i - 1)

    let element = document.getElementById(currentElementID);
    let previousElement = document.getElementById(previousElementID)

    element.style.textDecoration = 'underline';

    setTimeout(() => {
      element.style.opacity = 1;
      if (previousElement){previousElement.style.textDecoration = 'none';}
      i++;
      if (!isPaused) {
        opacityFunc(); // call the function recursively to process the next element
      }
    }, typingSpeed);
  } else {
    i = 1; // reset the counter
  }
};

const interval = setInterval(() => {
  if (!document.hidden) {
    for (let j = 1; j <= textLength; j++) {
      let currentElementID = "typing-" + j;
      let element = document.getElementById(currentElementID);
      if (element) {
        element.style.opacity = 0;
      }
    }
    opacityFunc();
  } else {
    isPaused = true;
  }
}, 2000); // repeat after 2 seconds

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    isPaused = true;
  } else {
    isPaused = false;
  }
});
