while (true){
    alert('Hello, this is BMI caculator');
    let userMass = Number(prompt('Your weight in kg ?'));
    let userHeightCm = Number(prompt('Your height in cm ?'));
    let userHeightM = userHeightCm / 100;
    let OutPut = userMass / (Math.pow(userHeightM,2)) ;
     let OutputRound = OutPut.toFixed();
    alert(` Your BMI stats is ${OutputRound}`);
    if (OutPut < 16){
        alert('You are severaly underweight');
    } else if (OutPut < 18.5){
        alert('You are underweight');
    } else if (OutPut < 25){
        alert('You are normal');
    } else if (OutPut < 30){
        alert('You are overweight');
    } else {
        alert('You are obese');
    }
}
