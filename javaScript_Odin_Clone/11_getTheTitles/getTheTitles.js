const getTheTitles = function(books) {
    let list = [];
    let i = 0;
    for(let name in books){
        list[i] = books[name]['title'];
        i++;
    }
    return list;
};

// Do not edit below this line
module.exports = getTheTitles;
