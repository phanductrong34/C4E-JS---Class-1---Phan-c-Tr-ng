let selectHomework = Number(prompt(`C4E - JS - Class 1 - Trongpd
Mentor muon xem bai so may?
5. bai 5
6. bai 6
7. bai 7
8. bai 8
`));

if (selectHomework == 5)
{
alert('bai 5');
console.log('bai 5')
let inputStringNum = prompt('Enter a sequence of number, separated by commas (,)');
let afterArray = inputStringNum.split(",");
let sum = 0;
for (i = 0; i < afterArray.length; i++){
    console.log(afterArray[i]);
    sum += Number(afterArray[i]);
}
console.log(` sum = ${sum}`);
alert(`The sum of them is ${sum} `);
}


else if (selectHomework == 6)
{
alert('bai 6');
let inputStringNum = prompt('Enter a sequence of number, separated by commas (,)');
let afterArray = inputStringNum.split(",");
let minValue = Math.min(...afterArray);
alert(`The smallest number is ${minValue}`);
}


else if (selectHomework == 7)
{
alert(`bai 7`);
const arr = [3,4,6,-9,10,-88,2];
// let checker = true;
// while(checker){
//     let inputStringNum = Number(prompt('Enter a number'));
//         let i =0;
//         while(i < arr.length){
//         if(inputStringNum == Number(arr[i])){
//             alert(`${inputStringNum} is FOUND in my array at index ${i}`);
//         } else if(i > arr.length) {
//             break;
//         }
//     }
//     alert(`${inputStringNum} is NOT FOUND in my array `);
    
// }
// }


let inputStringNum = Number(prompt('Enter a number'));
let indexNum = arr.indexOf(inputStringNum,0);
if(inputStringNum == arr[indexNum]){
    alert(`${inputStringNum} is FOUND in my array at index ${indexNum}`)
} else {
    alert(`${inputStringNum} is NOT FOUND in my array at index ${indexNum}`)
}

}

else if (selectHomework == 8);
{
alert(`bai 8`);
let checker = true;
let SheepSizes = [5,7,350,90,24,50,75];
console.log(`Hello, this is my sheep sizes :`);
while(checker){
    for(let i = 0; i < 4; i ++){
        console.log(...SheepSizes);
        let maxSize = Math.max(...SheepSizes);
        let indexMax = SheepSizes.indexOf(maxSize);
        console.log(`Now my biggest sheep has size ${maxSize},let shave it`);
        SheepSizes[indexMax] = 8;
        console.log('After shearing, here is my flock');
        console.log(...SheepSizes);
        console.log(`MONTH ${i+1}`);
        console.log('One month has passed. my sheep have grown, here are their sizes:');
        for(let k = 0; k < SheepSizes.length; k++){
            SheepSizes[k] += 50;
        }
        checker = false;
    }
    }
    let totalSize = 0;
    for(let i = 0; i <SheepSizes.length; i++){
        totalSize += SheepSizes[i];
    }
    console.log(`My flock has a total size: ${totalSize} `);
    console.log(`I would get ${totalSize} * 2$ = ${totalSize*2} `);
}
