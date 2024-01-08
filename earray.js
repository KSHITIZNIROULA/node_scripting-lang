    
function isEven(number) 
{
    return number % 2 === 0;
  }
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 numbersArray.forEach(function(number) {
    if (isEven(number)) 
    {
      console.log(number);
    }
  });
  