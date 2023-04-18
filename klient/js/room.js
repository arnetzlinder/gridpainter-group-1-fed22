const main = document.getElementById("main");
const header = document.getElementById("header");
const chat = document.getElementById("chat");

const choose = document.createElement("h1");
choose.classList.add("choose");
choose.innerText = "Choose a room";
const chatRoom = document.createElement("div");
chatRoom.classList.add("chatRoom");
chatRoom.innerText = "Chat Room";

export default function printRoom() {
    console.log("Funkar");

    for (let i = 1; i < 7; i++) {
        const room = document.createElement("div");
        room.classList.add("room");
        const gameRoom = document.createElement("h2");
        gameRoom.id = i + 0;
        gameRoom.innerHTML = "Room " + i;
        gameRoom.classList.add("gameRoom");
        const join = document.createElement("button");
        join.id = i + 0;
        join.innerText = "Join";
        join.classList.add("join");
        join.addEventListener("click", () => {
            console.log("Id på knapp", join.id);
            console.log("namnet på rummet", gameRoom.innerHTML);
        })
        room.append(gameRoom, join);
        main.append(room);
        chat.append(chatRoom);
        header.prepend(choose);
    }
    

}

