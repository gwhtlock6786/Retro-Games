
let boxes = document.querySelectorAll(".box");
let player1 = true;

function createBoxes(){
    for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = i;
        boxes[i].addEventListener("click", function(){

            if(player1){
                boxes[i].textContent = "X"
                player1 = false;

            } else {
                boxes[i].textContent = "O"
                player1 = true;
            }

        });
    }
}

createBoxes();