const userInputString = prompt(
    "Please enter your desired frozen yogurt flavors separated by commas.",
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = userInputString.split(",");
  
  // Convert the array of strings into an array of flavors.
  const flavors = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const flavor = str;
    flavors.push(flavor);
  }

  console.table(flavors);
  