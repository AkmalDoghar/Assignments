
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (value == 'AC') {
            string = "";
            input.value = string;
        } else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            
            if (value == '.') {
                let lastNumberSegment = string.split(/[\+\-\*\/]/).pop();
                if (lastNumberSegment.includes('.')) {
                    return;
                }
            }

            string += value;
            input.value = string;
        }
    })
});



