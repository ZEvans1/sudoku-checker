var Checker = require('./../js/checker.js').checkerModule;

$(document).ready(function() {
  $('#sudoku-form').submit(function(event) {
    event.preventDefault();
    var r11 = parseInt($('#r11').val());
    var r12 = parseInt($('#r12').val());
    var r13 = parseInt($('#r13').val());
    var r14 = parseInt($('#r14').val());
    var r15 = parseInt($('#r15').val());
    var r16 = parseInt($('#r16').val());
    var r17 = parseInt($('#r17').val());
    var r18 = parseInt($('#r18').val());
    var r19 = parseInt($('#r19').val());
    //
    var r21 = parseInt($('#r21').val());
    var r22 = parseInt($('#r22').val());
    var r23 = parseInt($('#r23').val());
    var r24 = parseInt($('#r24').val());
    var r25 = parseInt($('#r25').val());
    var r26 = parseInt($('#r26').val());
    var r27 = parseInt($('#r27').val());
    var r28 = parseInt($('#r28').val());
    var r29 = parseInt($('#r29').val());
    //
    var r31 = parseInt($('#r31').val());
    var r32 = parseInt($('#r32').val());
    var r33 = parseInt($('#r33').val());
    var r34 = parseInt($('#r34').val());
    var r35 = parseInt($('#r35').val());
    var r36 = parseInt($('#r36').val());
    var r37 = parseInt($('#r37').val());
    var r38 = parseInt($('#r38').val());
    var r39 = parseInt($('#r39').val());
    //
    var r41 = parseInt($('#r41').val());
    var r42 = parseInt($('#r42').val());
    var r43 = parseInt($('#r43').val());
    var r44 = parseInt($('#r44').val());
    var r45 = parseInt($('#r45').val());
    var r46 = parseInt($('#r46').val());
    var r47 = parseInt($('#r47').val());
    var r48 = parseInt($('#r48').val());
    var r49 = parseInt($('#r49').val());
    //
    var r51 = parseInt($('#r51').val());
    var r52 = parseInt($('#r52').val());
    var r53 = parseInt($('#r53').val());
    var r54 = parseInt($('#r54').val());
    var r55 = parseInt($('#r55').val());
    var r56 = parseInt($('#r56').val());
    var r57 = parseInt($('#r57').val());
    var r58 = parseInt($('#r58').val());
    var r59 = parseInt($('#r59').val());
    //
    var r61 = parseInt($('#r61').val());
    var r62 = parseInt($('#r62').val());
    var r63 = parseInt($('#r63').val());
    var r64 = parseInt($('#r64').val());
    var r65 = parseInt($('#r65').val());
    var r66 = parseInt($('#r66').val());
    var r67 = parseInt($('#r67').val());
    var r68 = parseInt($('#r68').val());
    var r69 = parseInt($('#r69').val());
    //
    var r71 = parseInt($('#r71').val());
    var r72 = parseInt($('#r72').val());
    var r73 = parseInt($('#r73').val());
    var r74 = parseInt($('#r74').val());
    var r75 = parseInt($('#r75').val());
    var r76 = parseInt($('#r76').val());
    var r77 = parseInt($('#r77').val());
    var r78 = parseInt($('#r78').val());
    var r79 = parseInt($('#r79').val());
    //
    var r81 = parseInt($('#r81').val());
    var r82 = parseInt($('#r82').val());
    var r83 = parseInt($('#r83').val());
    var r84 = parseInt($('#r84').val());
    var r85 = parseInt($('#r85').val());
    var r86 = parseInt($('#r86').val());
    var r87 = parseInt($('#r87').val());
    var r88 = parseInt($('#r88').val());
    var r89 = parseInt($('#r89').val());
    //
    var r91 = parseInt($('#r91').val());
    var r92 = parseInt($('#r92').val());
    var r93 = parseInt($('#r93').val());
    var r94 = parseInt($('#r94').val());
    var r95 = parseInt($('#r95').val());
    var r96 = parseInt($('#r96').val());
    var r97 = parseInt($('#r97').val());
    var r98 = parseInt($('#r98').val());
    var r99 = parseInt($('#r99').val());

    console.log(r99);

    var solvedSudoku = new Checker(r11, r12, r13, r14, r15, r16, r17, r18, r19,
    r21, r22, r23, r24, r25, r26, r27, r28, r29,
    r31, r32, r33, r34, r35, r36, r37, r38, r39,
    r41, r42, r43, r44, r45, r46, r47, r48, r49,
    r51, r52, r53, r54, r55, r56, r57, r58, r59,
    r61, r62, r63, r64, r65, r66, r67, r68, r69,
    r71, r72, r73, r74, r75, r76, r77, r78, r79,
    r81, r82, r83, r84, r85, r86, r87, r88, r89,
    r91, r92, r93, r94, r95, r96, r97, r98, r99);
    solvedSudoku.rowCheck();
  })
})
