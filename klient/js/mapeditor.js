
// Here we append the HTML-element to the gameboard element
const gameboard = document.getElementById('map_editor');
//size of gameboard
const gameboardSize = 15;
//array for saving color of cells
const gamePictureArray = [[]];
//loop for creating rows
for (let i = 0; i < gameboardSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    gameboard.appendChild(row);

    //loop for creating cells within each row
        for (let j = 0; j < gameboardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = j.toString()+"-"+i.toString();
            row.appendChild(cell);
            gamePictureArray[j] = [];

            //add click event listener to each cell
            cell.addEventListener('click', () => {
                console.log('Cell clicked', j, i);
                cell.classList.remove('brown', 'black', 'red', 'yellow')
                cell.classList.add(color);
                gamePictureArray[j][i] = color;
                console.log(color)
            })
        }
    }

const brownBtn = document.getElementById('brown');
const blackBtn = document.getElementById('black');
const redBtn = document.getElementById('red');
const yellowBtn = document.getElementById('yellow');
const saveBtn = document.getElementById('saveBtn');
let color = 'yellow';

brownBtn.addEventListener('click', () => {
    color = 'brown'
    console.log ('någon klickade', color)
})
blackBtn.addEventListener('click', () => {
    color = 'black'
    console.log ('någon klickade', color)
})

yellowBtn.addEventListener('click', () => {
    color = 'yellow'
    console.log ('någon klickade', color)
})

redBtn.addEventListener('click', () => {
    color = 'red'
    console.log ('någon klickade', color)
})

saveBtn.addEventListener('click', () => {
    console.log (JSON.stringify(gamePictureArray));
})


