
let x = prompt("Nhập mảng số nguyên phân cách bằng dấu ,");
let y = x.split(",").map(Number);
let newNum = new Array();
let Max =0

for( i=0; i < y.length -1; i++ ) {
  newNum = [...newNum, y[i] * y[i+1]]
  for ( k =0; k <= newNum.length; k++ ) {
    if(Max < newNum[k]) {
      Max = newNum[k]
    }
  }
}
console.log(Max);