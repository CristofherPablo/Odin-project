const findTheOldest = function(obj) {
    let birth = 0;
    let death = 0;
    let antAge = 0;
    let index = 0;

    for(let i = 0; i < obj.length; i++){

        birth = obj[i]['yearOfBirth'];
        death = obj[i]['yearOfDeath'];

        if(death === undefined){
            death = 2023;
        }

        if((death - birth) >= antAge){
            antAge = (death - birth);
            index = i;
        }
    }
    return obj[index];
};

// Do not edit below this line
module.exports = findTheOldest;
