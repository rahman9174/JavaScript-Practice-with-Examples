// const para = document.querySelector('p');// it only select the first para 
// console.log(para);//it will print the first para 
// console.log(para.innerText);
// // update the content of the documnet

// para.innerText = 'hii this is rehmi';//it will override the previos content and display the new content
// console.log(para.innerText)

// // update and append the content with the previos one

// para.innerText += ' - hello this is Rehmi_Tehmi';// it will append this content to previos content
// console.log(para);

// ---------------=-----------------------------=----------------------------

//Now select the all paragraph
// const paras = document.querySelectorAll('p');
// // paras[0].innerText += ' hii this is me '
// console.log(paras);
// paras.forEach(para =>{
//     // console.log(para);
//     para.innerText += ' hey i am adding new things'
//     console.log(para.innerText);
// })

// -----------------------------------------------------------------------------

// now update and add the element on the document
// const content = document.querySelector('#container');
// console.log(content.innerHTML);
// // content.innerHTML = '<h2>this is new heading2</h2>'
// content.innerHTML += '<h2> hey i am adding line up with u , u have any problem</h2>';//by this it will be append with the existing content

// console.log(content.innerHTML)
// console.log(content.innerText);

// const list = document.querySelector('#list');
// // console.log(list.innerHTML)

// const people = ['Rahman','Tahmina Tazalli','Dilsu','abc','xyz','ajhal','dfhj','ajfdlk'];
// people.forEach(person =>{
//     list.innerHTML += `<li> ${person}</li>`;
// })

// ------------------------------------------------------------------------
// how we can access/get attribute

// const link = document.querySelector('a');
// console.log(link);
// console.log(link.getAttribute('href'))
// link.setAttribute('href','www.facebook.com')
// link.innerText= 'facebook login'
// console.log(link)
// console.log(link.getAttribute('href'))
// link.setAttribute('style','text-decoration:none;color:orange');

// --------------------------------------------------------------------------------

// adding style with the stylesheet 

// const para = document.querySelector('p');
// console.log(para);
// console.log(para.classList);
// para.classList.add('error');
// para.classList.remove('error');
// para.classList.add('success')

// --------------------------------------------------------------------------------------

// select the particular word and add the StyleSheet

const paras = document.querySelectorAll('p');
console.log(paras);
paras.forEach(p =>{
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
    else{
        p.classList.add('success')
    }
})
