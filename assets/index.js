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

const positionCaminho = [[9,-1],[8,21]] //posições de largada e chegada no array

/* template para desenvolver o labirinto e armazenar informações
das celulas que possuem passsagem livre */

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


const start = document.getElementById('start')
const popStart = document.querySelector('.pop-start')
start.addEventListener('click', () => {
    popStart.style.display = 'none';
    //ativar o contador!!!
    document.addEventListener('keydown',(event)=>keyMove(event))
})

const messageWinner = (line,col) => {
    if(line===8&&col===21){
        
    }
}


const keyMove = event => {
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
};







