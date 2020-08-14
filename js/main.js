const boxLeft = document.getElementById("boxLeft");
const boxMid = document.getElementById("boxMid");
const boxRight = document.getElementById("boxRight");
const playButton = document.getElementById("playButton");
const betDropDown = document.getElementById("bet");
const bank = document.getElementById("bank");

bank.textContent = `$ ${1000}`;

const boxNum = [1,2,3,4,5];

const win = false;

function ranNum(){
  return Math.floor(Math.random() * 5 )
}

playButton.addEventListener("click", (e)=>{
  const previousValue = Number(bank.textContent.split(" ")[1])
  const bet = betDropDown.value;
  if(previousValue >= bet){
    boxLeft.textContent = boxNum[ranNum()]
    boxMid.textContent = boxNum[ranNum()]
    boxRight.textContent = boxNum[ranNum()]
    if(boxLeft.textContent === boxMid.textContent && boxLeft.textContent === boxRight.textContent){
      bank.textContent = `$ ${previousValue + ( Number(bet) * 10 )}`
      alert("Congratulations, you win!")
    }else{
      bank.textContent = `$ ${previousValue - Number(bet)}`
    }
  }
})
