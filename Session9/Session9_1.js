// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 3000);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   promise1.then(
//     result => console.log('done')
//   );
//   console.log(promise1);
//   // expected output: [object Promise]
 

//bai 1

var promiseLog = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('promise is the best')
    },5000);
});

promiseLog.then(function(value){ //promise.then là một hàm trả ra giá trị bên trong resolve, có thể là hàm hoặc là giá trị luôn
    console.log(value); // giá trị result truyền vào hàm ngay sau đó function(para)
})
promiseLog.then(
    result => console.log('No value is promissing') // cái này thì ko có giá trị nào đợi để truyền vào, nó chỉ đợi resolve đc thực hiện để chạy cái .then này thôi
)
.catch((a)=>{
    console.log(a);
});


//await va async
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // đợi promise trả kết quả resolve xong mới chạy tiếp xuống đưới
  
    alert(result); // "done!"
  }
  
  f();

  //bai 2
const getApi = `https://kpop-idol.mindx.edu.vn/api/v1/idols`
async function loadApiIdol(){
    const connect = await fetch(getApi);
    const data = await connect.json();
    showData(data);
}
// loadApiIdol();
function showData(data){
    console.log(data);
}

///////////////////////////////////////////////////////////////////  

const fetchAPI  = fetch('https://kpop-idol.mindx.edu.vn/api/v1/idols')

fetchAPI.then((value)=>{
            console.log('CONNECTED,HOOORAYY');
            return(value.json()); 
    })
        .then((connect)=>{
            console.log('%c%s',
                        'color: green; font-size: 24px;',connect.total);
            console.log(connect)
        })


//////////////////////////////////////////////////////////////////////  bai 3

const spreedSheetAPI ='https://sheetdb.io/api/v1/dbre9togehl04';
/////////////////////////////////////////////////////////////////////// bai 4

function randomNumber(){
    let ranNum = Math.floor(Math.random()*11);
    console.log(`random number between 0 to 10: ${ranNum}`);
    return ranNum;

}
const x = randomNumber();
if(x < 0) {
    console.log('Failed: the number is smaller than 0');
} else if(x > 10) {
    console.log('Failed: the number is biger than 10');
} else {
    console.log('Passed, bravo');
}
///////////////////////////////////////////////////////////////////// bai 5
function randomNumber2(a,b){
    a = Math.min(a);
    b = Math.max(b)
    let ranNum = Math.floor(Math.random()*(b-a +1) + a)
    console.log(`random number between ${a} to ${b}: ${ranNum}`)
    return ranNum;
}
const y = randomNumber2(4,16);
    if(x < 4){
        console.log('Failed: the number is smaller than 4');
    } else if (x > 16) {
        console.log('Failed: the number is bigger than 16');
    } else {
        console.log('Passed,bravo');
    }

//////////////////////////////////////////////////////////////////// bai 6

function distance(x1,y1,x2,y2){
    d1 = Math.sqrt((Math.pow(x1 - x2,2)+ Math.pow(y1 - y2,2)))
    console.log(`distance between 2 dots :${d1}`);
    return d1;
}
const result1 = distance(3,10,0,6);
if (result1 !== 5){
    console.log("Failed: the calculation is wrong");
} else {
    console.log("Pass, bravo");
}
/////////////////////////////////////////////////////////////////// bai 7
