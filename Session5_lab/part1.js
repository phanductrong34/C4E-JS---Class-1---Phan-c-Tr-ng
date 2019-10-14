// // {
// //     while(true){
// //     let randomNumber = (Math.random()).toFixed(2);
// //     alert(randomNumber);
// //     if(randomNumber < 0,3){
// //         break;
// //     }
// //     }
// // }


// // {   
// //     console.log(`bai 2`);
// //     let arr = [2,5,6,9,10];
// //     let randomizer = Math.floor(Math.random()*5);
// //     console.log(randomizer);
// //     console.log(`the element at position ${randomizer} is ${arr[randomizer]} `);
// // }


// {
//     console.log('bai 3');
//     alert('bai 3');
//     let totalQuiz = 3;
//     let point = 0;
//     let quiz = [3];
//          quiz[0] = {
//             Q: 'How many leg does SPIDER have?',
//             Choice : [2,4,6,8],
//             Ans: 8
//             };

//          quiz[1] = {
//             Q: 'What does the cat say',
//             Choice : ['meow',"gau gau","hi hi","anh yeu em"],
//             Ans:'meow'
//             };
         
//         quiz[2] = {
//             Q: 'What color is the dress?',
//             Choice : ['blue','red','white','black'],
//             Ans : 'blue'
//             };
//     let randomizer = 0;
//     for (i = totalQuiz; i > 0; i-- ){

//         randomizer = Math.floor((Math.random()*i))
//         console.log(`may random ra cau ${randomizer}`);
//         let inPutUser = prompt(`${quiz[randomizer]['Q']}
//             1. ${quiz[randomizer]['Choice'][0]} 
//             2. ${quiz[randomizer]['Choice'][1]} 
//             3. ${quiz[randomizer]['Choice'][2]} 
//             4. ${quiz[randomizer]['Choice'][3]}
//             `)
//         console.log(`you chose ${quiz[randomizer]['Choice'][inPutUser-1]}`)
//         if (quiz[randomizer]['Choice'][inPutUser-1] == quiz[randomizer]['Ans']){
//             alert('Bravo, you re genius!');
//             point++
//         } else {
//             alert('Good luck next time')
//         }
//         console.log('now i will delete')  
//         quiz.splice(randomizer,1);
//     }
        
//         alert('We run out of quiz, see you next time')
//         alert (`You have ${point}/3 correct`);
          
// }
   

// {
// //     while(true){
// //     let randomNumber = (Math.random()).toFixed(2);
// //     alert(randomNumber);
// //     if(randomNumber < 0,3){
// //         break;
// //     }
// //     }
// // }


// // {   
// //     console.log(`bai 2`);
// //     let arr = [2,5,6,9,10];
// //     let randomizer = Math.floor(Math.random()*5);
// //     console.log(randomizer);
// //     console.log(`the element at position ${randomizer} is ${arr[randomizer]} `);
// // }


{
    console.log('bai 3');
    alert('bai 3');
    let checker = true;
    while(checker){


        let totalQuiz = 3;
        let point = 0;
        var quiz = [3];
             quiz[0] = {
                Q: 'How many leg does SPIDER have?',
                Choice : [2,4,6,8],
                Ans: 8
                };
    
             quiz[1] = {
                Q: 'What does the cat say',
                Choice : ['meow',"gau gau","hi hi","anh yeu em"],
                Ans:'meow'
                };
             
            quiz[2] = {
                Q: 'What color is the dress?',
                Choice : ['blue','red','white','black'],
                Ans : 'blue'
                };
        
                
        
        for(k =0; k < totalQuiz; k ++){

            let tempArr = quiz[k]['Choice'] 
            function shuffle(tempArray) {
                var currentIndex = tempArray.length, temporaryValue, randomIndex;
              
                // While there remain elements to shuffle...
                while (0 !== currentIndex) {
              
                  // Pick a remaining element...
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex -= 1;
              
                  // And swap it with the current element.
                  temporaryValue = tempArray[currentIndex];
                  tempArray[currentIndex] = tempArray[randomIndex];
                  tempArray[randomIndex] = temporaryValue;
                }
              
                return tempArray;
              }

            quiz[k]['Choice'] = shuffle(quiz[k]['Choice']); 
        }
               

        let randomizer = 0;
        for (i = totalQuiz; i > 0; i-- ){
    
            randomizer = Math.floor((Math.random()*i))
            console.log(`may random ra cau ${randomizer}`);
            let inPutUser = prompt(`${quiz[randomizer]['Q']}
                1. ${quiz[randomizer]['Choice'][0]} 
                2. ${quiz[randomizer]['Choice'][1]} 
                3. ${quiz[randomizer]['Choice'][2]} 
                4. ${quiz[randomizer]['Choice'][3]}
                `)
            console.log(`you chose ${quiz[randomizer]['Choice'][inPutUser-1]}`) //in ra cau tra loi ban chon doi voi cau hoi dc random
            if (quiz[randomizer]['Choice'][inPutUser-1] == quiz[randomizer]['Ans']){
                alert('Bravo, you re genius!');
                point++
            } else {
                alert('Good luck next time')
            }
            console.log('now i will delete')  
            quiz.splice(randomizer,1);
        }
            
            alert('We run out of quiz let see what you got');
            alert (`You have ${point}/3 correct`);
            if(point < totalQuiz){
                alert('We will give you another try')
            } else {
                checker = false;
            }
    
              
    }


    }
    
   