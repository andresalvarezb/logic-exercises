"use strict";
const email = 'bicycle car ball _playstation bicycle car teddy';
const gifts = {};
function splitEmail(text) {
    const list = text.trim().split(' ');
    const listFilter = list.filter(e => !e.startsWith('_'));
    for (const toy of listFilter) {
        if (gifts.hasOwnProperty(toy)) {
            gifts[toy] += 1;
        }
        else {
            gifts[toy] = 1;
        }
    }
    console.log(gifts);
}
splitEmail(email);
