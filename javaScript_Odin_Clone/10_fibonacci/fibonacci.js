const fibonacci = function(num) {
    if(num < 1){
        return "OOPS";
    }else if(num == 1 || num == 2){
        return 1;
    }else{
        let aux = 0;
        let ant1 = 1;
        let ant2 = 1;
        for(let i = 3; i <= num; i++){
            aux = ant1;
            ant1 = ant2;
            ant2 = aux + ant1;
        }
        return ant2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
