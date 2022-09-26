function checkArrs(arr1, arr2) {
    let count = 0;
    let arrParent;
    let arrChild;
    if (arr1.length > arr2.length) {
        arrParent = arr1;
        arrChild = arr2;
    } else {
        arrParent = arr2;
        arrChild = arr1;
    }
    for (let i = 0; i < arrChild.length; i++) {
        for (let j = 0; j < arrParent.length; j++) {
            if (arrChild[i] === arrParent[j]) {
                count++;
                arrParent.splice(0, j);
                j--;
                break;
            }
        }
    }
    return count === arrChild.length;
}

document.write(checkArrs([1, 2, 3, 4], [1, 3]))