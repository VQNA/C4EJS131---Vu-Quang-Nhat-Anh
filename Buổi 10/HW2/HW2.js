let obj = {
    b: 2,
    a: 1,
    c: 3,
  };
  

  let output = []


  for (let key in obj){
    output.push(key.toUpperCase())
  }

let final_output = output.map(Number)
  console.log("[", output.join(", " ), "]")