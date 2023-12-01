
function consoleImage(imageArr) {
  arr = [];
  for (let i = 0; i < 2 * 24; i++) {
    arr.push([]);
    for (let j = 0; j < 40; j++) {
      arr[i].push({
        color: `rgb(${imageArr[j][i].r},${imageArr[j][i].g},${imageArr[j][i].b})`,
      });
    }
  }

//   for (let a = 0; a < Math.PI * 12; a += Math.PI / 50) {
//     x = 24 + Math.cos(a) * a * 0.5;
//     y = 20 + Math.sin(a) * a * 0.44;
//     if (
//       Math.floor(x) < 48 &&
//       Math.floor(x) > -1 &&
//       Math.floor(y) < 40 &&
//       Math.floor(y) > -1
//     ) {
//       arr[Math.floor(x)][Math.floor(y)].color = "red";
//     }
//   }

  let s = "0px 0px 0px 0px black";
  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 40; y++) {
      s += `,${Math.floor(-117 + x * 2.5)}px ${Math.floor(
        Math.floor(-73.25 + y * 2.5)
      )}px 0px -21px rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`;
    }
  }

  let ss = [];

  for (let i = 0; i < 24; i++) {
    let s3 = "0px 0px 0px 0px black";
    for (let x = 0; x < 2; x++) {
      for (let y = 0; y < 40; y++) {
        s3 += `,${Math.floor(-117 + x * 2.5)}px ${Math.floor(
          Math.floor(-73.25 + y * 2.5)
        )}px 0px -21px ${arr[x === 0 ? i * 2 : i * 2 + 1][y].color}`;
      }
    }
    ss.push({ text: s3 });
  }

  console.log(
    "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      "." +
      "%c" +
      ".",
    "box-shadow:" +
      ss[0].text +
      ";background-color: rgba(0,0,0,0); margin-left: 100px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[1].text +
      ";background-color: rgba(0,0,0,0); margin-left: -39.5px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[2].text +
      ";background-color: rgba(0,0,0,0); margin-left: -39.5px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[3].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[4].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[5].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[6].text +
      ";background-color: rgba(0,0,0,0); margin-left: -39.5px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[7].text +
      ";background-color: rgba(0,0,0,0); margin-left: -39.5px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[8].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[9].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[10].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[11].text +
      ";background-color: rgba(0,0,0,0); margin-left: -39.5px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[12].text +
      ";background-color: rgba(0,0,0,0); margin-left: -39.5px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[13].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[14].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[15].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[16].text +
      ";background-color: rgba(0,0,0,0); margin-left: -39.5px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[17].text +
      ";background-color: rgba(0,0,0,0); margin-left: -39.5px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[18].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[19].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[20].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[21].text +
      ";background-color: rgba(0,0,0,0); margin-left: -39.5px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[22].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;",
    "box-shadow:" +
      ss[23].text +
      ";background-color: rgba(0,0,0,0); margin-left: -40px; color: rgba(255,0,0,0); font-size: 80px;"
  );
}




// let ss = '"'
// let ss2 = ''
// for (let x = 0; x < 20; x++){
//     for (let y = 0; y < 60; y++) {
//         ss += "%c.";
//         ss2+=`,"background-color: rgb(${Math.random() * 255},${
//           Math.random() * 255
//         },${Math.random() * 255}); font-size: 8px; color: rgba(0,0,0,0)"`
//     }
//     ss += "\\n";
// }

// let az = `console.log(${ss + '"'}${ss2})`

// eval(az)