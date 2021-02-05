const questionsContainers = document.querySelectorAll('.question-container');

questionsContainers.forEach(question => {
    question.addEventListener('click', (e) => {

        if (question.classList.contains('active')) {
            question.classList.toggle('active');
        } else {
            questionsContainers.forEach(container => {
                container.classList.remove('active');
            })
            question.classList.add('active');
        }

    })

    question.addEventListener('mouseover', (e) => {
        question.children[0].children[0].style.color = 'hsl(14, 88%, 65%)'
    })

    question.addEventListener('mouseout', (e) => {
        question.children[0].children[0].style.color = 'black'
    })
})

function hideAll(current) {
    questionsContainers.forEach(question => {
        const answer = question.children[1]

        answer != current ? answer.classList.add('hide') : '';
    })
}



