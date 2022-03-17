import logUpdate from "log-update"
import cliProgress from 'cli-progress';

function LoadingBar(char, speed){
    let frames = []
   switch (char) {
       case '<=>':
            frames = [`<`,`=`,`>`]
           break;
        case '/':
            frames = [`/`,`-`,`\\`]
           break;
        case 'emoji':
             frames = ['🙂', '😠' , '😿' ]
            break;
       default:
            frames = ['loading', 'loading.','loading..','loading...']
           break;
   }  
   let i = 0
    setInterval(()=>{
        const frame =frames[i++ % frames.length]
        logUpdate(frame)
    },speed)
}


// ProgressBar('->',300,100, 10)
// LoadingBar('55',200)

function ProgressBar(char,speed,max, steps){
    const min = 0
    let num = 1
    const mInerval = setInterval(()=>{
        let progress = ''
        for (let index = min; index < num ; index++) {
           progress += char
        }
        const progressTitle = `Loading:(${num*steps} %)  [${progress}]`
        logUpdate(progressTitle)
        num++
        if(num > max/steps){
            logUpdate.done()
            clearInterval(mInerval)
        }
    },speed)
}


// using packages :  https://www.npmjs.com/package/cli-progress
// create a new progress bar instance and use shades_classic theme
// const barCustom = new cliProgress.SingleBar(options:object [, preset:object]);

//**********************single bar**************************//
const opt = {
    format: 'Loading [{bar}] {percentage}% |  Duration:{duration_formatted} | {value}/{total} | ETA: {eta_formatted}',
    // barCompleteChar: '#',
    // barIncompleteChar: '.',
    fps: 25,
    stream: process.stdout,
    barsize: 65,
    position: 'center',
    align : 'left',
    hideCursor : true, //hide the cursor during progress operation; restored on complete (default: false) - pass null to keep terminal settings
    linewrap : false,
    etaBuffer : 9,
    // etaAsynchronousUpdate : true,
    barGlue :'',
    // emptyOnZero :true
}

const bar1 = new cliProgress.SingleBar(opt, cliProgress.Presets.rect);
const bar2 = new cliProgress.SingleBar(opt, cliProgress.Presets.rect);
// start the progress bar with a total value of 200 and start value of 0
bar1.start(10000000, 0);
// bar2.start(10000000, 0);
for (let index = 0; index <=10000000; index++) {
    bar1.update(index)
   
}
bar1.stop();

//**********************Multi Bar**********************//

// const multibar = new cliProgress.MultiBar({
//     clearOnComplete: false,
//     hideCursor: true

// }, cliProgress.Presets.shades_grey);

// // add bars
// const b1 = multibar.create(100, 0);
// const b2 = multibar.create(100, 0);

// // control bars
// b1.increment(5)
// b2.update(20, {filename: "helloworld.txt"});


// // stop all bars
// multibar.stop();