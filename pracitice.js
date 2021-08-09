// function perfectfriend(friends) {
//     let friend = friends[0];
//     for (let i = 0; i < friends.length; i++) {
//         const item = friends[i + 3];
//         if (friend.length > item.length) {
//             friend = item;
//         }
//     }
//     return friend;
// }
// var friendsName = ['abul', 'kabul', 'dabul', 'mokbul', 'tabulse'];
// var result = perfectfriend(friendsName);
// console.log(result);

// function largeFriend(arr) {
//     let large = arr[0];
//     for (const item of arr) {
//         if (large.length < item.length) {
//             large = item;
//         }
//     }
//     return large;
// }
// var result = largeFriend(['sazol', 'kabul', 'abul']);
// console.log(result);

// function largeNumber(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element.length == names.length[4]); {
//             largest = element;
//         }
//     }
//     return largest;
// }
// const names = ['abul', 'mokbul', 'dabul', ];
// const result = largeNumber(names);
// console.log(result);

// function largestElement(string) {
//     let largest = string[0];
//     for (let i = 0; i < string.length; i++) {
//         const element = string[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const ages = ['agh', 'ertf', 'fjtsht', 'sazol', 'hyue'];
// const oldest = largestElement(ages);
// console.log('oldest', oldest);




// function print2Smallest(arr, arr_size) {
//     let i, first, second;

//     /* There should be atleast two elements */
//     if (arr_size < 2) {
//         console.log(" Invalid Input ");
//         return;
//     }

//     first = Number.MAX_VALUE;
//     second = Number.MAX_VALUE;
//     for (i = 0; i < arr_size; i++) {
//         /* If current element is smaller than first
//         then update both first and second */
//         if (arr[i] < first) {
//             second = first;
//             first = arr[i];
//         }

//         /* If arr[i] is in between first and second
//         then update second */
//         else if (arr[i] < second && arr[i] != first)
//             second = arr[i];
//     }
//     if (second == Number.MAX_VALUE)
// //         console.log("There is no second smallest element\n");
// //     else
// //         console.log("The smallest element is " + first + " and second " +
// //             "Smallest element is " + second + '\n');
// // }





function perfectFriend(friend) {
    var string = friend[0];
    for (i = 0; i < friend.length; i++) {
        if (friend[i].length == 5) {
            string = friend[i];
            break;
        }
    }
    return string;
}


var friends = ["Sazol", "Raitul", "Rasel", "Samrat", "Rajib"];

var fiveCharacterName = perfectFriend(friends);

console.log(fiveCharacterName);