//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');

questions.forEach((q) => {
    const btn = q.querySelector('.question-btn')
    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            if (item !== q) {
                item.classList.remove('show-text')
            }
        });
        q.classList.toggle('show-text')
    })
})






// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         console.log(question);
//         question.classList.toggle('show-text')
//     });
// });