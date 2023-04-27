//Task 1
/*
let newdate = new Date();
console.log(newdate);
const getDateFormat = (date,seperator) =>{
    if(date.getDate()<10){
        console.log(`${0}${date.getDate()}${seperator}${date.getMonth()+1}${seperator}${date.getFullYear()}`);
    }else{
        console.log(`${date.getDate()}${seperator}${date.getMonth()+1}${seperator}${date.getFullYear()}`);

    }
}
getDateFormat(newdate,"-")
*/



//Task 2
/*
let birthdayDate = new Date('November 29,2023');

const hoursToDay = (birthDate,currentDate) =>{
    return currentDate.getHours()/24;
}
const minutesToDay = (birthDate,currentDate) =>{
    return currentDate.getMinutes()/(24*60);

}
const secondsToDay = (birthDate,currentDate) =>{
    return currentDate.getSeconds()/(24*60*60);

}
const millisecondsToDay = (birthDate,currentDate) =>{
    return currentDate.getMilliseconds()/(24*60*60*100);
}

const getDaysBeforeBirthday = (date) =>{
    let currentDate = new Date();
    console.log(Math.round((date.getFullYear() - currentDate.getFullYear())*12*30 + (date.getMonth() - currentDate.getMonth())*30 + (date.getDate() - currentDate.getDate()) + hoursToDay(date,currentDate) + minutesToDay(date,currentDate) + secondsToDay(date,currentDate) + millisecondsToDay(date,currentDate)));    
}
getDaysBeforeBirthday(birthdayDate);
*/


//Task 3
/*
let date = Date.now();

const addDays = (dateNow,additionWithDays = 1) => {
    const result = new Date(dateNow + (additionWithDays*24*60*60*100))
    return result    
}
console.log(addDays(date,2));
*/
