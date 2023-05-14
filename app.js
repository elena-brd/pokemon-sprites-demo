const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// const newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png';
// container.append(newImg)


for (let i = 1; i <= 1010; i++) {
    const divs = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;

    divs.append(newImg);
    divs.append(label);
    container.append(divs);
}


