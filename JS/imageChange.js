//loads content first then runs function
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor="black";
    let labelText = document.getElementById("label_text");
    let quoteText = document.getElementById("quote_text");
    labelText.style.color = "white";
    quoteText.style.color = "white";
});

function changeImage(){
    let imagesArray=["../Images/autumn-photo-wall-art-m.jpg","../Images/download.jpg","../Images/istockphoto-636379014-612x612.jpg","../Images/nature-photography.jpg","../Images/empire.jpg","../Images/green.jpg","../Images/ice_globe.jpg","../Images/light_pollution.png","../Images/moon_plane.jpg"];
    let randomImageNumber=(Math.floor(Math.random()*9));
    document.getElementById("imageButton");

    switch(randomImageNumber){
        case 0:
            document.getElementById("images").src=imagesArray[randomImageNumber];
        break;
        
        case 1:
            document.getElementById("images").src=imagesArray[randomImageNumber];
        break;

        case 2:
            document.getElementById("images").src=imagesArray[randomImageNumber];
        break;

        case 3:
            document.getElementById("images").src=imagesArray[randomImageNumber];
        break;
        
        case 4:
            document.getElementById("images").src=imagesArray[randomImageNumber];
        break;
        
        case 5:
            document.getElementById("images").src=imagesArray[randomImageNumber];
        break;
        
        case 6:
            document.getElementById("images").src=imagesArray[randomImageNumber];
        break;
        
        case 7:
            document.getElementById("images").src=imagesArray[randomImageNumber];
        break;
        
        case 8:
            document.getElementById("images").src=imagesArray[randomImageNumber];
        break;
        
        default:
        break;
    }


}   

function changeColor(){
    let labelText = document.getElementById("label_text");
    let quoteText = document.getElementById("quote_text");
    // get the text from the text input
   const screenColor = document.getElementById("bgText").value;
   //change color depending on text
   document.body.style.backgroundColor=screenColor;
   //Change label to white if background color black
   if(screenColor==="Black" || screenColor==="black" || screenColor==="#000000"){
    labelText.style.color = "white";
    quoteText.style.color = "white";
   }else if(screenColor===null){
    let textField =document.getElementById("bgText");
    textField.innerText="Enter a value";
    console.log("Worked");
   }else{
    labelText.style.color = "black";
    quoteText.style.color = "black"
   }

}

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
        default:
            fj.innerHTML="Placeholder";
        break;
    }
}

function calculator(){
    var output = document.getElementById("result");
    //Set values
    var one = document.getElementById("one").value=1;
    const two = document.getElementById("two").value=2;
    const three = document.getElementById("one").value=3;
    const four = document.getElementById("three").value=4;
    const five = document.getElementById("five").value=5;
    const six = document.getElementById("six").value=6;
    const seven = document.getElementById("seven").value=7;
    const eight = document.getElementById("eight").value=8;
    const nine = document.getElementById("nine").value=9;
    const decimal = document.getElementById("decimal").value=".";
    const plus = document.getElementById("plus").value="+";
    const equals = document.getElementById("equals").value="=";
    const minus = document.getElementById("minus").value="-";
    const divided = document.getElementById("divided").value="/";

    //output in paragraph
    output=one.innerHTML;
}

//clears display
function ClearValue(){
    const display=document.getElementById("result").innerHTML="";
}

let quoteChange=setInterval(changeQuote,5000);
//try to change box-shadow depending on background-color