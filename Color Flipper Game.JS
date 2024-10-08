        const colorBox = document.getElementById('colorBox');
        const resultText = document.getElementById('resultText');
        const buttons = document.querySelectorAll('.guess-btn');


        const colors = [
            { name: 'Red', rgb: 'rgb(255, 0, 0)' },
            { name: 'Green', rgb: 'rgb(0, 255, 0)' },
            { name: 'Blue', rgb: 'rgb(0, 0, 255)' },
            { name: 'Yellow', rgb: 'rgb(255, 255, 0)' }
        ];


        let currentColor;


        function randomColor() {
            const randomIndex = Math.floor(Math.random() * colors.length);
            currentColor = colors[randomIndex];
            colorBox.style.backgroundColor = currentColor.rgb;
        }


        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.textContent === currentColor.name) {
                    resultText.textContent = 'Correct! It\'s ' + currentColor.name;
                } else {
                    resultText.textContent = 'Wrong! Try again.';
                }
                randomColor();
            });
        });


        randomColor();
    