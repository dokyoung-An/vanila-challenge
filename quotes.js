//명언 넣기 
const quotes = [
    {text:"큰 목표를 이루고 싶으면 허락을 구하지 마라",
     author: "미상",
    },
    {text:"상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다",
    author: "존 우든",
    },
    {text:"창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다",
     author: "미상",
    },
    {text:"일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
     author: "짐론",
    },
    {text:"신뢰의 이유는 안전하거나 확실해서가 아니라, 위험을 감수할 용의가 있어서이다. ",
     author: "미상", 
    },
    {text:"한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. 그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. 당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른 생각은 다 내버려둬라. 이것이 성공하는 방법이다.",
     author: "스와미 비베키난다",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const select = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML=select.text;
author.innerHTML=`- ${select.author} -`