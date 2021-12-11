// FAQ starts here

const objs ={
    "what is your name ?" : "Shayan",
    "what do you do ?":"Web developer , full stack"
}



for( var i in objs){

    document.getElementById('ques').innerHTML +=  `
    
    
    <li class="list-group-item list-group-item-primary" id="que">${i} <i class="fas fa-chevron-right" id="ans" onclick="QnA('${i}')"></i> </li>
    
    `



}





function QnA(question){
    // console.log(question);
    // console.log(objs[question]);

    document.getElementById("reply-text").innerText = objs[question]

}

// FAQ ends here