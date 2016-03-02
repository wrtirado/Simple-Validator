// JS3: Simple Validator
// Resources
// Mozilla Javascript Reference - Good general Javascript reference containing
// information about specific javascript language constructs, keywords, types, etc.)
// Requirements
//
// Create an html file and js file and add a script tag to include the js file as
// before. (Getting familiar? Good!)
//
// Prompt the user to enter their phone number with dashes. (You might want to
//   assure them that it won’t be used for SPAM. Your site probably looks pretty
//   sketchy right now, being a blank page with a prompt for their phone number.
//   I know I wouldn’t enter my phone number...)
//
// ? Tip: You can report simple boolean evaluations of user input by combining boolean operators.
// ? e.g. alert(userInput.charAt(0) === 'B' && userInput.length === 7) will display
// true if the user enters 'Boulder' or 'Baghdad'.
//
// Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth characters must be dashes.
//
// Following the same procedure as #2 and #3 above to prompt and validate the following fields:
//
// birth date
// must follow the format xx/xx/xx
// postal code
// must follow the format xxxxx OR xxxxx-xxxx
// state abbreviation
// must be two characters
// must be all caps
// married
// must be yes or no
// may be any capitalization: YES, Yes, yes
//
// ? Tip: While the built-in isNaN method works in most cases to test if a value
// is a number, it fails on some simple inputs like whitespace. The following
// function is a more robust implementation for checking if a string contains a
// valid number: var isNumber = function(n) { return !isNaN(parseFloat(n)) &&
// isFinite(n); };
//
// Bonus
// Find someone else who has completed this exercise and try to "break" each other's'
// code. Clone the solution from their github repo and run their application locally.
// Without looking at their code, try entering incorrect values and getting their
// program to report that they are valid (or inversely, try entering correct values
//   and getting their program to report that they are invalid). If you find a bug,
//   add an issue to the issue tracker on their github repo. (Every github repo has
//     its own issue tracker, e.g. github.com/refactoru/student-sample-code/issues.)
//
//
//     Prompt the user to enter their phone number with dashes. (You might want to
//       assure them that it won’t be used for SPAM. Your site probably looks pretty
//       sketchy right now, being a blank page with a prompt for their phone number.
//       I know I wouldn’t enter my phone number...)
var isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
// validating the number
var numberValidator = function (){

  var isValid = false

  while (isValid === false) {
    var phoneNumber = prompt ("Enter your 10 digit phone number with a dash after \nthe third and sixth numbers. Don't worry, we will \nnot use this snumber for spam")
    var numberNoDash = phoneNumber.split('-').join("")
    numberNoDash = parseInt(numberNoDash)
    if (phoneNumber.length != 12){
      isValid = false
    }
    else if (phoneNumber[3] != "-" || phoneNumber[7] != "-") {
      isValid = false
    }
    else if ( !isNumber(numberNoDash)) {
      isValid = false
    }
    else { isValid = true }
  }
// validating the birthday
  var bdayIsValid = false

  while (bdayIsValid === false){
    var birthDay = prompt ("Please enter your birth date. \n Example: mm/dd/yy")
    // console.log(birthDay)
    var bDayNoSlash = birthDay.split('/').join("")
    bDayNoSlash = parseInt(bDayNoSlash)

          // console.log(birthDay.length);

    if ( birthDay.length != 8 ) {
      bdayIsValid = false
          // console.log("Lenth check")
    }
    else if ( birthDay[2] != "/" || birthDay[5] != "/" ){
      bdayIsValid = false
          // console.log("slash check");
    }
    else if ( !isNumber(bDayNoSlash) ){
      bdayIsValid = false
          // console.log("Is a number");
    }
    else { bdayIsValid = true }
  }
// validating the postal code
  var postalCodeIsValid = false

  while ( postalCodeIsValid === false ) {
    var postalCode = prompt ("Please enter your postal code. \nExample: 12345 or 12345-1234")


    if (postalCode.length < 5 || postalCode.length > 10 || postalCode.length === 6 || postalCode.length === 7 || postalCode.length === 8 || postalCode.length === 9) {
      postalCodeIsValid = false
    }
    else { postalCodeIsValid = true }

  }

  var stateAbbrevIsValid = false

  while ( stateAbbrevIsValid === false ) {
    var stateAbbrev = prompt ("Please enter your state's two letter abbreviation \n in all caps. \n Example: CO").toUpperCase()
    if ( stateAbbrev.length != 2 ) {
      stateAbbrevIsValid = false
    }
    else if ( isNumber(stateAbbrev) ){
      stateAbbrevIsValid = false
    }
    else {stateAbbrevIsValid = true}
  }

  var marriedIsValid = false

  while ( marriedIsValid === false ) {
    var marriedAnswer = prompt ("Are you married? \nYes or No?").toUpperCase()
    if ( marriedAnswer != 'YES' && marriedAnswer != 'NO' ) {
      marriedIsValid = false
    }
    else { marriedIsValid = true }
  }
  alert ("You are all signed up!!!")
}
numberValidator()
