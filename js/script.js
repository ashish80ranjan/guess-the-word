const msg=document.querySelector('.message');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');

let arrword=['python','javascript','Elonmusk','billgates','java','reactjs','angular','swift','android','sql','html','css'];

let neWords="";
let scaWords="";


const gessfunction=()=>{
    let ran =Math.floor(Math.random()*arrword.length)
    let temp =arrword[ran];
    return temp;
}

const  scramble=(words)=>{
    for(let i=words.length-1;i>0;i--)
    {
        let temp=words[i]
        let j=Math.floor(Math.random()*(i+1));
        words[i]=words[j]
        words[j]=temp;
    }
    return words;
};

let play =false;
btn.addEventListener('click',function(){
    if(!play){ scramble(neWords);
        play=true;
        btn.innerHTML="Guess"
        guess.classList.toggle('hidden');
        neWords = gessfunction();
        scaWords = scramble(neWords.split("")).join("");
        msg.innerHTML=scaWords;
    }  
    else{
        let enterword=guess.value;
        if(enterword===neWords){
            play=false;
            msg.innerHTML=`Correct! it is ${neWords} `
            btn.innerHTML="Start Again"
            guess.classList.toggle('hidden');
            guess.value="";

        }else{
            msg.innerHTML=`Wrong! try Again`
        }
    }
})