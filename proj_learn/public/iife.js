(function(message){
    const name = 'Billy';
    console.log(message,name);
})("Hey");

(function(message){
    const age = 21;
    console.log(message, age);
})("You are");

const obj1 = {
    height: 190
};

const obj = obj1;
obj.name= 'Dias';

console.log(obj1);