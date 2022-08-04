exports.getDate = function getDate(){

let options = { weekday: 'long', month: 'long', day: 'numeric' };
let today = new Date()
let DayName = today.toLocaleDateString("en-US",options) 
return DayName;

}
exports.getDay = function getDay(){

    let options = { weekday: 'long' };
    let today = new Date()
    let DayName = today.toLocaleDateString("en-US",options) 
    return DayName;
    
    }