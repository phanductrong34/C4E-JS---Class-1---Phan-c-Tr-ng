// 3.c 

//bai 2
// {
//     console.log("Using setInterval")
//     var count = 0;
//     var a= setInterval(() => {

//         console.log("Heehaw");
//         },100); 
    
// }



// {
//     console.log("bai 2");
//     console.log("Using setTimeout")
//     function myFunction() {
//         setTimeout(() => {
//         console.log("hello");
//         myFunction()
//     },1000 );  
    
// }
// myFunction();   
// }

/*bai 3

3.1 No, because let is block scope which mean it can't escape a block including function scope
3.2 No, althought var is global scope, it can't escape function scope

*/ 
//bai 4.1
{
    console.log("bai 4.1");
    let x = document.getElementsByTagName("li");
    console.log(x[1]);
    
    console.log("bai 4.2");
    for(let i = 0; i < x.length; i++){
        console.log(x[i]);
    }
    
    
}
//bai 5
{
    console.log("bai 5.1");
    let x = document.getElementsByClassName("singer");
    console.log(x[1]);
    console.log("bai 5.2");
    for(let i = 0; i < x.length; i++){
        console.log(x[i]);
    }

}
//bai 7
{
    console.log("bai 7.1");
    button1.addEventListener('click', (e) => {
        console.log(e.target);
    });
    button2.addEventListener('click', (e) => {
        console.log(e.target);
    } )

    input1.addEventListener('keydown', (e) =>{
        console.log(e.key);
    })


}

//bai 8
{
    function myInfo() {
        alert("Phan Duc Trong");
        alert("I want to be with you as soon as possible");
    }
    bai8.addEventListener('click', () => {
        myInfo();
    })

}
//bai 9
{
    
    function yourInfo(name,wish) {
        alert(name);
        alert(wish);

    }
    bai9.addEventListener('click', () => {
        yourInfo("Dao Vinh Linh","Being with his crush");
    })
}

//bai 10
{
    function yourInfo2(name,wish) {
        if(name === ""){
            name = "Input not Found";
        }
        if(wish === ""){
            wish = "Input not Found"
        }

        alert(name);
        alert(wish);

    }



    summit.addEventListener('click',() => {
        var x = document.getElementById("nhap_ten").value;
        var y = document.getElementById("nhap_wish").value;
        yourInfo2(`${x}`,`${y}`);

    })
    
    
}

//bai 11
// {
    // let x = document.getElementById("upperitbtn");
    // upperitbtn.addEventListener('click', (e) =>{
    //     console.log(e.target);
    // });
//bai 11

let x = document.getElementById("btn");
x.addEventListener("click",() =>{
    let y = document.getElementById("input").value;
    y = y.toUpperCase();
    document.getElementById("insertText").innerHTML = y;
} )

//bai 12
{
    let tableData = [
        projectArr = ["Learn front-end", "Learn front-end","Learn front end","Learn git"],
        taskArr = ["Learn HTML","Learn CSS","Learn JS Variable and Data Types","Learn Git Basic"],
        timeSpent = ["6","8","6","2"]
    ];

    var row = document.getElementById("tbody");
    console.log(row);
    let dem = 0;
    for(let i = 0; i < 4; i++){ // in ra 4 hang nhu vay
        let newRow = row.insertRow(i);// bat dau tu hang dau tien
        for(k = 0; k < 3; k++){
        // cho chay het content cua mot hang
        let Cell = newRow.insertCell(k);
        Cell.innerHTML = tableData[k][dem];
        } 
        dem++;
        }
    function getInfo() {
        let a = document.getElementById("enterProject").value;
        console.log(a);
        tableData[0].push(a);
        let b = document.getElementById("enterTask").value;
        tableData[1].push(b)
        console.log(b);
        let c = document.getElementById("enterTime").value;
        tableData[2].push(c)
        console.log(c);
        console.log(tableData);
        var row = document.getElementById("tbody");
        var end = tableData[0].length;
        var endRow = row.insertRow(end);
        for(k = 0; k < 3; k++){
            // cho chay het content cua mot hang
            let Cell = endRow.insertCell(k);
            Cell.innerHTML = tableData[k][end-1];
            } 
        }
}

//bai 12 lan 2
{
    let itemArr = ["Back-Pack","MiBand Watch","Ring"];
    console.log(itemArr);
    let itemlist = document.getElementById("itemList");
    console.log(itemlist);
    function reloadData() {
        for(let i = 0; i < itemArr.length; i ++){
            itemlist.insertAdjacentHTML("beforeend",`<li class = "itemhoho">${itemArr[i]}</li> <button onclick = "deleteItem(${i})">Delete</button>`)
            }
            console.log(itemlist);
        
    }
    reloadData();
    
    function addItem() {
        console.log("Button Clicked");
        let x = document.getElementById("addItem").value;
        console.log(` Item ${x} has been add`);
        itemArr.push(x);
        itemlist.insertAdjacentHTML("beforeend",`<li class = "itemhoho">${itemArr[itemArr.length-1]}</li><button onclick = "deleteItem(${itemArr.length-1})">Delete</button>`)
        console.log(itemArr);
        document.getElementById("addItem").value = "";
        
    }
    function deleteItem(x){
            console.log(`delete item ${x}`);
            itemArr.splice(x,1);
            console.log(itemArr);
    
            
            reloadData();
       
        
    }
}


     

    





