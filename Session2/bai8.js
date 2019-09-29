{
    console.log(`bai 8a`);
    alert('8a. Print out 6 L’s and H’s, half L’s, half H’s ');
    for(let i = 0; i < 3; i++){
        console.log(`L`);
    }
    for(let i = 0; i < 3; i++){
        console.log(`H`);
    }
}

{   alert('8b. Print out n​ L’s and H’s in total');
    console.log(`bai 8b`);
    let n = Number(prompt('8b. Enter n'));
    let halfN = n / 2;
    for(let i = 0; i < Math.ceil(halfN); i++){
        console.log(`L`);
    }
    for(let i = 0; i < Math.floor(halfN); i++){
        console.log(`H`); 
    }
}

{
    alert('8c. Print out 8 1’s and 0’s in total, consecutively');
    console.log('bai 8c');
    for(let i = 0; i < 8; i++){
        if (i % 2 == 0){
            console.log(0);
        } else {
            console.log(1);
        }
    }
       
}

{
    alert('8d. Print out n 1’s and 0’s in total, consecutively');
    console.log('bai 8c');
    let n = Number(prompt('Nhap n = '))
    for(let i = 0; i < n; i++){
        if (i % 2 == 0){
            console.log(0);
        } else {
            console.log(1);
        }
    }
       
}


