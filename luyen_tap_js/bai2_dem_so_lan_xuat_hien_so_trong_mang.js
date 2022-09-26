function countNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                count++;
                arr.splice(j, 1);
                j--;
            }
        }
        document.write("số " + arr[i] + " xuất hiện " + count + " lần" + "<br>");
    }
}

let array = [1, 2, 3, 3, 2, 4, 6, 4];
countNumber(array);