    const container =
    document.getElementById("container");
    const setSizeButton =
    document.getElementById("setSizeButton");
    const colorPicker =
    document.getElementById("colorPicker");
    const eraserButton =
    document.getElementById("eraserButton");
    const clearButton =
    document.getElementById("clearButton");

    let currentColor = colorPicker.value;

    let rainbow =false;

    let showBorders = true;

    document.getElementById("toggleBorders").addEventListener('click',
        () => {
            const boxes = document.querySelectorAll('.box');
            boxes.forEach(box => {
                box.style.border = showBorders ? 'none' : '1px solid #ccc';
            });
            showBorders = !showBorders;
        });

    document.getElementById("rainbowMode").addEventListener('click', 
        () => {
            rainbow = !rainbow;
        });

        function getRandomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
    });

    eraserButton.addEventListener('click', () => {
        currentColor = '#ffffff';
    });

    clearButton.addEventListener('click', () => {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => box.style.backgroundColor
            ='#ffffff');
    });

    function createGrid(size) {
        container.innerHTML ="";
        const totalBoxes = size * size;
        const boxSize = 960/size;

        for (let i = 0; i < totalBoxes; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;


            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = rainbow?
                getRandomColor() : currentColor;
            });
             container.appendChild(box);


           
            }
            console.log("Grid created:", size, "x", size);
        }

         


        setSizeButton.addEventListener('click', () =>{
        let newSize = prompt("Enter new grid size (max 100:)");
        newSize = parseInt(newSize);
        if (newSize && newSize > 0 && newSize <= 100) 
            {
            createGrid(newSize);
        } else {
            alert("Please enter a number between 1 and 100.");
        }

        createGrid(size);
       
    });

     createGrid(16);


    
    

   

