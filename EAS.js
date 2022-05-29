function generateGrid(rows, cols) {
    const container = document.querySelector('.container');
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const square = document.createElement('div');
            square.className = "square";
            container.appendChild(square);
        }
    }
    console.log(`${container.children.length} divs generated.`);
}

generateGrid(16, 16);