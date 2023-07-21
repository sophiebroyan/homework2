//1. Given a string. Check whether the string is palindrome or not.
function palindrome(string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[string.length - i - 1]) {
        return 'no';
      }
    }
    return 'yes';
  }
  console.log(palindrome(''));
  

//2. Given a string and symbols. Change first symbol by the second one in the string.
function replace(text, str1, str2) {
    let result = '';
    for (let i in text) {
      if (text[i] === str1) {
        result += str2;
      } else {
        result += text[i];
      }
    }
    console.log(result);
  }
  replace();
  

//3. Print the following number pattern (write a function)
function pattern(size, str) {
    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= i; j++) {
        str += j;
      }
      str += '\n';
    }
    for (let i = 1; i <= size - 1; i++) {
      for (let j = 1; j <= size - i; j++) {
        str += j;
      }
      str += "\n";
    }
    console.log(str);
  }
  
  pattern();
  
  
//4. Print following pattern (write a function)

  function pattern(size) {
    for (let i = 0; i < size; i++) {
      let string = '';
      for (let j = 0; j < size; j++) {
        if (i === j) {
          string += '  *';
        } else {
          string += '      ';
        }
      }
      console.log(string)
      console.log(' ');
    }
  }
  pattern();
  
//5. Print following pattern (write a function)
  function patternX(number) {
    for (let i = 0; i <= number; i++) {
      let string = '';
      for (let j = 0; j <= number; j++) {
        if (i === j || i + j === number) {
          string += '  *';
        } else {
          string += '     ';
        }
      }
      console.log(string);
      console.log(' ');
    }
  }
  patternX();
  

//6. Print following pattern (write a function)


function pattern(rows, columns) {
    for (let i = 0; i < rows; i++) {
      let string = '';
      for (let j = 0; j < columns; j++) {
        string += '*';
      }
      console.log(string);
      console.log(' ');
    }
  }
  pattern();