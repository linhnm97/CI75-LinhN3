let team = prompt("Nhập mảng cân nặng của team bằng dấu ,");

let weight1 = team.split(",").map(Number);
let team1 = new Array();
let team2 = new Array();
let Sum1 = 0;
let Sum2 = 0; 
let Tong;

for(i =0 ;i <= weight1.length -1; i+=2) {
    team1 = [...team1, weight1[i]]
}
for( k=1; k <= weight1.length -1; k+=2) {
  team2 = [...team2, weight1[k]];
}

for( i=0; i <= team1.length -1; i++) {
  Sum1 = Sum1 + team1[i];
}
for( i =0; i <= team2.length -1; i++) {
  Sum2 = Sum2 + team2[i];
}
Tong = [Sum1, Sum2];

console.log(Tong);