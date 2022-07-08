
let pac_x = 3
let pac_y = 10

let coin_x = 2
let coin_y = 2

let bomb_x = 5
let bomb_y = 8

let score = 0
let HP    = 100 

function action(){
   
switch (event.key){
   case  "ArrowUp" :    pac_y-- ;    break
   case  "ArrowDown" :  pac_y++ ;    break
   case  "ArrowRight" : pac_x++ ;    break
   case  "ArrowLeft" :  pac_x-- ;    break
        
}

if(pac_x == coin_x && pac_y == coin_y){
    score += 10
} else if(pac_x == bomb_x && pac_y == bomb_y){
    HP -= 20
}
renderMap()

}


function renderMap(){
    gameMap.innerHTML = ``
    for (let y=1; y<=10; y++){
       for (let x=1; x<=10; x++){

        if( x == pac_x && y == pac_y ){
        
         gameMap.innerHTML += 
           `<div class="pac"></div>`
         
        } else  if( x == coin_x && y == coin_y ){
              gameMap.innerHTML += 
              `<div class="coin"></div>`
         
            } else  if( x == bomb_x && y == bomb_y ){
                 gameMap.innerHTML += 
                `<div class="bomb"></div>`
         
                  
          } else {
            gameMap.innerHTML += 
            `<div ></div>`

      }
    }
  }
  gameScore.innerHTML = `Score: ${score}`
  gameHP.innerHTML = `HP: ${HP}`

}

renderMap()