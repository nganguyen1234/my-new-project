function changeArr(arr, number) {
    document.write("mảng số nguyên trước khi thay đổi: " + arr);
    number = +prompt("nhập vào một số tùy thích");
    document.write("<br>" + "số bạn đã nhập là: " + number);
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case number === arr[i]:
                arr[i] = -1;
                break;
            case !(number % 2) && arr[i] % 2 === 1:
                arr[i]++;
                break;
            case number % 2 === 1 && !(arr[i] % 2):
                arr[i]++;
                break;
        }
    }
    document.write("<br>" + "mảng số nguyên sau khi thay đổi là: " + arr);
}

let array = [1, 43, 23, 54, 23, 65, 43, 67, 89, 32, 56];
changeArr(array);
