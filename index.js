let all = document.getElementById('all')
let htmlCss = document.getElementById('htmlCss')
let js = document.getElementById('js')
let react = document.getElementById('react')
let allLink = document.getElementById('allLink')
let htmlCssLink = document.getElementById('htmlCssLink')
let jsLink = document.getElementById('jsLink')
let reactLink = document.getElementById('reactLink')
let header = document.querySelector('.headerSection')
let heroSection = document.querySelector('.heroSection')
console.log(heroSection)

window.addEventListener('scroll', function () {
    // if(window.scrollY > 50){

    // }
    //   let percentageIncrease =   Math.floor(window.scrollY)/100 + 100
    if (window.scrollY > 0) {

        heroSection.style.backgroundSize = `103% `

        if (window.scrollY > 700) {
            header.classList.remove("headerSection")
            header.classList.add("navScrollColor")
        }


    } else {
        heroSection.style.backgroundSize = '100%'

        header.classList.add("headerSection")
        header.classList.remove("navScrollColor")

    }

})
function removeDisplay() {
    all.classList.remove('display')
    htmlCss.classList.remove('display')
    js.classList.remove('display')
    react.classList.remove('display')
    allLink.classList.remove('projectLinkBgColor')
    htmlCssLink.classList.remove('projectLinkBgColor')
    jsLink.classList.remove('projectLinkBgColor')
    reactLink.classList.remove('projectLinkBgColor')


}

function allProjects(data) {
    removeDisplay()
    const a = data

    if (a == 'all') {

        all.classList.add('display')
        allLink.classList.add('projectLinkBgColor')
    }
    else if (a == 'htmlCss') {

        htmlCss.classList.add('display')
        htmlCssLink.classList.add('projectLinkBgColor')
    }
    else if (a == 'js') {

        js.classList.add('display')
        jsLink.classList.add('projectLinkBgColor')

    }
    else {

        react.classList.add('display')
        reactLink.classList.add('projectLinkBgColor')


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