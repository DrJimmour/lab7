//removing "Hello, World!"
let hello = document.querySelector("h1");
    hello.remove();

//creating 1st part of the page
let h1 = document.createElement('h1');
    h1.style.color = 'blue';
    h1.textContent = 'Lab7 Assignment';
    document.body.appendChild(h1);

let hr1 = document.createElement('hr');
    document.body.appendChild(hr1);

let h2_1 = document.createElement('h2');
    h2_1.style.color = 'red';
    h2_1.textContent = 'Task';  
    document.body.appendChild(h2_1);

let p1 = document.createElement('p');
    p1.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
    document.body.appendChild(p1);

//creating the 1st unordered list and its elements
let ul1 = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');
    let li6 = document.createElement('li');
        li1.classList.add('odd');   //adding class "odd" to odd-numbered list elements
        li1.innerHTML = 'find elements in the DOM (<b>5 points</b>);'; 
        li2.classList.add('even');  //adding class "even" to even-numbered list elements
        li2.innerHTML = 'create/add/remove elements (<b>5 points</b>);';
        li3.classList.add('odd');
        li3.innerHTML = 'change content of the elements (<b>5 points</b>);';
        li4.classList.add('even');
        li4.innerHTML = 'change styles of the elements (<b>5 points</b>);';
        li5.classList.add('odd');
        li5.innerHTML = 'change attributes of the elements (<b>5 points</b>);';
        li6.classList.add('even');
        li6.innerHTML = 'change classes of the elements (<b>5 points</b>).';
    document.body.appendChild(ul1);
        ul1.appendChild(li1);
        ul1.appendChild(li2);
        ul1.appendChild(li3);
        ul1.appendChild(li4);
        ul1.appendChild(li5);
        ul1.appendChild(li6);

//creating the 2nd part of the page
let hr2 = document.createElement('hr');
    document.body.appendChild(hr2);

let h2_2 = document.createElement('h2');
    h2_2.style.color = 'red';
    h2_2.textContent = 'Submission';
    document.body.appendChild(h2_2);

let p2 = document.createElement('p');
    p2.innerHTML = 'To submit your work, follow these instructions:';
    document.body.appendChild(p2);

//creating the 2nd unordered list
let ul2 = document.createElement('ul');
    let li7 = document.createElement('li');
    let li8 = document.createElement('li');
    let li9 = document.createElement('li');
    let li10 = document.createElement('li');
    let li11 = document.createElement('li');
    let li12 = document.createElement('li');
    let li13 = document.createElement('li');
        li7.classList.add('odd');
        li7.innerHTML = 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).';
        li8.classList.add('even');
        li8.textContent = 'Clone this repository to your local machine and work inside it.';
        li9.classList.add('odd');
        li9.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';
        li10.classList.add('even');
        li10.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';
        li11.classList.add('odd');
        li11.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';
        li12.classList.add('even');
        li12.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).';
        li13.classList.add('odd');
        li13.innerHTML = 'After you finish your work, submit it to the Github (<b>2 points</b>).';
    document.body.appendChild(ul2);
        ul2.appendChild(li7);
        ul2.appendChild(li8);
        ul2.appendChild(li9);
        ul2.appendChild(li10);
        ul2.appendChild(li11);
        ul2.appendChild(li12);
        ul2.appendChild(li13);


let hr3 = document.createElement('hr');
    document.body.appendChild(hr3);


let odds = document.querySelectorAll(".odd");   //changing attribute of the odd-numbered elements making them green
    for(let i = 0; i < odds.length; i++){
        odds[i].style.color = 'green';
    }

let evens = document.querySelectorAll(".even"); //changing attribute of the even-numbered elements making them purple
    for(let i = 0; i < evens.length; i++){
        evens[i].style.color = 'purple';
    }
