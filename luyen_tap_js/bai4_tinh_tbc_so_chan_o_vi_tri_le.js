let size;
do {
    size = +prompt("nhập vào độ dài mảng bạn muốn tạo nhưng không được lớn hơn 50");
} while (size > 50);
let arr = [];
for (let i = 0; i < size; i++) {
    arr[i] = +prompt("nhập vào phần tử thứ " + i + 1);
}
document.write("mảng bạn vừa nhập là: " + arr);
let sum = 0;
let count = 0;
for (let i = 0; i < size; i++) {
    if (i % 2 === 1 && arr[i] % 2 === 0) {
        sum += arr[i];
        count++;
    }
}
let avg = sum / count;
document.write("<br>" + "trung bình cộng của số chẵn tại vị trí lẻ trong mảng là: " + avg);