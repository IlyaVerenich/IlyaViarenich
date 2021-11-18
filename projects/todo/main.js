let input = document.getElementById("input");
let ul=document.getElementById("list");
let btn = document.getElementById("btn");

btn.addEventListener('click',()=>{
    if (input.value!=='') {
//      Create li
        let li = document.createElement('li');
        li.innerHTML=input.value;
//      Create a remove button
        let remove=document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML='DEL';
        li.after(remove);
        remove.addEventListener('click', function() {
			this.parentElement.parentElement.removeChild(this.parentElement);
		});
		li.appendChild(remove);
//      Create a check button
        let mark = document.createElement('button');
        mark.innerHTML = ' ';
        mark.classList.add('mark');
        mark.addEventListener('click', function (){
            this.parentElement.classList.add('done');
            this.style.backgroundColor='rgb(57, 57, 219)';
            ul.append(li);
            mark.addEventListener('click',()=>{
                this.style.backgroundColor='white';
                this.parentElement.classList.remove('done');
                ul.prepend(li);
            });
        });
        li.prepend(mark);
//*************************************************** */
        ul.prepend(li);
        input.value='';
    }
})
