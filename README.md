# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![DESKTOP Preview](/screenshots/desktop_preview.jpg)
![MOBILE Preview](/screenshots/mobile_preview.jpg?raw=true "MOBILE_PREVIEW")

### Links

- Solution URL: [REPO](https://github.com/amithjolly/faq-accordion-card-main)
- Live Site URL: [Live Site](https://amithjolly.github.io/faq-accordion-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- js

### What I learned

As I'm learning js this project helped me get more understanding about javascript and its concepts, I got many help mainly from our awesome frontend community as well as from YouTube videos.
This is the two code snippets that I got to learn from this challenge
both gets the job done.
```js

const faqs = document.querySelectorAll(".question")
faqs.forEach((question) =>
    question.addEventListener("click", () => {
        question.parentNode.classList.toggle("active");
    }))
 
//both this two code snippets gives the same output

    this.addEventListener("DOMContentLoaded", () => {
         const questions = document.querySelectorAll(".question")
        questions.forEach((question) => question.addEventListener("click", () => {
             if (question.parentNode.classList.contains("active")) {
                question.parentNode.classList.toggle("active")
            } else {                 questions.forEach(question => question.parentNode.classList.remove("active"))
                question.parentNode.classList.add("active")             }

         }))
     })
}
```
### Continued development

As I'm starting to get a grasp of two simple but powerful languages HTML, CSS. I'm planing to start on with small js alongside with it
in my future challenges hope to reach my goal of becoming a front-end developer and keeping myself motivated to code everyday. 



## Author

- Frontend Mentor - [@amithjolly](https://www.frontendmentor.io/profile/amithjolly)
