let gameFlex = document.getElementById("gameFlex");
export default function pushBtn() {
    let startGameBtn = document.createElement("button");
    startGameBtn.classList.add("startGameBtn");
    startGameBtn.innerHTML = "Start Game";
    startGameBtn.addEventListener("click", startGame);
    function startGame() {
        const startingMinutes = 5;
        let time = startingMinutes * 60;
        let myInterval = setInterval(updateCountDown, 1000);

        let countDown = document.createElement("div");
        countDown.classList.add("countDown");

        function updateCountDown() {
            

            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            seconds = seconds < 10? "0" +  seconds : seconds;

            countDown.innerHTML = `${minutes}: ${seconds}`;
            time --;
            time = time < -1 ? -1 : time;

            if (time === -1) {
                clearInterval(myInterval);
                countDown.innerHTML = "STOP";

            }
            startGameBtn.remove();
            

            gameFlex.append(countDown);
        
        }
        
    

    }
    gameFlex.append(startGameBtn); 
}

