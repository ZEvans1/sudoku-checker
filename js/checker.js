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
  this.row1 = [r11, r12, r13, r14, r15, r16, r17, r18, r19];
  this.row2 = [r21, r22, r23, r24, r25, r26, r27, r28, r29];
  this.row2 = [r31, r32, r33, r34, r35, r36, r37, r38, r39];
  this.row2 = [r41, r42, r43, r44, r45, r46, r47, r48, r49];
  this.row2 = [r51, r52, r53, r54, r55, r56, r57, r58, r59];
  this.row2 = [r61, r62, r63, r64, r65, r66, r67, r68, r69];
  this.row2 = [r71, r72, r73, r74, r75, r76, r77, r78, r79];
  this.row2 = [r81, r82, r83, r84, r85, r86, r87, r88, r89];
  this.row2 = [r91, r92, r93, r94, r95, r96, r97, r98, r99];
}

Checker.prototype.display = function () {
console.log(this.row1);
};
//
// Checker.prototype.validate = function () {
//
// };

exports.checkerModule = Checker;