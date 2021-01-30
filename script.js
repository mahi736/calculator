let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('button');
let screenValue = '';
Swal.fire({
    title: '<h3>Welcome</h3>',
    icon: 'info',
    html:
        '<h3>Hello dear, if you like this please share with your friends</h3>',
})
for(item of buttons){
    item.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        if(screenValue != ''){
            screenValue = screen.value;
        }
        if(buttonText == "Backspace"){
            screenValue = screenValue.substring(0, screenValue.length - 1);
            console.log(screenValue);
            screen.value = screenValue;
        }
        else if(buttonText == "Visit my teacher"){
            window.open('https://www.codewithharry.com', '_blank');
        }
        else if(buttonText == 'X'){
            buttonText = '*';
            screen.value += buttonText;
            screenValue = screen.value;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            try{
            screen.value = eval(screenValue);   
            } catch {
                    screen.value = "Error";
            }
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}