// Chapter: 21-25

                  // (Q:1)

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");    
// var fullName = firstName +" "+ lastName;

// alert ("Hello, " + fullName + "!");

                     //(Q:2)

// var favMobile = prompt ("Enter your favorite mobile phone model:");
// var lengthOfString = favMobile.length;
// var length = prompt("Length of string:");
// document.write ("My favorite phone is: " + favMobile + "<br>");
// document.write ("Lenght of string: " + length + "<br><br>");

                        // (Q:3)

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index + "<br><br>");

                            //(Q:4)

// var word = "Hello World";
// var index = word.lastIndexOf('l');
// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + index + "<br><br>");

                       //(Q:5)

// var word = "Pakistani";
// var char = word.indexOf(3);
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + index + "<br><br>");

                          // (Q:6)

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");    
// var fullName = firstName.concat(" ", lastName);

// alert ("Hello, ".concat(fullName, "!"));

                  // (Q:7)

// var city = "karachi";
// var newCity = city.replace("karachi", "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity + "<br><br>");

                // (Q:8)

// var message = "sara and amna are best friends. They play game and ludo together.";
// var newMessage = message.replace(/and/g, "&");
// document.write(newMessage);

                   // (Q:9)

// var str = "472";
// var num = Number(str);
// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof(str) + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof(num) + "<br><br>");

                    //(Q:10)

// var userInput = prompt("Enter some text:");
// var upperCaseInput = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + upperCaseInput + "<br><br>");

                // (Q:11)

// var userInput = prompt("Enter some text:");
// var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCaseInput + "<br><br>");

                    // (Q:12)

// var num = 35.36;
// var str = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + str + "<br><br>");

                  //(Q:13)

// var username = prompt("Enter your username:");
// var invalidChars = ["@", ".", ",", "!"];
// var isValid = true;
// for (var i = 0; i < invalidChars.length; i++) {
//     if (username.indexOf(invalidChars[i]) !== -1) {
//         isValid = false;
//         break;
//     }
// }
// if (!isValid) {
//     alert("Please enter a valid username without special characters (@, ., ,, !).");
// } else {
//     alert("Username is valid.");
// }

                         //(Q:14)

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }
// if (!found) {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }

                   // (Q:15)

// var password = prompt("Enter your password:");
// var isValid = true;
// if (password.length < 6) {
//     isValid = false;
// }
// if (!isNaN(password.charAt(0))) {
//     isValid = false;
// }
// for (var i = 0; i < password.length; i++) {
//     var charCode = password.charCodeAt(i);
//     if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
//         isValid = false;
//         break;
//     }
// }
// if (!isValid) {
//     alert("Invalid password. Password must be at least 6 characters long, cannot start with a number, and must contain only letters and numbers.");
// } else {
//     alert("Password is valid.");
// }
                     // (Q:16)

// var university = "University of Karachi";
// var chars = university.split('');
// for (var i = 0; i < chars.length; i++) {
//     document.write(chars[i] + "<br>");
// }

                  // (Q:17)

// var userInput = prompt("Enter some text:");
// var lastChar = userInput.charAt(userInput.length - 1);
// document.write("User input: " + userInput + "<br>");
// document.write("Last character of input: " + lastChar + "<br><br>");

                // (Q:18)

// var str = "The quick brown fox jumps over the lazy dog";
// var count = (str.toLowerCase().match(/the/g) || []).length;
// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of the word 'the'.<br><br>");