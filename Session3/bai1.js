
let shopItems = ["Jean","T-shirt","Socks"];
    let checker = true;
    let Bigchecker = true;
    while (Bigchecker){

        while(checker){
            var inPutUser = prompt(`Hi there, welcome to shop admin panel, what do you want
            1. Check current item
            2. Import new item
            3. Update item
            4. Delete item`);
            if (inPutUser >= 1 && inPutUser <= 4){
                checker = false;
            } else {
                alert('This command is not supported, please re-enter ');
            }
        }
        checker = true;
        if (inPutUser == 1){
            console.log('The current items are:');
            for(let i = 0; i < shopItems.length; i++){
                console.log(`${i+1}.${shopItems[i]}`);
            }
        } 


        else if (inPutUser == 2){
            let numberImport = Number(prompt('How many items do you want to add?'));
            console.log('New Update:');
            for (i = 0; i < numberImport; i ++){
                let newItem = [prompt(`Enter the name of new item #${i+1}`)]
                shopItems.push(newItem);
            }
            for(let i = 0; i < shopItems.length; i++){
                console.log(`${i+1}.${shopItems[i]}`);
            }
            alert('Done');
        }


        else if (inPutUser == 3){
            let numberUpdate = Number(prompt('Enter the position you want to update'));
            let updateItem = prompt(`Number ${numberUpdate} is ${shopItems[numberUpdate-1]}, enter the new name :`);
            shopItems[numberUpdate-1] = updateItem;
            console.log('New Update :');
            for(let i = 0; i < shopItems.length; i++){
                console.log(`${i+1}.${shopItems[i]}`);
            }
            alert('Done');
        }
        



        else{
            let numberDelete = Number(prompt('Enter the position you want to delete'));
            let confirmDelete = Number(prompt(`Number ${numberDelete} is ${shopItems[numberDelete-1]}, delete it?
                    1. Yes
                    2. No`));
                if (confirmDelete == 1){
                    shopItems.splice((numberDelete-1),1);
                    console.log('New Update :');
                    for(let i = 0; i < shopItems.length; i++){
                        console.log(`${i+1}.${shopItems[i]}`);
                    }
                    alert('Done');


                }
            }


        let confirmContinue = Number(prompt(` Do you want to continue?
        1. Yes
        2. No`));
        if (confirmContinue == 2){
            Bigchecker = false;
        }

    }
    alert ("Bye admin");

       




