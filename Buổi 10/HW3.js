let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
  };


  let family = Object.create(myFamily);
  family.quantity = null;
  family.member = null;
  family.location = null;
  console.log(family)
