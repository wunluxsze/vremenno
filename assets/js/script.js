
//1


// let jsstyle = document.querySelector('#jsstyle')
// function js_style(){
//     let text = document.querySelector('#text')
//     text.style = "font-size: 32px; color: gray; background-color: pink; border: 4px solid gray; width: 300px"
//     size = document.querySelector('#size')
//     let windowWidth = window.screen.width;
//     let windowHeight = window.screen.height;
//     console.log('Высота экрана:', windowHeight)
//     console.log('Ширина экрана:', windowWidth)
// }



//2


// let form = document.querySelector("#form1")
// function getFormvalue(){
//     event.preventDefault()
//     let p = document.createElement("p")
//     p.innerHTML = form.fname.value + '    ';
//     p.innerHTML += form.lname.value;
//     form.appendChild(p)
// }


//3


// function getAttributes(){
//     let data = document.querySelector('#w3r')
//     let href = data.getAttribute('href')
//     let hreflang = data.getAttribute('hreflang')
//     let rel = data.getAttribute('rel')
//     let target = data.getAttribute('target')
//     let type = data.getAttribute('type')
//     let arr = []
//     arr.push(href,hreflang,rel,target,type)
//     console.log(arr)
//     for (let i = 0;i < arr.length;i++){
//         let p = document.createElement('p')
//         p.classList.add(`class${i}`)
//         p.innerHTML = arr[i]
//         document.querySelector("#div").appendChild(p)
//     }
// }


//4



// let num = 3
// function insert_Row(){
    
//     table = document.querySelector('#sampleTable');
//     maketr = document.createElement('tr');

//     maketd = document.createElement('td');
//     maketr.appendChild(maketd);
//     maketd.innerHTML = `Row${num} cell1`
//     maketd.className = "class1"

//     maketd1 = document.createElement('td');
//     maketr.appendChild(maketd1);
//     maketd1.innerHTML = `Row${num} cell2`
//     maketd1.className = "class2";

//     table.appendChild(maketr)
//     num++;
// }


//5

function changeContent(){
    table = document.querySelector("table")
}