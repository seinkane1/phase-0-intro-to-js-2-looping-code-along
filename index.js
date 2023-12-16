function countDown(startingNumber) {
if (typeof startingNumber !== 'number' || startingNumber < 0 || !Number.isInteger(startingNumber)) {
      console.error('Please provide a valid positive integer for counting down.');
      return;
    }
   while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  
  
``