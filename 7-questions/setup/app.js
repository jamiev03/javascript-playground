//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const question = e.currentTarget.parentElement.parentElement;
        console.log(question);
        question.console.toggle('show-text')
    })
})