const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
function returnFirstTwoDrivers(){
const a= [drivers[0],drivers[1]]
    return a
};
function returnLastTwoDrivers(){
    const last= [drivers[2],drivers[3]]
    return last
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier (interger){
    return function (){
        return interger*interger
    }
}

const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;


const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers);