document.addEventListener('DOMContentLoaded',()=>{
    let gif = document.getElementById("imgResponse");
    let title = document.getElementById("titleResponse");
    let btnYes = document.getElementById("btnYes");
    let btnNo = document.getElementById("btnNo");
    let usedNumbers;

    const gifs = [
        "https://media.tenor.com/XiiS-SdtaDwAAAAM/shy-dog-stan-twitter-funny-dog.gif",
        "https://media.tenor.com/ADcVatMM0CYAAAAM/please-doggy.gif",
        "https://media.tenor.com/-IIX6kX5ensAAAAM/yawnnin-dog-sad-saddoggy-doggy-cute-avanidog-yawnninlol-shy-sorry.gif",
        "https://media.tenor.com/ePgXCUHZvyYAAAAM/dogs-puppies.gif",
        "https://media.tenor.com/lWs6bGogKC0AAAAM/puppy-eyes-golden-retriever.gif",
        "https://media.tenor.com/rmxxgjFJcjQAAAAM/sad-face-puppy.gif"
    ];

    const responses = [
        "¿Por qué No?",
        "Pero Mi Amor...",
        "Mi Amor Perdoname",
        "Me Siento Mal",
        "Por Favor Mi Bebé",
        "Dime que Sí"
    ];

    btnNo.addEventListener("click", ()=>{
        let min = Math.ceil(0)
        let max = Math.floor(5);
        let number;

        do{
            number = Math.floor(Math.random() * (max - min + 1) + min);
        }while(usedNumbers === number);

        usedNumbers = number;

        title.innerText = responses[number];
        gif.src = gifs[number];
    });

    btnYes.addEventListener("click", ()=>{
        title.innerText = "Te Amo Mi Niña Hermosa";
        gif.src = "https://media.tenor.com/_NMzaxfKAJYAAAAM/excited-dog.gif";
    });
});