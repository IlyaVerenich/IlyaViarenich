let str='';
let buttons=document.getElementsByClassName('button');
let display=document.getElementById(`display`);

function addBtn(button) {
    button.addEventListener(`click`,event);
    function event() {
        let type=button.getAttribute(`data-type`);

        if (type===`=`) {
            str=eval(str);
            display.value=str;
            return;
        } else {
            if (type===`C`) {
                str=``;
            } else {
                str+=type;
            }
        }
        display.value=str;

    }

}

for (let i = 0; i < buttons.length; i++) {
    addBtn(buttons[i])
    
}