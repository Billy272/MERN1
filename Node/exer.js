let me = {
    name: 'Billy',
    age: 21,
    height: 190,
    data : {
        favoriteColor: 'blue',
        favoriteFood: 'chocolate balls',
        hobby: {
            computer: 'coding',
            music: 'rap',
            sport: 'football'
        },
        friends: ['Trevor', 'Willy', 'Donald']
    }

}

function checkInventory(scannedItem) {
    return me.data[scannedItem];
}
console.log(checkInventory('hobby'));

me.data.hobby.fave_team = 'Chelsea';
console.log(me.data);

delete me.data.hobby.sport;
console.log(me.data);

//return object keys
console.log(Object.keys(me));
