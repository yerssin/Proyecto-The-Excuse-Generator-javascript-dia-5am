function boton() {
    let excuse = document.getElementById('excuse');
    excuse.innerHTML = generadordeexcusas();
}

let generadordeexcusas = () => {
    let sujeto = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let verbo = ['ate', 'peed', 'crushed', 'broke'];
    let que = ['my homework', 'the keys', 'the car'];
    let cuando = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let valoraleatoriosujeto = (Math.floor(Math.random() * 4));
    let valoraleatorioverbo = (Math.floor(Math.random() * 4));
    let valoraleatorioque = (Math.floor(Math.random() * 3));
    let valoraleatoriocuando = (Math.floor(Math.random() * 5));

    return sujeto[valoraleatoriosujeto] + ' ' + verbo[valoraleatorioverbo] + ' ' + que[valoraleatorioque] + ' ' + cuando[valoraleatoriocuando];
}