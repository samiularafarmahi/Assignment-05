const buttons = document.querySelectorAll('.btn-add');
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Board update successfully');
        button.disabled = true;
        const task = document.getElementById('text');
        let countTask = parseInt(task.innerText);

        const taskIn = document.getElementById('text-2');
        let plusTask = parseInt(taskIn.innerText);

        if (!isNaN(countTask)) {
            const sum = countTask - 1;
            document.getElementById('text').innerText = sum;
        }
        if (!isNaN(plusTask)) {
            const sum = plusTask + 1;
            document.getElementById('text-2').innerText = sum;
        }
        const container = document.createElement('p');
        container.textContent = 'You have completed the task Fix video loading issue at 12:10:20 AM'
        container.classList.add('bg-indigo-50', 'p-3', 'rounded-lg', 'mt-8');
        const newText = document.getElementById('clear-container');
        if (newText) {
            newText.appendChild(container);
        }
        else {
            alert('Do not excess');
        }
        document.getElementById('clear-btn').addEventListener('click', function () {
            container.remove();
        })
    })
};
document.getElementById('btn-6').addEventListener('click', function (event) {
    event.preventDefault();
    alert("Congrats!! You have completed all the current task");
});
document.getElementById('nav-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    console.log(random)
})
