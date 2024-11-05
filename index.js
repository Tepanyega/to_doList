//adding some functionality to the to do list

function displayInput(){
    const input = document.getElementById('userInput').value;

    if(input.trim() !== ''){
        
        //create a new list,
        const list = document.createElement('li');
        list.textContent = input;

        //adding a bin
        const bin = document.createElement('span');
        bin.classList.add('bin-icon');
        bin.innerHTML = '<i class="fas fa-trash-alt"></i>';

        //append the bin to the list
        list.appendChild(bin);

        //add an event listener to the bin element
        bin.addEventListener('click', () => {
            list.remove();
        });
        
        //append the list
        document.getElementById('outputList').appendChild(list);

        //clear the input field
        document.getElementById('userInput').value = '';
        
    }else{
        alert('please enter something');
    }
}

