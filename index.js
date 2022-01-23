let all = document.getElementById('all')
let htmlCss = document.getElementById('htmlCss')
let js = document.getElementById('js')
let react = document.getElementById('react')

function removeDisplay() {
    all.classList.remove('display')
    htmlCss.classList.remove('display')
    js.classList.remove('display')
    react.classList.remove('display')
}

function allProjects(data) {
    removeDisplay()
    const a =data

if(a== 'all'){
    console.log(a)
            all.classList.add('display')
}
else if(a=='htmlCss'){
    console.log(a)
            htmlCss.classList.add('display')
}
else if(a=='js'){
    console.log(a)
            js.classList.add('display')
}
else{
    console.log(a)
            react.classList.add('display')

}
    // switch (a) {
    //     case all:
    //         all.classList.add('display')
    //         break;
    //     case htmlCss:
    //         htmlCss.classList.add('display')
    //         break;
    //     case js:
    //         htmlCss.classList.add('display')
    //         js;
    //     case react:
    //         react.classList.add('display')
    //         break;
    // }
}