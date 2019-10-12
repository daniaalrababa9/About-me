'use strict';
var score = 0;
var name = prompt(' what is your name?');
alert('Hi  ' + name + '  welcome to my bage ');
function q1(userreply) {
    var dania = [
        ['do you eat junk food?', 'that is bad for your health', 'good for you.']
        , ['do you smoke?', 'no this is bad for your health, would you try to quit', 'good for you.']
        , ['do you do exercises?', 'good ,keep going.', 'oh, no this is bad for your health.']
        , ['do you eat brakfast?', 'great,keep going', 'please avoid skipping breakfast ,lest your blood sugar drop.']
        , ['do you cover your head during sleep ?', 'try to don\'t do it because it will Increases the concentration of carbon dioxide and reduces the concentration of oxygen, which leads to negative effects on the brain', 'good for you.']
    ]
    for (var i = 0; i < dania.length; i++) {
        var daniaa = dania[i];
        var userreply = prompt(daniaa[0]);
        userreply = userreply.toLowerCase();
        var yesreply = daniaa[1];
        var noreply = daniaa[2];
        switch (userreply) {
            case 'yes':
            case 'y':
                alert(yesreply);
                score++;
                break;
            case 'no':
            case 'n':
                alert(noreply);
                break;
            default:
                alert('wrong answer');
        }
    }
    return (userreply);
}
q1();
function q2(num1) {
    var age = prompt('do you know how old iam? ');
    var num1 = parseInt(age);

    switch (num1) {
        case 26:
            alert('correct answer  iam ' + num1 + ' years old ');
            score++;
            break;
        default:
            for (var j = 0; j <= 4; j++) {
                if (num1 < 18) {
                    alert('your answer is too low.');
                    var age = prompt('please reanswer the question? ');
                    var num1 = parseInt(age);
                } else if (num1 > 30) {
                    alert('your answer is too high');
                    var age = prompt('please reanswer the question? ');
                    var num1 = parseInt(age);

                } else if (num1 === 26) {
                    alert('correct answer  iam ' + num1 + ' years old ');
                    score++;
                }
                else {
                    alert('wrong answer')
                    var age = prompt('please reanswer the question? ');
                    var num1 = parseInt(age);
                }
            }
    }
    return (num1);
}
q2();

function q3(userreplies) {
    var fruit = ['apple', 'orange', 'banana', 'Avocados', 'Strawberry', 'Watermelon'];
    var userreplies = prompt('what is the fruit that i like ?');
    userreplies = userreplies.toLowerCase();
    for (var h = 0; h < fruit.length; h++) {
        switch (userreplies) {
            case 'apple':
            case 'orange':
            case 'banana':
            case 'Avocados':
            case 'Strawberry':
            case 'Watermelon':
                alert('correct answer ');
                score++;
                h = fruit.length;
                break;
            default:

                alert('wrong answer');
                var userreplies = prompt('please reanswer the question?and choose from these choice (orange , mango ,Cherries,Grapes,apple,banana, Dragon Fruit,Strawberry,Avocados)');

        }
    }
    return (userreplies);
}
q3();

alert('your score is ' + score)
alert('the fruit that i like to eat is ' + fruit[0] + ' ,' + fruit[1] + ', ' + fruit[2] + ', ' + fruit[3] + ' ,' + fruit[4] + ' and ' + fruit[5]);
alert('Bye bye   ' + name + ', I hope that you enjoy visiting my site ');
console.log('name', name);
console.log('userreplay', userreply);
console.log('age', age);
console.log('userreplies)', userreplies);
document.write('<h2>' + score + '</h2>')
