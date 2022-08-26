let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

// Method 1:
// for (let key in obj["bar"][3]){
//    obj["bar"][3][key] = 606
//    break

// }
// console.log(obj["bar"][3])


// Method 2:
// obj["bar"][3]["xyz"] = 606
// console.log(obj["bar"][3])