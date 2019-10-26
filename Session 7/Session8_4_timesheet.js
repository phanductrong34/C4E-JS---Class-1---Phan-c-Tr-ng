

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

        function addAction(i) {
            
            
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

        
    
