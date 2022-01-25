function solve() {





    let answers=0;

    let onclick=document.getElementsByClassName('answer-wrap')[0];

    let onMouseClick=document.getElementsByClassName('answer-wrap')[1];

     let section2=document.getElementsByClassName('hidden')[0];

     let section3=document.getElementsByClassName('hidden')[1];


     let result=document.getElementById('end');

    console.log(result)



    let div=document.getElementById('quizzie');

    onclick.addEventListener('click',function () {

    section2.style.display='block';

    answers++;

    result.textContent=`You have  ${answers} right answer`;
    })

    onMouseClick.addEventListener('click',function () {
        section2.style.display='block';
        result.textContent=`You have  ${answers} right answer`;
    })



    let jSONToString=document.getElementsByClassName('answer-wrap')[2];


    let jSONToStringify=document.getElementsByClassName('answer-wrap')[3];


    jSONToString.addEventListener('click',function () {

     section3.style.display='block';
        result.textContent=`You have  ${answers} right answer`;
    })

    jSONToStringify.addEventListener('click',function () {
        section3.style.display='block';

        answers++;
        result.textContent=`You have ${answers} right answers`;

    });


    let programmingForApi=document.getElementsByClassName('answer-wrap')[4];
    let sourceHtml=document.getElementsByClassName('answer-wrap')[5];


    let ul=document.getElementById('results');

    programmingForApi.addEventListener('click',function () {

        answers++;
        result.textContent=`You have ${answers} right answers`;

        ul.style.display='block';

    });
    
    sourceHtml.addEventListener('click',function () {

       result.textContent=`You have ${answers} right answers`;


        ul.style.display='block';
    })




}

solve()