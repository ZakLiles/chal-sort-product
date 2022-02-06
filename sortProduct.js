const sortProduct = numArr => {
    let unsortedMap = new Map()
    for(let i = 0; i < numArr.length; i++){
        unsortedMap.set(numArr[i],numArr[i]*(i+1))
    }
    const unsortedProducts = [...unsortedMap]
    const sortedProducts = unsortedProducts.sort(([num1, product1], [num2, product2])  =>  product1 - product2)
    let sortedArr = []
    sortedProducts.forEach(([num, product]) => sortedArr.push(num))
    return sortedArr
}

console.log(sortProduct([23, 2, 3, 4, 5]))