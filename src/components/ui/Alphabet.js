var alphabet = [
  {
    id: 1,
    letter: "A",
    word: "Array",
    definition:
      "An array is a special variable, which can hold more than one value at a time. var fruit = ['Banana', 'Apple', 'Pear']",
    example: `
    Array Methods 

    - concat(): Join several arrays into one

    - indexOf(): Returns the first position at which a given element appears in an array

    - join(): Combine elements of an array into a single string and return the string

    - lastIndexOf(): Gives the last position at which a given element appears in an array`,
  },
  {
    id: 2,
    letter: "B",
    word: "Boolean",
    definition:
      "Boolean is a datatype that returns either of two values i.e. true or false. In JavaScript, Boolean is used as a function to get the value of a variable, object, conditions, expressions, etc. in terms of true or false.",
    example: `
      expression1 && expression2
// Returns true if both the expressions evaluate to true
 
expression3 || expression4
// Returns true if either one of the expression evaluates to true
 
!expression5
// Returns the opposite boolean value of the expression `,
  },
  {
    id: 3,
    letter: "C",
    word: "Concatenation",
    definition:
      "The same + operator you use for adding two numbers can be used to concatenate two strings.",
    example: `
     const str = 'Hello' + ' ' + 'World' || str; // 'Hello World'
     
     - The concat() method concatenates the string arguments to the calling string and returns a new string.

     const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
     `,
  },
  {
    id: 4,
    letter: "D",
    word: "Data types",
    definition: `A value in JavaScript is always of a certain type. For example, a string or a number. `,
    example: `
    var length = 16; // Number

      var lastName = 'Johnson';  // String 

      var x = {firstName:'John', lastName:'Doe'}; // Object; 
      
      There are eight basic data types in JavaScript. 1.Number 2.Boolean 3.String 4. Undefined 5.null 6.object 7.BigInt 8. Symbol `,
  },
  {
    id: 5,
    letter: "E",
    word: "Equality",
    definition:
      "== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.",
    example: `
    4 === "4" // will evaluate to 'false' as the left operand is of type 'number' while right operand is of type 'string'; 
    
    1 == '1' =>  true`,
  },
  {
    id: 6,
    letter: "F",
    word: "Functions",
    definition:
      "A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.It is like a reusable piece of code. Imagine , having 20 for loops ,and then having a single function to handle it all . To use a function, you must define it somewhere in the scope from which you wish to call it. A function definition (also called a function declaration) consists of the function keyword, followed by the name of the function, a list of arguments to the function, enclosed in parentheses and separated by commas, the JavaScript statements that define the function, enclosed in curly braces, { }.",
    example: `
    function greet(name) {
      return 'Hello' + name + '!';
    };`,
  },
  {
    id: 7,
    letter: "G",
    word: "Global Scope vs. Local Scope",
    definition: `Variables have either global or local scope. A global variable exists only once in a script, and is visible in every function. Modifications to it in one function are permanent and visible to all functions. ... A local variable, however, has a limited scope: it exists only within the block that it is declared in.`,
    example: `
    Global Scope = Starry Night Sky (everyone has access to see it, no matter where in the world.);
      
    Local Scope = Coronado Bridge (only you, or the people within your city, can see it.)`,
  },
  {
    id: 8,
    letter: "H",
    word: "Hoisting",
    definition:
      " The two ways of declaring functions produce different results. Declaring a function one way “hoists” it to the top of the call, and makes it available before it’s actually defined.",
    example: `
    hoistedFunction(); // Hello! I am defined immediately!
    
    notHoistedFunction(); // ReferenceError: notHoistedFunction is not defined
     
    function hoistedFunction () {
      console.log('Hello! I am defined immediately!');
    }
     
    var notHoistedFunction = function () {
      console.log('I am not defined immediately.');
    }`,
  },
  {
    id: 9,
    letter: "I",
    word: "If-Else Statements",
    definition:
      "It simply states that if this condition is true, do this, else do something else (or nothing). It occurs in varied forms.",
    example: `
    if (condition1) {
      statement1;
    } else if (condition2) {
      statement2;
    } else {
      statement3;
    }`,
  },
  {
    id: 10,
    letter: "J",
    word: "Javascript",
    definition:
      "JavaScript (or 'JS') is a programming language used most often for dynamic client-side scripts on webpages, but it is also often used on the server-side, using a runtime such as Node.js.",
    example: "no example",
  },
  {
    id: 11,
    letter: "K",
    word: "Keys",
    definition:
      "Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually.",
    example: `
    const object1 = {
      a: 'somestring',
      b: 42,
      c: false
    };
    
    console.log(Object.keys(object1));
    // expected output: Array ["a", "b", "c"]
    `,
  },
  {
    id: 12,
    letter: "L",
    word: "Loops",
    definition: `You use for loops, if you know how often you’ll loop. The most often used varName in loops is i.; You use while loops, if you don’t know how often you’ll loop.; You use do while loops, if you have to loop at least once, but if you don’t know how often.`,
    example: `
    for ([let i = startValue]; [i < endValue]; [i+=stepValue]) {
      // Loop code here
    }; 
    
    while (condition) {
      // Your code here
    }; let x = 0;

    do {
        console.log(x);  // Prints numbers from 0 to 4
        x++;
    } while (x < 5);
    `,
  },
  {
    id: 13,
    letter: "M",
    word: "Map & Filter",
    definition: `The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    
    The filter() method creates a new array with all elements that pass the test implemented by the provided function. `,
    example: `
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);
    
    console.log(map1);
    // expected output: Array [2, 8, 18, 32]; 
    
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);
    
    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"] `,
  },
  {
    id: 14,
    letter: "N",
    word: "Number Methods",
    definition: `Modulus % returns the remainder left after dividing the left hand side with the right hand side.; 
    Convert a number to a string; 
    Convert a string to a number;`,
    example: `
    14 % 9 // returns 5; 
    
    var num = 15;
    var n = num.toString(); 

    var str = '15'
    
    Number(string) // 15;  
    parseInt(string), 
    parseFloat(string)`,
  },
  {
    id: 15,
    letter: "O",
    word: "Objects",
    definition:
      "In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.",
    example: `
    {
      'property 1': value1,
      property2: value2,
      number: value3
    }`,
  },
  {
    id: 16,
    letter: "P",
    word: "Pop-Up boxes",
    definition:
      "ALERTS - Display an alert dialog with the specified message and an OK button. The alert dialog should be used for messages which do not require any response on the part of the user, other than the acknowledgment of the message.",
    example: "alert('Hello World')",
  },
  {
    id: 17,
    letter: "Q",
    word: "Query Selector",
    definition:
      "The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.",
    example: `
    Get the first element in the document with class="example" 
     
    - document.querySelector(".example");`,
  },
  {
    id: 18,
    letter: "R",
    word: "Rest Parameter & Spread Operator",
    definition: `The rest parameter syntax allows us to represent an indefinite number of arguments as an array. ;The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.
    `,
    example: `
    function f(a, b, ...theArgs) {
      // ...
    }; 
    
     array ex. [...iterableObj, '4', 'five', 6];`,
  },
  {
    id: 19,
    letter: "S",
    word: "Strings",
    definition: `Strings are text. They are denoted by surrounding text with either single or double quotes.`,
    example: `
    string.length = returns the length of the string.
    
    'my name'.toUpperCase(); // Returns 'MY NAME',

    'MY NAME'.toLowerCase(); // Returns 'my name'
 
.Replace() = 'original string'.replace('original', 'replaced'); // returns 'replaced string',
 
string.charAt(index) // index is an integer between 0 and 1 less than the length of the string. //'Hello World!'.charAt(0); // 'H'
`,
  },
  {
    id: 20,
    letter: "T",
    word: "Ternary Operator",
    definition:
      "The ternary operator is usually used as a shortcut for the if statement.",
    example: "SYNTAX: condition ? expr1 : expr2",
  },
  {
    id: 21,
    letter: "U",
    word: "User Interface",
    definition:
      "User interface JavaScript (or UI script) is the functionality that you add to a transformed page. User interface (UI) JavaScript includes: click handlers. swiping functionality. AJAX calls.",
    example: `
    User interface (UI) JavaScript includes:

    click handlers
    swiping functionality
    AJAX calls
    analytics tracking'`,
  },
  {
    id: 22,
    letter: "V",
    word: "Variables",
    definition:
      "A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.",
    example: `var, const, let  
      
      var = the most common variable. Can be reassigned but only accessed within a function. Variables defined with var move to the top when code is executed. 
      
      const =  Cannot be reassigned and not accessible before they appear within the code. 
       
      let = Similar to const, however, let variable can be reassigned but not re-declared.`,
  },
  {
    id: 23,
    letter: "W",
    word: "Web APIs",
    definition:
      "An Application Program Interface (API) is a contract for data interaction. It lets applications ask specific questions, and provides answers when it has them. It also allows certain data to be submitted, which it can store for others to question.",
    example: `
      What Is an Example of an API? When you use an application on your mobile phone, the application connects to the Internet and sends data to a server. The server then retrieves that data, interprets it, performs the necessary actions and sends it back to your phone.`,
  },
  {
    id: 24,
    letter: "X",
    word: "XHR",
    definition:
      "XMLHttpRequest is an API that provides client functionality for transferring data between a client and a server. It provides an easy way to retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just a part of the page without disrupting what the user is doing.",
    example: `
    When you type a character in the input field below, an XMLHttpRequest is sent to the server, and some name suggestions are returned (from the server): 
      
      Example - typing the first letter of your name, and name suggestions pop up from the server for you to select.`,
  },
  {
    id: 25,
    letter: "Y",
    word: "Year, Date & Time Methods",
    definition: "getDate() || getDay() || getFullYear() || getHours()",
    example: `
    The getDate() = method returns the day of the month for the specified date according to local time.
    
    The getDay() method = returns the day of the week for the specified date according to local time, where 0 represents Sunday.
    
    The getFullYear() method = returns the year of the specified date according to local time.
    
    The getHours() method = returns the hour for the specified date, according to local time.`,
  },
  {
    id: 26,
    letter: "Z",
    word: "Z-Index",
    definition:
      "The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one. NOTE: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky).",
    example: `
    img {
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: -1;
    }`,
  },
];

export default alphabet;
