function Checker(
  r11, r12, r13, r14, r15, r16, r17, r18, r19,
  r21, r22, r23, r24, r25, r26, r27, r28, r29,
  r31, r32, r33, r34, r35, r36, r37, r38, r39,
  r41, r42, r43, r44, r45, r46, r47, r48, r49,
  r51, r52, r53, r54, r55, r56, r57, r58, r59,
  r61, r62, r63, r64, r65, r66, r67, r68, r69,
  r71, r72, r73, r74, r75, r76, r77, r78, r79,
  r81, r82, r83, r84, r85, r86, r87, r88, r89,
  r91, r92, r93, r94, r95, r96, r97, r98, r99) {
  // this.row1 = row1;
  // this.row2 = row2;
  // this.row3 = row3;
  // this.row4 = row4;
  // this.row5 = row5;
  // this.row6 = row6;
  // this.row7 = row7;
  // this.row8 = row8;
  // this.row9 = row9;
  row1 = [r11, r12, r13, r14, r15, r16, r17, r18, r19];
  row2 = [r21, r22, r23, r24, r25, r26, r27, r28, r29];
  row3 = [r31, r32, r33, r34, r35, r36, r37, r38, r39];
  row4 = [r41, r42, r43, r44, r45, r46, r47, r48, r49];
  row5 = [r51, r52, r53, r54, r55, r56, r57, r58, r59];
  row6 = [r61, r62, r63, r64, r65, r66, r67, r68, r69];
  row7 = [r71, r72, r73, r74, r75, r76, r77, r78, r79];
  row8 = [r81, r82, r83, r84, r85, r86, r87, r88, r89];
  row9 = [r91, r92, r93, r94, r95, r96, r97, r98, r99];
}

Checker.prototype.display = function () {
console.log(this.row1);
console.log(this.row2);
console.log(this.row3);
console.log(this.row4);
console.log(this.row5);
console.log(this.row6);
console.log(this.row7);
console.log(this.row8);
console.log(this.row9);
// console.log(row1);
// console.log(row2);
// console.log(row3);
// console.log(row4);
// console.log(row5);
// console.log(row6);
// console.log(row7);
// console.log(row8);
// console.log(row9);
};

Checker.prototype.rowCheck = function () {
  //debugger;
  var rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
  console.log(row1);
  for (var k = 0; k < 8; k ++) {
    for (var i = 0; i < 8; i++) {
      for (var j = i+1; j < 9; j++) {
        if (rows[k][i] === rows[k][j]) {
          console.log('found match in row ' + (k + 1) + ' @' + ' column ' + (j+1));
        } else {
          console.log('pass');
        }
      }
    }
  }
};

exports.checkerModule = Checker;
