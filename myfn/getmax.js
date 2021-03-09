module.exports = function getmax(array){
    let maxnum = array[0]

    for (let i = 0;i <array.length;i++){
        maxnum = array[i] > maxnum ? array[i]:maxnum
    }
    return maxnum

}