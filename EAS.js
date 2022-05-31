function generateStyle(rows, cols) {
    const headerHeight = document.querySelector('ul').height;
    const width = window.innerWidth;
    const height = window.innerHeight - headerHeight;

    let styles = `
    .container {
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(${Math.floor(width/cols)}px, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(${Math.floor(height/rows)}px, 1fr));
        height: calc(100vh - 30px);
        width: 100vw;
    }
    `
    const styleSheet = document.createElement('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

function generateGrid(rows, cols) {
    const container = document.querySelector('.container');
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const square = document.createElement('div');
            square.className = "square";
            container.append(square);
        }
    }
    generateStyle(rows, cols);
    console.log(`${container.children.length} divs generated.`);
}

function changeColor() {
    this.classList.add('hover');
}

generateGrid(16, 16);
const squares = document.querySelectorAll('.square');
squares.forEach(tile => tile.addEventListener('mouseover', changeColor));