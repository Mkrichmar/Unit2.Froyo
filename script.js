const userInputString = prompt(
    "Please enter your desired frozen yogurt flavors separated by commas.",
    'vanilla,coffee,tart'
  );

  const flavors = {};
  
  const orderArray = userInputString.split(",");
  
  for (let i = 0; i < orderArray.length; i++) {
    const flavor = orderArray[i];
    if (flavors[flavor] === undefined) {
        flavors[flavor] = 0
    }
    flavors[flavor] = flavors[flavor] + 1
  };

  console.table(flavors);



