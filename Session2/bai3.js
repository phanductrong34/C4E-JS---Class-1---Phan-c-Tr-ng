{
    console.log('bai 3a');
    alert('3a. print out 6 number, starting from 0');
    for( let i = 0; i <= 6; i++){
        console.log(i);
    }
}

{
    console.log('bai 3b');
    alert('3b. print out n number, starting from 0');
    let n = Number(prompt('Enter a number? '));
    for( let i = 0; i < n; i++){
        console.log(i);
    }   
}

{
    console.log('bai 3c');
    alert('3c. print out a sequence of numbers, starting from 3, ending before ​n');
    let n = Number(prompt('Enter n  '));
    for( let i = 3; i < n; i++){
        console.log(i);
    }   
}

{
    console.log('bai 3d');
    alert('3d. print out a sequence of numbers, starting from ​c​, ending before ​n');
    let c = Number(prompt('Enter c  '));
    let n = Number(prompt('Enter n  '));
     for( let i = c; i < n; i++){
        console.log(i);
    }   
}

{
    console.log('bai 3e');
    alert('3e. print out a sequence of numbers, starting from ​c​, stepping by 3, ending before ​n');
    let c = Number(prompt('Enter c  '));
    let n = Number(prompt('Enter n  '));
     for( let i = c; i < n; i = i + 3){
        console.log(i);
    }   
}

{
    console.log('bai 3f');
    alert('3f. print out a sequence of numbers, starting from ​c​, stepping by s, ending before ​n');
    let c = Number(prompt('Enter c  '));
    let n = Number(prompt('Enter n  '));
    let s = Number(prompt('Enter s  '));
     for( let i = c; i < n; i = i + s){
        console.log(i);
    }   
}