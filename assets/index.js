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
    "W WWWWWWW WW WW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let line = 9
let col = -1
let sizeCelula = 20
let boxTop = line*sizeCelula
let boxLeft = (col+1)*sizeCelula

const titulo = document.createElement('span')
titulo.classList = 'titulo'
titulo.innerText = 'Lost in the Supermarket'
document.body.appendChild(titulo)

const labirinto = document.createElement('div')
labirinto.classList = 'labirinto'
document.body.appendChild(labirinto)

const jogador = document.createElement('div')
jogador.classList = 'jogador'
labirinto.appendChild(jogador)

const positionCaminho = [[9,-1],[8,21]]

/* IMPLANTA LABIRINTO */
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

/* START */
const start = document.getElementById('start')
const popStart = document.querySelector('.pop-start')
start.addEventListener('click', () => {
    popStart.style.display = 'none';
    document.addEventListener('keydown',keyMove)
    demo.innerText = "Restam "+ limit + " segundos"
    demo.classList = 'timer'
    document.body.appendChild(demo)
    timer = setInterval(updateTimer,1000)
})

/* RESET */
const close = document.getElementById('close')
close.addEventListener('click', () => {
    popWin.style.display = 'none'
    won.style.display = 'none'
    lost.style.display = 'none'
    limit = 20
    document.body.removeChild(demo)
    popStart.style.display = 'flex';
    line = 9
    col = -1
    boxTop = line*sizeCelula
    boxLeft = (col+1)*sizeCelula
    jogador.style.top = `${boxTop}px`
    jogador.style.left = `${boxLeft}px`
})

/* TIMER */
let timer = ''
let limit = 20
const lost = document.getElementById('lost')
const demo = document.createElement('span')
const updateTimer = () => {
    demo.innerText = "Restam "+ --limit + " segundos"
    if(limit === 0) {
        clearInterval(timer)
        document.removeEventListener('keydown',keyMove)
        popWin.style.display = 'flex'
        lost.style.display = 'flex'
    }
}

/* MENSAGEM DE VITORIA */
const popWin = document.querySelector('.pop-win')
const won = document.getElementById('won')
const messageWinner = (line,col) => {
    if(line===8&&col===21){
        popWin.style.display = 'flex'
        won.style.display = 'flex'
        clearInterval(timer)
        document.removeEventListener('keydown',keyMove)
    }
}

/* FUNCAO PARA MOVIMENTACAO */
const keyMove = event => {
    const keyName = event.key;
    if(keyName==='ArrowDown'){
        if(positionCaminho.find(item=>item[0]===line+1&&item[1]===col)){
            boxTop+= sizeCelula
            line++ 
            jogador.style.top = `${boxTop}px`
            messageWinner(line,col)
        }
    }
    if(keyName==='ArrowUp'){
        if(positionCaminho.find(item=>item[0]===line-1&&item[1]===col)){
            boxTop-= sizeCelula
            line--
            jogador.style.top = `${boxTop}px`
            messageWinner(line,col)
        }
    }
    if(keyName==='ArrowRight'){
        if(positionCaminho.find(item=>item[0]===line&&item[1]===col+1)){
            boxLeft+= sizeCelula
            col++
            jogador.style.left = `${boxLeft}px`
            messageWinner(line,col)
        }
    }
    if(keyName==='ArrowLeft'){
        if(positionCaminho.find(item=>item[0]===line&&item[1]===col-1)){
            boxLeft-= sizeCelula
            col--
            jogador.style.left = `${boxLeft}px`
            messageWinner(line,col)
        }
    }    
};