import logUpdate from "log-update"
// let frames = ['loading', 'loading.','loading..','loading...']
let frames = [`/`,`-`,`\\`]
// let frames = ['🙂', '😠' , '😿' ]
// let i=0
// setInterval((n)=>{
//     const frame =frames[i++ % frames.length]
//     logUpdate(frame)
// },200)

const char='#'
const min = 0
const max = 100
const steps = 1
let num = 1

const mInerval = setInterval(()=>{
    let progress = ''
    for (let index = 0; index < num ; index++) {
       progress += char
    }
    const progressTitle = `Loading:  [${progress}]\n${num*steps}%`
    logUpdate(progressTitle)
    num++
    if(num > max/steps){
        logUpdate.done()
        clearInterval(mInerval)
    }
},200)


