'use strict';
var name = prompt(' what is your name?');
alert ('Hi  '+name+'  welcome to my bage ');
var food = prompt('do you eat junk food?');
food = food.toLowerCase();
if (food === 'yes') {
    alert('that is bad for your health');
} else if (food === 'y') {
    alert('that is bad for your health');
} else {
    alert('good for you.');

}
var smoking = prompt('do you smoke?');
smoking = smoking.toLowerCase();
if (smoking === 'yes') {
    alert('no this is bad for your health, would you try to quit');
} else if (smoking === 'y') {
    alert('no this is bad for your health, would you try to quit');
} else {
    alert('good for you.');

}
var exercises = prompt('do you do exercises?');
exercises = exercises.toLowerCase();
if (exercises === 'yes') {
    alert('good ,keep going.');
} else if (exercises === 'y') {
    alert('good ,keep going.');
} else {
    alert('oh, no this is bad for your health.');

}
var breakfast = prompt('do you eat brakfast?');
breakfast = breakfast.toLowerCase();
if (breakfast === 'yes') {
    alert('great,keep going');
} else if (breakfast === 'y') {
    alert('great,keep going');
} else {
    alert('please avoid skipping breakfast ,lest your blood sugar drop.');

}
var cover = prompt('do you cover your head during sleep ?');
cover = cover.toLowerCase();
if (cover === 'yes') {
    alert('try to don\'t do it because it will Increases the concentration of carbon dioxide and reduces the concentration of oxygen, which leads to negative effects on the brain');
} else if (cover === 'y') {
    alert('try to don\'t do it because it will Increases the concentration of carbon dioxide and reduces the concentration of oxygen, which leads to negative effects on the brain');
} else {
    alert('good for you.');

}
alert ('Bye bye   '+name+', I hope that you enjoy visiting my site ');

