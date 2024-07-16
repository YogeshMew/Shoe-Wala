// // console.log("Namaste Duniya")
// let firstName="wow";
// let lastName="programmers";
// // console.log(firstName,lastName)
// let fullName=`I want to become ${firstName} ${lastName}`
// console.log(fullName);
// console.log(firstName[2]);
// console.log(firstName.toLocaleUpperCase());
// let hobbies=" coding raeding running";
// let result=hobbies.trim()
// console.log(hobbies)
// console.log(result)
// let fullName="wowprogrameers";
// console.log(fullName.slice(0,5))
// let favouriteColors="Orange Yellow Blue Greeen";
// let arrColors=favouriteColors.split(' ')
// console.log(arrColors)
// let score=50;
// console.log(score,typeof score)
// let result=score/2;
// console.log(result)
// let age=22;
// console.log(age ==="22")
// console.log(age !="22")
// let numberType=54;
// console.log(typeof numberType)
// let stringType=String(numberType);
// console.log(stringType, typeof stringType)
// let Dishes=['Biryani','Chat','Parathe']
// console.log(Dishes[0]);
// Dishes[0]="Pav Bhaji";
// console.log(Dishes);
// console.log(Dishes.join(''))
// console.log(Dishes.indexOf("chat"))
// let newDishes=["rasgulla","Mishti-Doi"]
// let updateDishes=Dishes.concat(newDishes);
// console.log(newDishes.length);
// console.log(updateDishes.push("Chole"))
// console.log(updateDishes)
// for(let i=1;i<=10;i++)
// {
//     console.log("Run the task",i);
// }
// let dishes=["chole","pani-puri","chat"]
// for(i=0;i<dishes.length;i++)
// {
//     console.log(dishes[i]);
// }
// j=1;
// while(j<=10){
//     console.log("while loop",j);
//     j++;
// }
// if(budget>6000)
// {
//     console.log("will do dinner in 5 star hotel");
// }
// else if(budget>4500){
//     console.log("will do dinner in 3 star hotel");
// }
// else{
//     console.log("Run if all conditions fail");
// }
for(let i=1;i<=10;i++){
    if(i=2)
    {
        continue;

    }
    console.log("value of i =",i)
}
let password="quwerty@";
if(password.length>4 && password.includes('@')){
    console.log("Password is strong");
}