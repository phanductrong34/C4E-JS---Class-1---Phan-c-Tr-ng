while(true){
    let x = Number(prompt('x ='));
    let n = Number(prompt('n ='));
    if (x == n) {
        alert(`${x} is in higher half of ${n}, sound so wrong but true =)))`);
    } else {

        let halfN = n / 2;
        if (x < halfN) {
            alert(`${x} in in lower half of ${n}`);
        } else if (x > halfN) {
            alert(`${x} is in higher half of ${n}`);
        } else {
            alert(`${x} is half of ${n}`);
        }
    }
}