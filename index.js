const faqs = document.querySelectorAll(".question")
faqs.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      faqs.forEach((question) =>
        question.parentNode.classList.remove("active")
      );
      question.parentNode.classList.add("active");
    }
  }))
