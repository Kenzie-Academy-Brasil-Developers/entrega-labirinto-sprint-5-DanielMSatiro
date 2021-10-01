const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const labirinto = document.createElement('div')
labirinto.classList = 'labirinto'
document.body.appendChild(labirinto)

const jogador = document.createElement('div')
jogador.classList = 'jogador'
labirinto.appendChild(jogador)

const positionCaminho = []

//template para desenvolver o labirinto

map.forEach((linha,i) => {
    const paredeLinha = document.createElement('div')
    paredeLinha.classList = 'paredeLinha'
    labirinto.appendChild(paredeLinha)
    linha.split('').forEach((celula,j) => {
        if(celula==='W'){
            const parede = document.createElement('div')
            parede.classList = 'parede'
            paredeLinha.appendChild(parede)
        } else {
            const caminho = document.createElement('div')
            caminho.classList = 'caminho'
            paredeLinha.appendChild(caminho)
            positionCaminho.push([i,j])
        }
    })
})

let line = 9
let col = -1
const sizeCelula = 20
let boxTop = line*sizeCelula
let boxLeft = (col+1)*sizeCelula

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName==='ArrowDown'){
        if(positionCaminho.find(item=>item[0]===line+1&&item[1]===col)){
            boxTop+= sizeCelula
            line++ 
            jogador.style.top = `${boxTop}px`
        }
    }
    if(keyName==='ArrowUp'){
        if(positionCaminho.find(item=>item[0]===line-1&&item[1]===col)){
            boxTop-= sizeCelula
            line--
            jogador.style.top = `${boxTop}px`
        }
    }
    if(keyName==='ArrowRight'){
        if(positionCaminho.find(item=>item[0]===line&&item[1]===col+1)){
            boxLeft+= sizeCelula
            col++
            jogador.style.left = `${boxLeft}px`
        }
    }
    if(keyName==='ArrowLeft'){
        if(positionCaminho.find(item=>item[0]===line&&item[1]===col-1)){
            boxLeft-= sizeCelula
            col--
            jogador.style.left = `${boxLeft}px`
        }
    }    
  });