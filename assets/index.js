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

const line = 9
const col = -1
const sizeCelula = 20
let boxTop = line*sizeCelula
let boxLeft = (col+1)*sizeCelula

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName==='ArrowDown'){
      boxTop+= sizeCelula
      jogador.style.top = `${boxTop}px`
    }
    if(keyName==='ArrowUp'){
      boxTop-= sizeCelula
      jogador.style.top = `${boxTop}px`
    }
    if(keyName==='ArrowRight'){
      boxLeft+= sizeCelula
      jogador.style.left = `${boxLeft}px`
    }
    if(keyName==='ArrowLeft'){
      boxLeft-= sizeCelula
      jogador.style.left = `${boxLeft}px`
    }    
  });