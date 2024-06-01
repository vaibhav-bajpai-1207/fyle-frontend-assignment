let projectImg = document.querySelector('#project-img-container')
let projectContentBoxList = document.querySelectorAll('.content-box')
let growthCardHeadingList = document.querySelectorAll('.growth-card-heading')
let serviceSlideList = document.querySelectorAll('.slide')
let indexDotList = document.querySelectorAll('.outer-index-dot')

let projectImgList = [
    'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    './img/project-2.png',
    'https://images.pexels.com/photos/1178610/pexels-photo-1178610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

let index = 1

let growthStatsList = [199, 1591, 283, 75]

let serviceSlideImgList = [
    './img/slidebg1.png',
    './img/slidebg2.png',
    './img/slidebg3.png',
    'https://images.pexels.com/photos/3612182/pexels-photo-3612182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4315283/pexels-photo-4315283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/20339625/pexels-photo-20339625/free-photo-of-close-up-of-a-dji-mini-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/20339625/pexels-photo-20339625/free-photo-of-close-up-of-a-dji-mini-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/20339625/pexels-photo-20339625/free-photo-of-close-up-of-a-dji-mini-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/20339625/pexels-photo-20339625/free-photo-of-close-up-of-a-dji-mini-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

serviceSlideList.forEach((element, ind) => {
    element.style.backgroundImage = `url("${serviceSlideImgList[ind]}")`
})

function changeProjectImg(ind) {
    index = ind
    projectImg.style.backgroundImage = `url("${projectImgList[ind]}")`

    for (let i = 0; i < projectContentBoxList.length; i += 1) {
        if (i == ind) {
            projectContentBoxList[i].classList.add('highlighted-content-box')
        } else {
            projectContentBoxList[i].classList.remove('highlighted-content-box')
        }
    }
}

setInterval(() => {
    index = (index + 1) % projectImgList.length
    changeProjectImg(index)
}, 5000)

function growthCountdown(element, start, end, duration) {
    element.innerHTML = `${start}+`
    let interval = Math.floor((duration / (end - start)) * 1000)
    let curr = start
    let changeInterval = setInterval(() => {
        curr += 1
        element.innerHTML = `${curr}+`
        if (curr == end) clearInterval(changeInterval)
    }, interval)
    // let changeInterval = setInterval(()=>{
    //         curr += 1
    //         element.innerHTML = `${curr}+`
    //         if(curr == end) clearInterval(changeInterval)
    //     }, interval)
}

function triggerGrowthCountdown() {
    for (let i = 0; i < growthStatsList.length; i += 1) {
        growthCountdown(growthCardHeadingList[i], growthStatsList[i] - 50, growthStatsList[i], 2)
    }
}

let scrollCrossed = true

window.onscroll = function () {
    if (window.scrollY > 1570 && scrollCrossed) {
        triggerGrowthCountdown()
        scrollCrossed = false
    }
}

let indexDotInd = 0

function triggerRightSlideAnimation(){
    serviceSlideList.forEach((element, ind) => {
        element.classList.add('trigger-right-slide-anim')
        setTimeout(()=>{
            element.classList.remove('trigger-right-slide-anim')
        }, 500)
    })
    indexDotList[indexDotInd].classList.remove('highlighted-dot')
    indexDotInd = (indexDotInd + 1) % indexDotList.length
    serviceSlideList.forEach((element, ind) => {
        serviceSlideList[ind].style.backgroundImage = `url("${serviceSlideImgList[(indexDotInd * 4) + ind]}")`
    })
    indexDotList[indexDotInd].classList.add('highlighted-dot')
}

function triggerLeftSlideAnimation(){
    serviceSlideList.forEach(element => {
        element.classList.add('trigger-left-slide-anim')
        setTimeout(()=>{
            element.classList.remove('trigger-left-slide-anim')
        }, 500)
    })
    indexDotList[indexDotInd].classList.remove('highlighted-dot')
    indexDotInd = indexDotInd == 0 ? indexDotList.length - 1 : indexDotInd - 1
    serviceSlideList.forEach((element, ind) => {
        serviceSlideList[ind].style.backgroundImage = `url("${serviceSlideImgList[(indexDotInd * 4) + ind]}")`
    })
    indexDotList[indexDotInd].classList.add('highlighted-dot')
}