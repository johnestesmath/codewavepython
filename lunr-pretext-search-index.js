var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-pythonbasics",
  "level": "1",
  "url": "sec-pythonbasics.html",
  "type": "Section",
  "number": "1.1",
  "title": "Python Basics: Variables and Printing",
  "body": " Python Basics: Variables and Printing   Your First Python Program  Before you can turn the world upside down with coding, you have to start somewhere. We will start where most programmers start... simply saying \"hi\" to the world.   Excellent! Good job. We'll explain how this works    Variables and Printing  A variable is like a container that stores information. You can think of it like a labeled box that holds a value. For example:     In this example:    name is a variable that stores a string: Tonya      age is a variable that stores a number: 15       About Me   Write a short \"About Me\" using variables and print() .        A Few Tips on Variable Naming There are a few rules when naming variables, and ignoring them can either cause code errors or make you code difficult to read. Here are a few guidelines:   Variable names can only contain letters, numbers, and underscores. However, variables CANNOT begin with a number. Valid: _dog12 , monkeyAndHisBanana , ti56_xd_5 Invalid: 48pythonRocker     Variable names CANNOT include spaces. Valid: orange_Cat Invalid: orange Cat     Variable names should be short, but be sure to give a good descriptive name. For example, pet_name is better than p_n or the_name_of_my_pet .    Variables are case sensitive: red_rover , Red_Rover , and RED_rOvEr are all different variable names.       Using the print() function  We have already used the print() function, but what is it? Python’s print() function shows information on the screen. Revelutionary!  With the print() function, we can display a message (called a string, which we will get to soon), a variable, mathematical calculations (soon!), and a combination of such things.     You can also print variables with text.     Notice how a string like “My name is” and the variable interact within a print statement. Recall that the variable name is a label for something else, and Python recognizes that within the print() function.    Try It Yourself: Printing   Create a variable called favorite_color and set it to your favorite color. Then print it.       Create three variables: name, grade, and school. Assign values to them, then use print() to write a short introduction about yourself.  Example output: Hi, my name is Sam. I'm in 10th grade at Lincoln High School .       "
},
{
  "id": "act-print-variables",
  "level": "2",
  "url": "sec-pythonbasics.html#act-print-variables",
  "type": "Activity",
  "number": "1.1.1",
  "title": "About Me.",
  "body": " About Me   Write a short \"About Me\" using variables and print() .      "
},
{
  "id": "subsec-variables-7",
  "level": "2",
  "url": "sec-pythonbasics.html#subsec-variables-7",
  "type": "Remark",
  "number": "1.1.1",
  "title": "A Few Tips on Variable Naming.",
  "body": " A Few Tips on Variable Naming There are a few rules when naming variables, and ignoring them can either cause code errors or make you code difficult to read. Here are a few guidelines:   Variable names can only contain letters, numbers, and underscores. However, variables CANNOT begin with a number. Valid: _dog12 , monkeyAndHisBanana , ti56_xd_5 Invalid: 48pythonRocker     Variable names CANNOT include spaces. Valid: orange_Cat Invalid: orange Cat     Variable names should be short, but be sure to give a good descriptive name. For example, pet_name is better than p_n or the_name_of_my_pet .    Variables are case sensitive: red_rover , Red_Rover , and RED_rOvEr are all different variable names.    "
},
{
  "id": "subsec-tiy-print-2",
  "level": "2",
  "url": "sec-pythonbasics.html#subsec-tiy-print-2",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": " Create a variable called favorite_color and set it to your favorite color. Then print it.     "
},
{
  "id": "subsec-tiy-print-3",
  "level": "2",
  "url": "sec-pythonbasics.html#subsec-tiy-print-3",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": " Create three variables: name, grade, and school. Assign values to them, then use print() to write a short introduction about yourself.  Example output: Hi, my name is Sam. I'm in 10th grade at Lincoln High School .     "
},
{
  "id": "sec-strings",
  "level": "1",
  "url": "sec-strings.html",
  "type": "Section",
  "number": "1.2",
  "title": "Strings Intro",
  "body": " Strings Intro   What is a String?  We have already given examples of strings, like “My name is” and “Hello World”, but what is a string exactly? Simply stated, a string is a sequence of characters, and you can create a string by putting text inside quotes — either single (') or double (\").  As we saw earlier, you can assign a string to a variable and use it later. For example   Python has a lot of built-in tools to handle strings. We can build new strings from existing strings, decide how long a string is, and all other sorts of things.    Concatenation  You can add or join strings together (called concatenation) using the + operator. For example:   Note that we had to include an empty space after first_name . Try removing the empty space and see what happens.   Print a list of groceries by setting six different variables to food items and concatenating your items into a list.      Strings and Numbers  Numbers play a big role in coding, and we will spend more time on numbers shortly. In the meantime, we will just look at how numbers and strings interact.   You should receive an error! Why? Because we are trying to concatenate two different objects: one string and one number. Python does not know how to do that! However, we can convert the number to a string using str() :    In Python’s mind, 30 and ‘30’ are two different things. Understanding the difference is very important to an aspiring programmer.     String Length  Sometimes we may need to know how long a string is. How many characters are in the sentence “How many characters are in this sentence?” Use the len() function to find out how many characters are in a string.   Note that we are also counting the blank spaces and punctuation marks in this sentence. If we wanted to know how many letters this sentence contained, then we would need a few more tools that we will learn later on.    Accessing Characters  What is the seventh character of the sentence “What is the seventh character of this sentence?” You can access individual characters in a string using indexing. A character’s index refers is the position number of that character in a string.  For example, for the string text = \"Hello\" , the character of index 1 is e. We start the count at 0.     String Methods  Python is full of built-in functions we call methods. Several methods are specifically for strings and can be used with dot (.) notation:   We will spend more time learning how to format strings in a future lesson.    Try It Yourself: String Basics  Try the following exercises. Don't be afraid of making errors. That's how we learn.   Complete the following.   Create a string variable that holds your favorite quote.    Print the length of the quote.    Replace one word in the quote using .replace() .    Print the quote in ALL CAPS.        "
},
{
  "id": "subsec-concatenation-4",
  "level": "2",
  "url": "sec-strings.html#subsec-concatenation-4",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "",
  "body": " Print a list of groceries by setting six different variables to food items and concatenating your items into a list.   "
},
{
  "id": "subsec-string-and-numbs-4",
  "level": "2",
  "url": "sec-strings.html#subsec-string-and-numbs-4",
  "type": "Remark",
  "number": "1.2.2",
  "title": "",
  "body": " In Python’s mind, 30 and ‘30’ are two different things. Understanding the difference is very important to an aspiring programmer.  "
},
{
  "id": "subsec-tiy-stringbasics-3",
  "level": "2",
  "url": "sec-strings.html#subsec-tiy-stringbasics-3",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "",
  "body": " Complete the following.   Create a string variable that holds your favorite quote.    Print the length of the quote.    Replace one word in the quote using .replace() .    Print the quote in ALL CAPS.      "
},
{
  "id": "sec-basics-numbers",
  "level": "1",
  "url": "sec-basics-numbers.html",
  "type": "Section",
  "number": "1.3",
  "title": "Numbers and Math in Python",
  "body": " Numbers and Math in Python  By the end of this lesson, you’ll be able to:   Work with numbers in Python (integers and decimals).    Use basic math operators to do calculations.    Write expressions using variables and numbers.      Types of Numbers in Python  Python has two different number structures: integers and floats.   Integers – whole numbers like 5 , -12 , or 0     Floats – decimal numbers like 3.14 or 2.0         It is important to remember if your application needs an integer or a float. Python does not think of 4 and 4.0 as the same thing!    Math Operators  Like a calculator, Python uses common symbols to do math:   Common Arithmetic Operators    Operator  Symbol  Example  Result    Addition  +      Subtraction  -      Multiplication  \\(\\times\\) or \\(\\cdot\\) or *  or or 2 * 6     Division   \/  or 15 \/ 3     Exponentiation  **   2 ** 3         In addition to these common operators, Python has a couple of additional not-so-common-yet-common operators called Modulus and Floor Division.   Common Arithmetic Operators    Operator  Symbol  Example  Result    Modulus  %      Floor Division   \/ \/       The Modulus operator gives you the remainder after division. For example, 13% 3 is 1 . Floor Division give you the quotient, or in other words floor division rounds down to the nearest integer after dividing. For example, 13 \/\/ 3 is 4 .    Try It Yourself: Math Operators   Write code that calculates and prints:   the sum of 12 and 8    the product of 7 and 5    the result of 15 divided by 4   Also print what type (integer or float) of each of the results.       Write code that calculates and prints:   the remainder when 82 is divided by 7.    the quotient when 1036 is divded by 9.           Variables and Math  You can combine variables and numbers:   You can even update variables:   We can even short-cut the previous example with count += 1.     Try It Yourself: Math and Variables    Create a simple shopping calculation.   Try making your own example with different numbers!     Write a small “math quiz” program. This example includes a few things we have not yet seen that we will cover in more detail later.   Can you adjust the code to make your own quiz using subtraction, multiplication, or division?   We will cover these concepts in more detail later, but let’s point out what we haven’t seen before.   The input() function, which we will cover in more detail later. However, input() allows a user to interact with a program. In this case, the user types in a number.    Question: Why do we use int( ) around the input() function? Answer: Whatever the user types is considered a string. The int() function converts the string to an integer.    What is the if and else stuff? If-else structures are a way we can introduce decision making into a program. In this case, if the user gives the correct answer, we congratulate them. If they give us the wrong answer (else), we correct them    Notice how we tell if someone gave use the correct answer answer == num1 + num2 . The double equals, == , compares answer to num1 + num2 . Python decides if this is true or false, and makes a decision based upon that truth status. We call these true-false decision Booleans, and we will discuss them in detail later.      AI Connections  We just saw some code that had elements we have not talked about yet. Some of it may have been confusing. A great use of AI is getting help understanding how the code works.  As an example, visit ChatGPT , the popular AI tool provided by OpenAI. Once there, ask ChatGPT to explain the following code line by line.   # Get three integers from the user start = int(input(\"Enter the first integer (start of range): \")) end = int(input(\"Enter the second integer (end of range): \")) adder = int(input(\"Enter the third integer (number to add): \")) # For loop that goes from start to end (inclusive) for i in range(start, end + 1): result = i + adder print(f\"{i} + {adder} = {result}\")     "
},
{
  "id": "subsec-math-ops-3",
  "level": "2",
  "url": "sec-basics-numbers.html#subsec-math-ops-3",
  "type": "Table",
  "number": "1.3.1",
  "title": "Common Arithmetic Operators",
  "body": " Common Arithmetic Operators    Operator  Symbol  Example  Result    Addition  +      Subtraction  -      Multiplication  \\(\\times\\) or \\(\\cdot\\) or *  or or 2 * 6     Division   \/  or 15 \/ 3     Exponentiation  **   2 ** 3     "
},
{
  "id": "subsec-math-ops-6",
  "level": "2",
  "url": "sec-basics-numbers.html#subsec-math-ops-6",
  "type": "Table",
  "number": "1.3.2",
  "title": "Common Arithmetic Operators",
  "body": " Common Arithmetic Operators    Operator  Symbol  Example  Result    Modulus  %      Floor Division   \/ \/      "
},
{
  "id": "subsec-tiy-numops-2",
  "level": "2",
  "url": "sec-basics-numbers.html#subsec-tiy-numops-2",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "",
  "body": " Write code that calculates and prints:   the sum of 12 and 8    the product of 7 and 5    the result of 15 divided by 4   Also print what type (integer or float) of each of the results.     "
},
{
  "id": "subsec-tiy-numops-3",
  "level": "2",
  "url": "sec-basics-numbers.html#subsec-tiy-numops-3",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": " Write code that calculates and prints:   the remainder when 82 is divided by 7.    the quotient when 1036 is divded by 9.        "
},
{
  "id": "sec-basics-numbers-7-2",
  "level": "2",
  "url": "sec-basics-numbers.html#sec-basics-numbers-7-2",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  Create a simple shopping calculation.   Try making your own example with different numbers!   "
},
{
  "id": "sec-basics-numbers-7-3",
  "level": "2",
  "url": "sec-basics-numbers.html#sec-basics-numbers-7-3",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": " Write a small “math quiz” program. This example includes a few things we have not yet seen that we will cover in more detail later.   Can you adjust the code to make your own quiz using subtraction, multiplication, or division?  "
},
{
  "id": "sec-basics-numbers-7-4",
  "level": "2",
  "url": "sec-basics-numbers.html#sec-basics-numbers-7-4",
  "type": "Remark",
  "number": "1.3.7",
  "title": "",
  "body": "We will cover these concepts in more detail later, but let’s point out what we haven’t seen before.   The input() function, which we will cover in more detail later. However, input() allows a user to interact with a program. In this case, the user types in a number.    Question: Why do we use int( ) around the input() function? Answer: Whatever the user types is considered a string. The int() function converts the string to an integer.    What is the if and else stuff? If-else structures are a way we can introduce decision making into a program. In this case, if the user gives the correct answer, we congratulate them. If they give us the wrong answer (else), we correct them    Notice how we tell if someone gave use the correct answer answer == num1 + num2 . The double equals, == , compares answer to num1 + num2 . Python decides if this is true or false, and makes a decision based upon that truth status. We call these true-false decision Booleans, and we will discuss them in detail later.    "
},
{
  "id": "sec-basics-numbers-7-5",
  "level": "2",
  "url": "sec-basics-numbers.html#sec-basics-numbers-7-5",
  "type": "Activity",
  "number": "1.3.1",
  "title": "AI Connections.",
  "body": " AI Connections  We just saw some code that had elements we have not talked about yet. Some of it may have been confusing. A great use of AI is getting help understanding how the code works.  As an example, visit ChatGPT , the popular AI tool provided by OpenAI. Once there, ask ChatGPT to explain the following code line by line.   # Get three integers from the user start = int(input(\"Enter the first integer (start of range): \")) end = int(input(\"Enter the second integer (end of range): \")) adder = int(input(\"Enter the third integer (number to add): \")) # For loop that goes from start to end (inclusive) for i in range(start, end + 1): result = i + adder print(f\"{i} + {adder} = {result}\")   "
},
{
  "id": "sec-basics-projects",
  "level": "1",
  "url": "sec-basics-projects.html",
  "type": "Section",
  "number": "2.1",
  "title": "Mini Project: Mad-libs",
  "body": " Mini Project: Mad-libs  In this project, we will try to combine some of the things we have learned in this chapter. It's okay to make mistakes. Break some eggs! This is how we learn.  Mad-libs has been a popular word game for decades! In this game, people select words to fill in a story. Usually, the words are out of context, and the stories are funny. For example:  “One day, a [adjective] [noun] decided to [verb] through the neighborhood. Everyone stopped and stared, but no one could believe their eyes. It was the start of something truly unforgettable.”  Make your own mad-libs story with at least seven blanks (adjectives, nouns, verbs, adverbs, expressions, proper names, etc.). Ask a user to input the different blanks (stored as variables), and then print the story with the user’s selected words.  We recommend   declaring your variables as inputs. For example adjective1 = input(\"Give me an adjective: \") ,    write your story with an f-string. For example, my_story = f'''This is an {adjective1} story.''' ,    print your story with print(my_story) .     To complete this project, vist Online-Python . Once complete, save the file and share with your instructor.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
