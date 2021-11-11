
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    const form = document.querySelector('.form');
    const input = document.querySelector('input');
    const button = document.querySelector('.btn');
    const colorBox = document.querySelector('.colorBox')
    
    function generateRandomColor() 
    {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) 
    {
       color += letters[Math.floor(Math.random() * 16)];
    }
      return color;
    }

    const changeBG = document.querySelector('.bgchange');
    changeBG.addEventListener('click', (e) => 
    {
        main.style.backgroundColor = generateRandomColor();
        header.style.backgroundColor = generateRandomColor();
    })

button.addEventListener('click', (e) => 
{
    for(let i = 0; i < input.value; i++)
    {
        
        const colorNumber = input.value.length;
        const randomColor = generateRandomColor(); 
        const newColor = document.createElement('div');
        colorBox.appendChild(newColor);
        newColor.classList.add('colorContain');
        newColor.innerHTML =  `${randomColor} <i class="fas fa-window-close"></i>`;
       
        newColor.style.backgroundColor = randomColor;
        
        colorBox.addEventListener('click', (e) =>
        {
           main.style.backgroundColor = e.target.innerText;
        })
     }
   

    const closeBtn = document.querySelectorAll('.fa-window-close');

    for(item of closeBtn)
    {
        item.addEventListener('click', (e) => 
        {
            e.target.parentElement.remove();
        })
    }
   
})
