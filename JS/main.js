function changeQuote(){

    //generate a random number
    const arrayRandom = (Math.floor(Math.random()*11));
    //quote array
    const quoteArray=["You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth. -William W. Purkey", "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.-Neil Gaiman", "Everything you can imagine is real. -Pablo Picasso", "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. -Helen Keller", "Do one thing every day that scares you. -Eleanor Roosevelt", "It's no use going back to yesterday, because I was a different person then. -Lewis Carroll", "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. -Socrates", "Do what you feel in your heart to be right-for you'll be criticized anyway. -Eleanor Roosevelt", "Happiness is not something ready made. It comes from your own actions. -Dalai Lama XIV", "Whatever you are, be a good one. -Abraham Lincoln"];
    //get paragraph element
    let fj = document.getElementById("quote_text");
    //change quote depending on aray number
    switch(arrayRandom){
        case 0:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 1:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 2:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 3:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 4:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 5:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 6:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 7:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 8:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
        case 9:
            fj.innerHTML=quoteArray[arrayRandom];
        break;
    }
}

let quoteChange=setInterval(changeQuote,3500);

function changePicture(){
    const randomNumber = (Math.floor(Math.random()*5));

    const imageArray = ["../Images/sexy.jpg", "../Images/Snapchat-135460114.jpg", "../Images/Snapchat-747229545.jpg", "../Images/Snapchat-1579847609.jpg"];

    let imageID = document.getElementById("Photo");

    switch(randomNumber){
        case 0:
            imageID.src= imageArray[randomNumber];
        break;

        case 1:
            imageID.src= imageArray[randomNumber];
        break;

        case 2:
            imageID.src= imageArray[randomNumber];
        break;

        case 3:
            imageID.src= imageArray[randomNumber];
        break;
    }

    
}

let pictureChanger = setInterval(changePicture,5000);