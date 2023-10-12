// const dinner ={
//     cheesebuger: 12,
//     steak : 20,
//     soup : 8,
//     macAndCheese : 14,
//     soupAndSalad : 16
// };

// console.log(Object.keys(dinner));
// console.log(Object.values(dinner))

// const prices = Object.values(dinner)
// let totalCost = 0

// for(let i=0; i<prices.length; i++){
//     totalCost += prices[i];
// }
// console.log(totalCost);

// let totalCost =0;
// for (const eachMeal in dinner){
//     totalCost += dinner[eachMeal]
// }
// console.log(totalCost)
const userInputString = prompt("Please chose the flavor of the Icecream","vanilla,vanilla,vanilla,strawberry,coffee,coffee");
const stringArray = userInputString.split(",");
const masterStrings =[]
for(let i=0;i<stringArray.length;i++){
    const str = stringArray[i];
    const masterString = str;
    masterStrings.push(masterString)
}

console.log("you are about to order "+stringArray)
console.log(masterStrings)

const counts ={};
masterStrings.forEach((x)=>{counts[x] = (counts[x] || 0)+1});
console.log(counts)

