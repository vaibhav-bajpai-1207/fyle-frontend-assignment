let projectImg = document.querySelector('#project-img-container')
let projectContentBoxList = document.querySelectorAll('.content-box')

projectImgList = [
    'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    './img/project-2.png',
    'https://images.pexels.com/photos/1178610/pexels-photo-1178610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]


let index = 1

function changeProjectImg(ind) {
    index = ind
    projectImg.style.backgroundImage = `url("${projectImgList[ind]}")`
    
    for(let i=0; i<projectContentBoxList.length; i+=1){
        if(i == ind){
            projectContentBoxList[i].classList.add('highlighted-content-box')
        }else{
            projectContentBoxList[i].classList.remove('highlighted-content-box')
        }
    }
}

setInterval(()=>{
    index = (index + 1) % projectImgList.length
    changeProjectImg(index)
    console.log('hello')
}, 5000)