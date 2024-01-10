const userInputString = prompt(
    "Please enter your desired frozen yogurt flavors separated by commas.",
    'vanilla,coffee,tart'
  );

  const froyoOrder = {
    vanilla: 0,
    coffee: 0,
    tart: 0,
  }
  
  const orderArray = userInputString.split(",");
  
  const flavors = [];
  for (let i = 0; i < orderArray.length; i++) {
    const str = orderArray[i];
    const flavor = str;
    flavors.push(flavor);
  }




