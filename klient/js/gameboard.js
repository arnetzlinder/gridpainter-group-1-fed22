export function renderGameboard() {
    // Here we append the HTML-element to the gameboard element
    const gameboard = document.getElementById('game');

    //size of gameboard
    const gameboardSize = 15;

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

            //add click event listener to each cell
            cell.addEventListener('click', () => {
                console.log('Cell clicked', j, i);
                cell.classList.add('color');
            })
        }
    }
}

