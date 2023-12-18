const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    // Cas de base : tableau vide
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    // Cas récursif : recherche dans la moitié gauche ou droite du tableau
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, end);
    }
};