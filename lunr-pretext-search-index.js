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
  "id": "ch-strings-3",
  "level": "1",
  "url": "ch-strings-3.html",
  "type": "Section",
  "number": "2.1",
  "title": "What is a String?",
  "body": " What is a String?  We already talked about strings. Remember that a string is a sequence of characters. You can think of a string as any text inside quotes. As long as a statement has quotes ' ' , double quotes \" \" , or even triple quotes ( ''' ''' or \"\"\" \"\"\" ), Python will recognize it as a string.    Reflection   How could we store \"I'm eating Bobby's pizza.\"?    We could store just as is written! message = \"I'm eating Bobby's pizza.\"      Multi-line Strings  Sometimes we wish to include a lot of text as one string instead of many smaller strings. You can write strings that span multiple lines using triple quotes ( ''' or \"\"\" ), and note we don’t have     F-strings  We've seen examples of how to include variables in the middle of a print statement. For example,   However, this technique is not always convenient. Instead, f-strings make it easier to include variables in your text. Just add an f before the string and put variables in {} .   You can even do math inside an f-string:     String Formatting  We can also use .format()    You can also number the placeholders:    "
},
{
  "id": "ch-strings-3-3",
  "level": "2",
  "url": "ch-strings-3.html#ch-strings-3-3",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "Reflection.",
  "body": " Reflection   How could we store \"I'm eating Bobby's pizza.\"?    We could store just as is written! message = \"I'm eating Bobby's pizza.\"    "
},
{
  "id": "sec-string-manipulation",
  "level": "1",
  "url": "sec-string-manipulation.html",
  "type": "Section",
  "number": "2.2",
  "title": "String Manipulation in Python",
  "body": " String Manipulation in Python   We use strings in almost every Python application we dream up, and understanding how to work with strings is critically important. In particular, we need to know string manipulation. String manipulation means working with or changing strings to get the information or format you need.    String Concactenation  We saw how to concactenate strings in the last chapter. However, it's such an important topic that it's worth repeating! Don't forget: You can combine strings using the + operator.   You can also repeat strings using * :     String Methods  Just like concatenation, we saw some methods that Python has to manipulate strings. We now will present a more comprehensive (but not totally comprehensive!) list of string methods.     Method  Description  Example    .lower()  Converts to lowercase  \"HELLO\".lower() → \"hello\"    .upper()  Converts to uppercase  \"hello\".upper() → \"HELLO\"    .capitalize()  Capitalizes first letter  \"python\".capitalize() → \"Python\"    .title()  Capitalizes each word  \"hello world\".title() → \"Hello World\"    .strip()  Removes spaces from both ends  \" hello \".strip() → \"hello\"    .replace()  Replaces part of a string  \"cat\".replace(\"c\", \"b\") → \"bat\"    .find()  Finds the position of a substring  \"banana\".find(\"na\") → 2    .count()  Counts how many times a substring appears  \"banana\".count(\"a\") → 3       Try It Yourself: String Manipulation  Try the following exercises. Don’t be afraid of making errors. That’s how we learn.   Consider the following statement: \" If we TaKE the CHILDREN's tickets, tHEN THey won'T be able tO Go To ThE North pole. \" Clean up the statement so that the string starts with \"I\" and ends with \".\", the first letter is capitolized, and the other words are lower case. Try using the following:    .strip()      .lower()      .capitalize()         How many times does the letter e appear in the sentence: \"Elephants never forget to elevate their feet when at the equator.\"? (Including the capitol E!)     Replace the word \"boring\" with \"exciting\"... because that's the truth, right? \"This class is boring.\"     Find where in the sentence the word \"fox\" is located in the sentence \"The quick brown fox jumps over the lazy dog.\"      String Indexes  As we saw in the previous chapter, each character in a string has an associated number called its index. You can access individual characters in a string using indexing. Just don't forget that Python starts counting from 0.   You can also grab parts of strings using \"slicing\". This is also a very helpful technique.   We can even use negative indices! A negative index refers to counting backwards from the end.    "
},
{
  "id": "subsec-stringmethods-3",
  "level": "2",
  "url": "sec-string-manipulation.html#subsec-stringmethods-3",
  "type": "Table",
  "number": "2.2.1",
  "title": "",
  "body": "   Method  Description  Example    .lower()  Converts to lowercase  \"HELLO\".lower() → \"hello\"    .upper()  Converts to uppercase  \"hello\".upper() → \"HELLO\"    .capitalize()  Capitalizes first letter  \"python\".capitalize() → \"Python\"    .title()  Capitalizes each word  \"hello world\".title() → \"Hello World\"    .strip()  Removes spaces from both ends  \" hello \".strip() → \"hello\"    .replace()  Replaces part of a string  \"cat\".replace(\"c\", \"b\") → \"bat\"    .find()  Finds the position of a substring  \"banana\".find(\"na\") → 2    .count()  Counts how many times a substring appears  \"banana\".count(\"a\") → 3    "
},
{
  "id": "subsec-tiy-manipulate-3",
  "level": "2",
  "url": "sec-string-manipulation.html#subsec-tiy-manipulate-3",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "",
  "body": " Consider the following statement: \" If we TaKE the CHILDREN's tickets, tHEN THey won'T be able tO Go To ThE North pole. \" Clean up the statement so that the string starts with \"I\" and ends with \".\", the first letter is capitolized, and the other words are lower case. Try using the following:    .strip()      .lower()      .capitalize()       "
},
{
  "id": "subsec-tiy-manipulate-4",
  "level": "2",
  "url": "sec-string-manipulation.html#subsec-tiy-manipulate-4",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "",
  "body": " How many times does the letter e appear in the sentence: \"Elephants never forget to elevate their feet when at the equator.\"? (Including the capitol E!)   "
},
{
  "id": "subsec-tiy-manipulate-5",
  "level": "2",
  "url": "sec-string-manipulation.html#subsec-tiy-manipulate-5",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": " Replace the word \"boring\" with \"exciting\"... because that's the truth, right? \"This class is boring.\"   "
},
{
  "id": "subsec-tiy-manipulate-6",
  "level": "2",
  "url": "sec-string-manipulation.html#subsec-tiy-manipulate-6",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": " Find where in the sentence the word \"fox\" is located in the sentence \"The quick brown fox jumps over the lazy dog.\"   "
},
{
  "id": "sec-input",
  "level": "1",
  "url": "sec-input.html",
  "type": "Section",
  "number": "2.3",
  "title": "User Input",
  "body": " User Input  A big part of programming involves asking the program's user for some sort of input.   username and password    setting preferences    their favorite color     We can easily interact with a program user with input() . Use the input() function to ask the user a question and get their answer.    The input() function always gives us (or returns) a string. If you want a number, convert it using int() or float() .    Use input() is an exteremely valuable tool to add to your growing, programming toolkit!   Try It Yourself: Strings and Inputs  Try the following exercises. Don’t be afraid of making errors. That’s how we learn.   Making Introductions  Ask a user for (1) their name, (2) their favorite animal, and (3) a place they would like to visit. Then summarize their answers with a sentence.    Ask a user for a sentence. Then   convert the sentence to lowercase    count the number of times the letter 's' appears    replace all spaces with an underscore '_'    print the resulting sentence.      "
},
{
  "id": "sec-input-4",
  "level": "2",
  "url": "sec-input.html#sec-input-4",
  "type": "Remark",
  "number": "2.3.1",
  "title": "",
  "body": " The input() function always gives us (or returns) a string. If you want a number, convert it using int() or float() .   "
},
{
  "id": "subsec-tiy-input-3",
  "level": "2",
  "url": "sec-input.html#subsec-tiy-input-3",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "Making Introductions.",
  "body": " Making Introductions  Ask a user for (1) their name, (2) their favorite animal, and (3) a place they would like to visit. Then summarize their answers with a sentence.   "
},
{
  "id": "subsec-tiy-input-4",
  "level": "2",
  "url": "sec-input.html#subsec-tiy-input-4",
  "type": "Checkpoint",
  "number": "2.3.3",
  "title": "",
  "body": "Ask a user for a sentence. Then   convert the sentence to lowercase    count the number of times the letter 's' appears    replace all spaces with an underscore '_'    print the resulting sentence.    "
},
{
  "id": "sec-strings-project1",
  "level": "1",
  "url": "sec-strings-project1.html",
  "type": "Section",
  "number": "2.4",
  "title": "Mini Project: Mad-libs",
  "body": " Mini Project: Mad-libs  In this project, we will try to combine some of the things we have learned in this chapter. It's okay to make mistakes. Break some eggs! This is how we learn.  Mad-libs has been a popular word game for decades! In this game, people select words to fill in a story. Usually, the words are out of context, and the stories are funny. For example:  “One day, a [adjective] [noun] decided to [verb] through the neighborhood. Everyone stopped and stared, but no one could believe their eyes. It was the start of something truly unforgettable.”  Make your own mad-libs story with at least seven blanks (adjectives, nouns, verbs, adverbs, expressions, proper names, etc.). Ask a user to input the different blanks (stored as variables), and then print the story with the user’s selected words.  We recommend   declaring your variables as inputs. For example adjective1 = input(\"Give me an adjective: \") ,    write your story with an f-string. For example, my_story = f'''This is an {adjective1} story.''' ,    print your story with print(my_story) .     To complete this project, vist Online-Python . Once complete, save the file and share with your instructor.  "
},
{
  "id": "sec-strings-project2",
  "level": "1",
  "url": "sec-strings-project2.html",
  "type": "Section",
  "number": "2.5",
  "title": "Mini Project: Calculator",
  "body": " Mini Project: Calculator  In this project, we will try to combine some of the things we have learned in this chapter. It's okay to make mistakes. Break some eggs! This is how we learn.  Build a simple calculator for a user. In this project, ask the user for two numbers and an operation ( + , - , * , \/ , of ** ). Then print out a summary. For example: \"3 - 4 = -1\".  To complete this project, vist Online-Python . Once complete, save the file and share with your instructor.  "
},
{
  "id": "sec-booleans",
  "level": "1",
  "url": "sec-booleans.html",
  "type": "Section",
  "number": "3.1",
  "title": "Booleans: True and False",
  "body": " Booleans: True and False  How can we ask a computer to make a decision? By answering a True\/False question. Let's do a quick simulation to highlight what that means.   You say, \"I have not brushed my teeth yet today.\"    Is this true? If it is, you decide to brush your teeth.    If it is false, you choose to brush your teeth later.   .  This is how computers make decisions as well. At the heart of every decision in a program is a Boolean value. A Boolean represents one of two states: True or False .     Boolean Logic  We can combine logic statement as well. Python also includes logical operators to combine or modify Booleans:    and : True if both conditions are true     or : True if either condition is true (or both)     not : True if the condition is false       -->  Booleans are crucially important for computer decision making. Boolean values are the foundation of computer logic. --> "
},
{
  "id": "sec-ifThen",
  "level": "1",
  "url": "sec-ifThen.html",
  "type": "Section",
  "number": "3.2",
  "title": "Conditional Statements",
  "body": " Conditional Statements  Conditional statements let you branch your code—only running certain blocks when specific conditions are met. We make these decisions through Boolean values. We'll look at the most common conditional statements: if , if-then , and if-elif-else    If Statements  Let's look at an example.   The code inside the if block only runs if the condition is True. In this case, we print \"You can vote!\" if the age is at least 18.   Notice the indentation: Python uses indentation (typically 4 spaces) to define blocks of code. Generally speaking, (and you may have discovered this on your own already) Python is picky with indentation. Here, the indentation tells Python what all is considered to be in your if block.     If-Then Statements  When we initiate an if statement, we test some conditional statement. If it is True, then the code is run. What if we want something to happen if the conditional statement if False? That's where we get the if-then block.   With else , we cover both possibilities: one block runs if the condition is true, the other if it’s false.    If-Elif-Else Statements  We can parse out more logical possibilities with if-elif-else chains. Try to guess the output of the following code before running it.   With if-elif-else chains, we can insert as many conditional checks that we need.    Try It Yourself: If-Elif-Else   Define the variable day = \"Sunday\" . Then use an if-elif-else chain that checks to see what day of the week day is set to and prints a different greeting based upon the day. (Hint use day == \"Monday\" to test if day is equal.) Use several different days to check your logic works.     "
},
{
  "id": "subsec--4",
  "level": "2",
  "url": "sec-ifThen.html#subsec--4",
  "type": "Remark",
  "number": "3.2.1",
  "title": "",
  "body": " Notice the indentation: Python uses indentation (typically 4 spaces) to define blocks of code. Generally speaking, (and you may have discovered this on your own already) Python is picky with indentation. Here, the indentation tells Python what all is considered to be in your if block.  "
},
{
  "id": "subsec-tyielif-2",
  "level": "2",
  "url": "sec-ifThen.html#subsec-tyielif-2",
  "type": "Checkpoint",
  "number": "3.2.2",
  "title": "",
  "body": " Define the variable day = \"Sunday\" . Then use an if-elif-else chain that checks to see what day of the week day is set to and prints a different greeting based upon the day. (Hint use day == \"Monday\" to test if day is equal.) Use several different days to check your logic works.   "
},
{
  "id": "sec-forloops",
  "level": "1",
  "url": "sec-forloops.html",
  "type": "Section",
  "number": "3.3",
  "title": "For Loops and While Loops",
  "body": " For Loops and While Loops   For Loops  What if we want to print \"Hello World\" 10 times? We could manually type a really long string, but that's not very computer science-y. What if we want to print \"Hello World\" 1000 times? We need some new tools. We need loops!  We can use a for loop to repeat something a specific number of times. You’ll most often loop over a sequence of values, like numbers or characters in a string.   Let's go over this example in more detail. The line for i in range(5) initiates a loop that will run 5 times. The letter i is a loop variable (or counter), counting how many times we have gone through the loop, and range(5) dictates how many times the loop will run.  As you run the code, you can see that on the first run through the loop, i is 0, and we print i and the string \"Hello World . We keep doing this until we have a total of 5 iterations through our loop.  Keep in mind that range(n) starts with 0.  Loops are a vital tool for programming. It may be a bit confusing at first, but for loops will be your best friend by the end of things.   Looping Over Lists  We have not talked about lists in Python yet, but we should still mention that Python can also loop over a list. This means that Python apply the code in your for loop once for each item in your list.   We can do the same thing over strings!      While Loops  With a for loop, we tell Python how many times we want to go through our loop. Another powerful loop, the while loop operate a little differently. A while loop repeats as long as a condition is true.   In this example, we set a count variable to 5, and as long as count > 5 the loop will initiate. So how is it that the while will ever not initiate? In theory, a while loop can run forever (called an infinite loop... and you want to avoid these). However, in the loop statement, we reduce the count by 1. So eventually the loop condition is false.    Break and Continue  We can exercise additional control over looping with using break and continue .      Try It Yourself: Loops  Write a program that asks a user for their age and prints whether they can drive, vote, or neither.  Write a loop that prints all the even numbers from 0 to 20. (Hint: Try using % to determine if a number is even or not.)  Modify the following loop to skip printing the number 5:    "
},
{
  "id": "subsec-forloops-6",
  "level": "2",
  "url": "sec-forloops.html#subsec-forloops-6",
  "type": "Remark",
  "number": "3.3.1",
  "title": "",
  "body": "Keep in mind that range(n) starts with 0. "
},
{
  "id": "subsec-tyi-more-loops-2",
  "level": "2",
  "url": "sec-forloops.html#subsec-tyi-more-loops-2",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "",
  "body": "Write a program that asks a user for their age and prints whether they can drive, vote, or neither. "
},
{
  "id": "subsec-tyi-more-loops-3",
  "level": "2",
  "url": "sec-forloops.html#subsec-tyi-more-loops-3",
  "type": "Checkpoint",
  "number": "3.3.3",
  "title": "",
  "body": "Write a loop that prints all the even numbers from 0 to 20. (Hint: Try using % to determine if a number is even or not.) "
},
{
  "id": "subsec-tyi-more-loops-4",
  "level": "2",
  "url": "sec-forloops.html#subsec-tyi-more-loops-4",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "",
  "body": "Modify the following loop to skip printing the number 5:  "
},
{
  "id": "sec-ifsloopsproject1",
  "level": "1",
  "url": "sec-ifsloopsproject1.html",
  "type": "Section",
  "number": "3.4",
  "title": "Ifs and Loops Project 1",
  "body": " Ifs and Loops Project 1  Ask the user to guess a secret number between 1 and 10. Give them up to 3 tries using a while loop.  To complete this project, vist Online-Python . Once complete, save the file and share with your instructor.  "
},
{
  "id": "sec-ifsloopsproject3",
  "level": "1",
  "url": "sec-ifsloopsproject3.html",
  "type": "Section",
  "number": "3.5",
  "title": "Ifs and Loops Project 2: FizzBuzz",
  "body": " Ifs and Loops Project 2: FizzBuzz  Print the numbers from 1 to 30. For each number:   If it’s divisible by 3, print “Fizz”    If it’s divisible by 5, print “Buzz”    If it’s divisible by both, print “FizzBuzz”    Otherwise, print the number     To complete this project, vist Online-Python . Once complete, save the file and share with your instructor.  "
},
{
  "id": "sec-lists",
  "level": "1",
  "url": "sec-lists.html",
  "type": "Section",
  "number": "4.1",
  "title": "Lists",
  "body": " Lists  Lists are the simplest of the collections we're investigating. Lists are ordered, mutable (changeable) collections that can hold a variety of data types. We call the entries of a list an element.  We can create a list with brackets, [ ] .    Indices  We can use indices to access an element from a list.   Remember using indices to find a character in a string? Well, strings are also lists... lists of characters.  We can pull out \"sublists\" from our lists with slicing. Slicing is an extremely useful tool when dealing with lists. One that you will use often!     Modifying Lists  Some structures in Python are immutable, meaning that the cannot be changed. Lists, however, are very mutable. There are many convenient methods to modify lists.  For example,     Try It Yourself: Lists   Create a list of five animals. Replace the third one with another animal.     Create a list of five animals. Add two more animals to the list. Then remove one (You can do that using the .pop() method.).     "
},
{
  "id": "subsec-indices-3",
  "level": "2",
  "url": "sec-lists.html#subsec-indices-3",
  "type": "Remark",
  "number": "4.1.1",
  "title": "",
  "body": "Remember using indices to find a character in a string? Well, strings are also lists... lists of characters. "
},
{
  "id": "subsec-ttyi-lists-2",
  "level": "2",
  "url": "sec-lists.html#subsec-ttyi-lists-2",
  "type": "Checkpoint",
  "number": "4.1.2",
  "title": "",
  "body": " Create a list of five animals. Replace the third one with another animal.   "
},
{
  "id": "subsec-ttyi-lists-3",
  "level": "2",
  "url": "sec-lists.html#subsec-ttyi-lists-3",
  "type": "Checkpoint",
  "number": "4.1.3",
  "title": "",
  "body": " Create a list of five animals. Add two more animals to the list. Then remove one (You can do that using the .pop() method.).   "
},
{
  "id": "sec-sets",
  "level": "1",
  "url": "sec-sets.html",
  "type": "Section",
  "number": "4.2",
  "title": "Sets",
  "body": " Sets  Where lists consist of elements in a given order, sometimes we may not care about the order of elements. Sets are unordered collections of unique elements. They are useful when you need to eliminate duplicates or perform set operations.  Sets in Python are just like sets you see in mathematics.   Sets  Given sets a and b , we can form new sets. The set \"a union b\" combines elements of two lists into one (without duplicates), and the set \"a intersect b\" is the list of elements that are in a and b .     We can also modify sets and their elements.     Try It Yourself: Sets   Create two sets of favorite foods for two people. Find the common and unique favorites.     "
},
{
  "id": "sec-sets-3",
  "level": "2",
  "url": "sec-sets.html#sec-sets-3",
  "type": "Remark",
  "number": "4.2.1",
  "title": "",
  "body": "Sets in Python are just like sets you see in mathematics. "
},
{
  "id": "subsec-tiysets-2",
  "level": "2",
  "url": "sec-sets.html#subsec-tiysets-2",
  "type": "Checkpoint",
  "number": "4.2.2",
  "title": "",
  "body": " Create two sets of favorite foods for two people. Find the common and unique favorites.   "
},
{
  "id": "sec-tuples",
  "level": "1",
  "url": "sec-tuples.html",
  "type": "Section",
  "number": "4.3",
  "title": "Tuples",
  "body": " Tuples  Lists are ordered and mutable. Sets are unordered and mutable, but there may be times we need something unmutable. Tuples are ordered, immutable collections. Use them when you want to ensure data cannot be changed.   If we try to modifying a tuple, we receive an error.    Try It Yourself: Tuples  Create a tuple representing your birth date (day, month, year). Print the month.    "
},
{
  "id": "subsec-tiytuples-2",
  "level": "2",
  "url": "sec-tuples.html#subsec-tiytuples-2",
  "type": "Checkpoint",
  "number": "4.3.1",
  "title": "",
  "body": "Create a tuple representing your birth date (day, month, year). Print the month.  "
},
{
  "id": "subsec-dictionaries",
  "level": "1",
  "url": "subsec-dictionaries.html",
  "type": "Section",
  "number": "4.4",
  "title": "Dictionaries",
  "body": " Dictionaries  We can refer to an element in a list by its index. Sometimes, though, we might want to reference things in a different way. A dictionary pairs a key with an element.  For example,   As another example,    Try It Yourself: Dictionaries   Create a dictionary representing a book (title, author, year). Add a new key genre. Update the year.     "
},
{
  "id": "subsec-tiydict-2",
  "level": "2",
  "url": "subsec-dictionaries.html#subsec-tiydict-2",
  "type": "Checkpoint",
  "number": "4.4.1",
  "title": "",
  "body": " Create a dictionary representing a book (title, author, year). Add a new key genre. Update the year.   "
},
{
  "id": "sec-listproject",
  "level": "1",
  "url": "sec-listproject.html",
  "type": "Section",
  "number": "4.5",
  "title": "Mini Project: Dictionaries of Words",
  "body": " Mini Project: Dictionaries of Words  Write a program that takes a sentence as input and returns a dictionary where keys are words and values are the number of times each word appears.  To complete this project, vist Online-Python . Once complete, save the file and share with your instructor.  "
},
{
  "id": "sec-functions",
  "level": "1",
  "url": "sec-functions.html",
  "type": "Section",
  "number": "5.1",
  "title": "What is a Function?",
  "body": " What is a Function?  In mathematics, a function like is a way to assign output with a given input. For example, . Functions are very useful in algebra, calculus, and so on. In programming, a function is a block of code that performs a specific task. Once you write a function, you can call it whenever you need it.  We can think of a function as building a tool that we will use over and over again. Imagine functions like a machine: you put something in, and it gives something back. For example, consider the following:   A good function saves a programmer a lot time!   Defining a Function  We create a function using the def keyword. This defines the function. We use the function by \"calling\" it.    When writing a program that requires you repeat a task repeatedly, defining a function that can accomplish this task may be a good idea.     Parameters of a Function  In mathematical functions like and have variable and . In programming, we call variables like these parameters.  In Python, functions can have   1 parameter    many parameters    no parameters    parameters of different types (integers, floats, strings, lists, etc.)     For example,   In greet1(name) , name is the parameter. Notice that greet0() has no parameter! Yet, it still is effective. There are two parameters in greet2(name1, name2) . Is there a limit to how many parameters a function can have? Not really.  Try to make some functions for yourself.   Write a function say_goodbye() that prints \"Goodbye!\".     Write a function favorite_movie(title) that prints \"My favorite movie is title .\"     Write a function star(n) that prints out copies of \"*\". For example, star(5) prints out ***** .      Returning a Value  All of our examples so far have printed some sort of statement. It's very common that instead of printing something we will want to perform a calculation and use that result somewhere else. In this case, a function needs to give a value back using return .    Why, again, would we use a function?   Organization: Keeps your code neat and easy to read\/    Reuse: Write code once, use it many times.    Testing: You can test small pieces instead of the whole program.        Try It Yourself: Functions   Write a function multiply(x, y) that returns the result of x times y      Write a function added(n) that prints the sum of 1 up to n . (Hint: In your function definition, start with sum = 0 . Then with for i in range(n) , sum+= i .)     "
},
{
  "id": "subsec-def-funcs-3",
  "level": "2",
  "url": "sec-functions.html#subsec-def-funcs-3",
  "type": "Remark",
  "number": "5.1.1",
  "title": "",
  "body": " When writing a program that requires you repeat a task repeatedly, defining a function that can accomplish this task may be a good idea.  "
},
{
  "id": "subsec-parameters-7",
  "level": "2",
  "url": "sec-functions.html#subsec-parameters-7",
  "type": "Checkpoint",
  "number": "5.1.2",
  "title": "",
  "body": " Write a function say_goodbye() that prints \"Goodbye!\".   "
},
{
  "id": "subsec-parameters-8",
  "level": "2",
  "url": "sec-functions.html#subsec-parameters-8",
  "type": "Checkpoint",
  "number": "5.1.3",
  "title": "",
  "body": " Write a function favorite_movie(title) that prints \"My favorite movie is title .\"   "
},
{
  "id": "subsec-parameters-9",
  "level": "2",
  "url": "sec-functions.html#subsec-parameters-9",
  "type": "Checkpoint",
  "number": "5.1.4",
  "title": "",
  "body": " Write a function star(n) that prints out copies of \"*\". For example, star(5) prints out ***** .   "
},
{
  "id": "subsec-return-3-1",
  "level": "2",
  "url": "sec-functions.html#subsec-return-3-1",
  "type": "Remark",
  "number": "5.1.5",
  "title": "",
  "body": "Why, again, would we use a function?   Organization: Keeps your code neat and easy to read\/    Reuse: Write code once, use it many times.    Testing: You can test small pieces instead of the whole program.    "
},
{
  "id": "subsec-tiy-funcs-2",
  "level": "2",
  "url": "sec-functions.html#subsec-tiy-funcs-2",
  "type": "Checkpoint",
  "number": "5.1.6",
  "title": "",
  "body": " Write a function multiply(x, y) that returns the result of x times y    "
},
{
  "id": "subsec-tiy-funcs-3",
  "level": "2",
  "url": "sec-functions.html#subsec-tiy-funcs-3",
  "type": "Checkpoint",
  "number": "5.1.7",
  "title": "",
  "body": " Write a function added(n) that prints the sum of 1 up to n . (Hint: In your function definition, start with sum = 0 . Then with for i in range(n) , sum+= i .)   "
},
{
  "id": "sec-randomness",
  "level": "1",
  "url": "sec-randomness.html",
  "type": "Section",
  "number": "5.2",
  "title": "Randomness",
  "body": " Randomness   Why Use Randomness?  Randomness makes programs less predictable — perfect for games, simulations, and surprises. We make use of randomness for dice rolls, coin flips, and many other applications.  To implement randomness in Python, we must first import the random module.     Random Numbers  We can a generate random number between n and m with random.randint(n,m) to generate. Each time you run the program, you may get a different number.    Print 4 random integers between 50 and 100.      Random Floating-Point Numbers  Probabilities are always between and , so randint is not always what we need. We can use random() to generate a random float between and .     Seeding the Random Generator  If you want repeatable randomness (for testing), you can seed the random number generator:     Random Choice  We can randomly select from a list using random.choice() , a very useful application!     Try It Yourself: Randomness   Import random and print a random number between 1 and 50.     Print a random decimal number between 0 and 5. (You can multiple random() by 5)     Generate three random numbers between 1 and 20 and print their sum.    "
},
{
  "id": "subsec-randint-3",
  "level": "2",
  "url": "sec-randomness.html#subsec-randint-3",
  "type": "Checkpoint",
  "number": "5.2.1",
  "title": "",
  "body": " Print 4 random integers between 50 and 100.   "
},
{
  "id": "subsec-tiy-random-2",
  "level": "2",
  "url": "sec-randomness.html#subsec-tiy-random-2",
  "type": "Checkpoint",
  "number": "5.2.2",
  "title": "",
  "body": " Import random and print a random number between 1 and 50.   "
},
{
  "id": "subsec-tiy-random-3",
  "level": "2",
  "url": "sec-randomness.html#subsec-tiy-random-3",
  "type": "Checkpoint",
  "number": "5.2.3",
  "title": "",
  "body": " Print a random decimal number between 0 and 5. (You can multiple random() by 5)   "
},
{
  "id": "subsec-tiy-random-4",
  "level": "2",
  "url": "sec-randomness.html#subsec-tiy-random-4",
  "type": "Checkpoint",
  "number": "5.2.4",
  "title": "",
  "body": " Generate three random numbers between 1 and 20 and print their sum.  "
},
{
  "id": "sec-function-project",
  "level": "1",
  "url": "sec-function-project.html",
  "type": "Section",
  "number": "5.3",
  "title": "Mini Project: Magic 8-Ball",
  "body": " Mini Project: Magic 8-Ball  You can combine functions and randomness to make really cool programs. We'll provide an example, and give you something to try.   Rolling a Die  Let's roll a die.     Magic 8-Ball  Build a Magic 8-Ball in Python that will give us very useful advice. We recommend   Defining a function magic_8()     Making a list of possible answers (in magic_8() ).    Return a randomly chosen answer from your list.    Prompt the user to ask a question (with input() .)    Print a magic_8() response.     To complete this project, vist Online-Python . Once complete, save the file and share with your instructor.   "
},
{
  "id": "sec-projectproejct1",
  "level": "1",
  "url": "sec-projectproejct1.html",
  "type": "Section",
  "number": "6.1",
  "title": "Project 1: Rock, Paper, Scissors",
  "body": " Project 1: Rock, Paper, Scissors  In this project, we will build a game of Rock, Paper, and Scissors against a Bot. Here's the code in full.  We will explain what is going on, but vist Online-Python and type the code in for yourself. Once complete, save the file and share with your instructor.  Keep in mind that program is not linear. Much like writing a story, a poem, or a mathematical proof, we will not think of the parts one at a time. We'll try to describe our thought process in the script to share the strategy behind writing a program.   The bot we play against will make a random decision, so we definitely need to import random .    import random    We also need a way to declare a winner. There are a lot of ways we can do this, but a nice way is to \"mathematize\" the selection of \"rock\" , \"paper\" , and \"scissors\" . We can do this with a tuple.    throws=(\"rock\",\"paper\",\"scissors\")    If we plan to play a lot of rounds, we should also make a function that computes the winner. The tuple throws=(\"rock\",\"paper\",\"scissors\") implies that beats , beats , and beats . How can we decide a winner then? With circular inequalities like this, using can be very useful.    def rock_paper_scissors(a, b): if a == b: print(\"It's a tie!\") elif a%3 == b%3 + 1: # If you choose 1, and they choose 0, you win. print(\"You win!\") else: print(\"Bot wins!\")    We have a way to declare a winner, but now we need actually play the game. We also hope to play more than once.  We can do this by setting a Boolean (like game_on = True ) and a while loop (like while game_on == True: ). At some point, we need to be able to end the game, and we do that by setting game_on =False .    game_on = True while game_on == True: ''' Our game mechanic will go here. ''' play_again = input(\"Do you want to play again? Y\/N \") if play_again.upper() == \"N\": # If the user doesn't want to play again, we set the game_on Boolean to False print(\"See you later!\") game_on = False    Now for the game mechanic. How does the bot choose? randomly.    bot_throw = random.randint(0,2) # Bot picks 1, 2, 3 randomly    And the human? With an input() function and matching their selection with something from throws=(\"rock\",\"paper\",\"scissors\") . We can also set up a while loop to ensure that the user gives us a workable answer. This while trick is a common technique, and one you'll want to keep that in mind for sure!.    choice = False while choice == False: player_choice = input(\"What do you throw? 1 rock, 2 paper, 3 scissors \") if player_choice not in (\"1\",\"2\",\"3\"): print(\"Sorry. Please pick 1, 2, 3.\") else: player_throw = int(player_choice) - 1 choice = True    Lastly, we add some of the printing and declare a winner. We already have bot_throw and player_throw , so rock_paper_scissors(player_throw, bot_throw) will declare the winner.    input(\"Bot has decided. You ready? [Press Enter] \") print(\"1... \") print(\"2... \") print(\"3... Shoot!\") print(\"You throw \" + throws[player_throw]) print(\"Bot throws \" + throws[bot_throw]) rock_paper_scissors(player_throw, bot_throw)   Now, just debug for syntax issues, and good luck against the bot!  "
},
{
  "id": "sec-projectproejct1-5",
  "level": "2",
  "url": "sec-projectproejct1.html#sec-projectproejct1-5",
  "type": "Remark",
  "number": "6.1.1",
  "title": "",
  "body": " The bot we play against will make a random decision, so we definitely need to import random .  "
},
{
  "id": "sec-projectproejct1-7",
  "level": "2",
  "url": "sec-projectproejct1.html#sec-projectproejct1-7",
  "type": "Remark",
  "number": "6.1.2",
  "title": "",
  "body": " We also need a way to declare a winner. There are a lot of ways we can do this, but a nice way is to \"mathematize\" the selection of \"rock\" , \"paper\" , and \"scissors\" . We can do this with a tuple.  "
},
{
  "id": "sec-projectproejct1-9",
  "level": "2",
  "url": "sec-projectproejct1.html#sec-projectproejct1-9",
  "type": "Remark",
  "number": "6.1.3",
  "title": "",
  "body": " If we plan to play a lot of rounds, we should also make a function that computes the winner. The tuple throws=(\"rock\",\"paper\",\"scissors\") implies that beats , beats , and beats . How can we decide a winner then? With circular inequalities like this, using can be very useful.  "
},
{
  "id": "sec-projectproejct1-11",
  "level": "2",
  "url": "sec-projectproejct1.html#sec-projectproejct1-11",
  "type": "Remark",
  "number": "6.1.4",
  "title": "",
  "body": " We have a way to declare a winner, but now we need actually play the game. We also hope to play more than once.  We can do this by setting a Boolean (like game_on = True ) and a while loop (like while game_on == True: ). At some point, we need to be able to end the game, and we do that by setting game_on =False .  "
},
{
  "id": "sec-projectproejct1-13",
  "level": "2",
  "url": "sec-projectproejct1.html#sec-projectproejct1-13",
  "type": "Remark",
  "number": "6.1.5",
  "title": "",
  "body": " Now for the game mechanic. How does the bot choose? randomly.  "
},
{
  "id": "sec-projectproejct1-15",
  "level": "2",
  "url": "sec-projectproejct1.html#sec-projectproejct1-15",
  "type": "Remark",
  "number": "6.1.6",
  "title": "",
  "body": " And the human? With an input() function and matching their selection with something from throws=(\"rock\",\"paper\",\"scissors\") . We can also set up a while loop to ensure that the user gives us a workable answer. This while trick is a common technique, and one you'll want to keep that in mind for sure!.  "
},
{
  "id": "sec-projectproejct1-17",
  "level": "2",
  "url": "sec-projectproejct1.html#sec-projectproejct1-17",
  "type": "Remark",
  "number": "6.1.7",
  "title": "",
  "body": " Lastly, we add some of the printing and declare a winner. We already have bot_throw and player_throw , so rock_paper_scissors(player_throw, bot_throw) will declare the winner.  "
},
{
  "id": "sec-projectproejct2",
  "level": "1",
  "url": "sec-projectproejct2.html",
  "type": "Section",
  "number": "6.2",
  "title": "Project 2: Hangman",
  "body": " Project 2: Hangman  In this project, we will build a game of Hangman that two friends can. Here's the code in full.  We will explain what is going on, but vist Online-Python and type the code in for yourself. Once complete, save the file and share with your instructor.  Keep in mind that program is not linear. Much like writing a story, a poem, or a mathematical proof, we will not think of the parts one at a time. We'll try to describe our thought process in the script to share the strategy behind writing a program.   print(\"Let's play hangman! User 1 types a message, and user 2 has 5 attempts to figure it out by guessing letters.\") print(\"Letters only, please.\") user1 = input(\"Player 1: Give us your hangman message. \") print('\\n'*20 + 'Player 2, are you ready? ') message = user1.strip() message = message.lower() tries = 5 board = \"\" for i in message: if i == \" \": board += i else: board += \"_\" print(board) win = False used_letters = [] while tries > 0: guess = input(\"Player 2: Guess a letter \") if guess.lower() in used_letters: print(\"You already guessed that letter!\") elif guess.lower() in message: for i in range(len(message)): if guess.lower() == message[i]: board = board[:i] + guess.lower() + board[i+1:] if board == message: print(\"Great! You won!\") tries = 0 win = True used_letters.append(guess.lower()) else: tries -= 1 print(\"Tries left: \", tries) print(board) if win == True: print(\"Congrats! You won!\") else: print(\"Sorry... maybe better luck next time.\")   "
},
{
  "id": "sec-projectproejct3",
  "level": "1",
  "url": "sec-projectproejct3.html",
  "type": "Section",
  "number": "6.3",
  "title": "Project 3: Ceasar Cipher",
  "body": " Project 3: Ceasar Cipher  In this project, we will learn to encrypt and decrypt secrete messages with a Ceasare Cipher. A Ceasar Cipher maps the letters of the alphabet to different letters. For example, take the message 'Hello World' and a cipher code of 3, we will move each letter down 3 letters in the alphabet.  So H -> K, E -> H, L -> 0, and so on. So 'Hello World' is encrypted as 'KHOOR ZRUOG'. If we know the cipher code, we can decrypt it back to 'HELLO WORLD'.  We will explain what is going on, but vist Online-Python and type the code in for yourself. Once complete, save the file and share with your instructor.  Keep in mind that program is not linear. Much like writing a story, a poem, or a mathematical proof, we will not think of the parts one at a time. We'll try to describe our thought process in the script to share the strategy behind writing a program.   letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" open_message = \"\"\" We are going to use a Ceaser Cipher to encrypt or decrypt a secret message. A Ceasar Cipher maps the letters of the alphabet to different letters. For example, take the message 'Hello World' and a cipher code of 3, we will move each letter down 3 letters in the alphabet. So H -> K, E -> H, L -> 0, and so on. So 'Hello World' is encrypted as 'KHOOR ZRUOG'. If we know the cipher code, we can decrypt it back to 'HELLO WORLD'. \"\"\" print(open_message) encrypt_decrypt = input(\"Do you want to encrypt or decrypt a message? E or D \") if encrypt_decrypt.upper() == 'E': message = input(\"What is your secret message? \") code = input(\"Give a cipher code between 0 and 25. \") message = message.upper() encrypt_message = \"\" for i in range(len(message)): if message[i] == \" \": encrypt_message += \" \" else: letter_index = letters.index(message[i]) letter_index += int(code) encrypt_message += letters[letter_index%26] print(\"Your encrypted message: \") print(encrypt_message) else: message = input(\"What is your encrypted message? \") code = input(\"Give a cipher code between 0 and 25. \") decrypt_message = \"\" for i in range(len(message)): if message[i] == \" \": decrypt_message += \" \" else: letter_index = letters.index(message[i]) letter_index -= int(code) decrypt_message += letters[letter_index%26] print(\"Your encrypted message: \") print(decrypt_message)   "
},
{
  "id": "sec-projectproejct4",
  "level": "1",
  "url": "sec-projectproejct4.html",
  "type": "Section",
  "number": "6.4",
  "title": "Project 4: Upside Down Snow Storm",
  "body": " Project 4: Upside Down Snow Storm  In this project, we will make a calm and relaxing visual of snowfall. The only catch is that the snowflakes will be falling up... so an upside down snow storm.  We will explain what is going on, but vist Online-Python and type the code in for yourself. Once complete, save the file and share with your instructor.  Keep in mind that program is not linear. Much like writing a story, a poem, or a mathematical proof, we will not think of the parts one at a time. We'll try to describe our thought process in the script to share the strategy behind writing a program.   import random, time open_message = \"\"\" We will build an upside-down snowfall... meaning the snow flakes will fall upward! \"\"\" print(open_message) intensity = input(\"How intense of a snowstorm do you want? 1-10 \") snow_count = int(intensity) while True: #Display our snow flakes row = \" \"*90 for i in range(snow_count): flake = random.randint(0,len(row)) row = row[:flake] + '*' + row[flake+1:] time.sleep(0.05) print(row)   Now, just debug for syntax issues, and good luck against the bot!  "
},
{
  "id": "sec-projectproejct5",
  "level": "1",
  "url": "sec-projectproejct5.html",
  "type": "Section",
  "number": "6.5",
  "title": "Project 5: The Sieve of Eratosthenes",
  "body": " Project 5: The Sieve of Eratosthenes  In this project, we will build the famous Sieve of Eratosthenes ---- a way to check for primes. Philosopher and mathematician, Eratosthenes developed a way to find prime numbers less than a given integer. First, we arange the numbers in a grid. Secondly, we choose a number and eliminate all multiples of that number in our grid. After a while, we will eliminate all numbers that are not prime! And for integer , we only need to check the first integers.  We will explain what is going on, but vist Online-Python and type the code in for yourself. Once complete, save the file and share with your instructor.  Keep in mind that program is not linear. Much like writing a story, a poem, or a mathematical proof, we will not think of the parts one at a time. We'll try to describe our thought process in the script to share the strategy behind writing a program.   import math open_message = \"\"\" The Sieve of Eratosthenes ---- a way to check for primes. Philosopher and mathematician, Eratosthenes developed a way to find prime numbers less than a given integer. First, we arange the numbers in a grid. Secondly, we choose a number and eliminate all multiples of that number in our grid. After a while, we will eliminate all numbers that are not prime! And for integer n, we only need to check the first sqrt(n) integers. \"\"\" def num_list(n): row_count = n\/\/10 + 1 grid = [] for i in range(row_count): row = [] for j in range(10): if (i*10 + j >= n): row.append(i*10 + j) grid.append(row) return grid def num_grid(list): list for i in range(len(list)): print(list[i]) def multiples_in_row(p, list): for i in range(len(list)): if list[i]=='X': continue elif int(list[i])% p == 0 and int(list[i]) != p: list[i] = 'X' elif int(list[i]) == 1: list[i] = 'X' return list def multiples_in_sieve(p,list): if p == 1: print(\"Well, 1 is not prime. Try again. \") else: for j in range(len(list)): multiples_in_row(p, list[j]) return list iterate = True print(open_message) number_q = input(\"For what integer, do you want to apply the Sieve of Eratosthenes? (Like 100, for example.) \") number = int(number_q) sieve = num_list(number) num_grid(sieve) while iterate == True: multiples_to_check = input(\"What multiples should we eliminate? \") multiples_in_sieve(int(multiples_to_check),sieve) num_grid(sieve) terminate = input(\"Do you think you have all the primes? Y\/N \") if terminate.upper() == 'Y': iterate = False   Now, just debug for syntax issues, and good luck against the bot!  "
},
{
  "id": "sec-projectproejctprojects",
  "level": "1",
  "url": "sec-projectproejctprojects.html",
  "type": "Section",
  "number": "6.6",
  "title": "Project Solutions",
  "body": " Project Solutions  We are providing a solution to the projects from this chapter, just in case you get stuck. Note, though, that there's more than one way to write a program usually. Each person's program, just a like a painting or an English paper, will be somewhat unique.  Also, after these projects, be sure to challenge yourself in how you can make these projects better. Can you make a 5-way Rock, Paper, Scissors? Are there bugs in the code if someone does not respond to questions the way you intend? Can you include a score tracker in hangman?   Project 1: Rock, Paper, and Scissors   Rock, Paper, Scissors  import random throws=(\"rock\",\"paper\",\"scissors\") game_on = True #This Boolean keeps the game running def rock_paper_scissors(a, b): if a == b: print(\"It's a tie!\") elif a%3 == b%3 + 1: print(\"You win!\") else: print(\"Bot wins!\") while game_on == True: choice = False while choice == False: player_choice = input(\"What do you throw? 1 rock, 2 paper, 3 scissors \") if player_choice not in (\"1\",\"2\",\"3\"): print(\"Sorry. Please pick 1, 2, 3.\") else: player_throw = int(player_choice) - 1 choice = True bot_throw = random.randint(0,2) # Bot picks 1, 2, 3 randomly input(\"Bot has decided. You ready? [Press Enter] \") print(\"1... \") print(\"2... \") print(\"3... Shoot!\") print(\"You throw \" + throws[player_throw]) print(\"Bot throws \" + throws[bot_throw]) rock_paper_scissors(player_throw, bot_throw) play_again = input(\"Do you want to play again? Y\/N \") if play_again.upper() == \"N\": print(\"See you later!\") game_on = False     Project 2: Hangman   print(\"Let's play hangman! User 1 types a message, and user 2 has 5 attempts to figure it out by guessing letters.\") print(\"Letters only, please.\") user1 = input(\"Player 1: Give us your hangman message. \") print('\\n'*20 + 'Player 2, are you ready? ') message = user1.strip() message = message.lower() tries = 5 board = \"\" for i in message: if i == \" \": board += i else: board += \"_\" print(board) win = False used_letters = [] while tries > 0: guess = input(\"Player 2: Guess a letter \") if guess.lower() in used_letters: print(\"You already guessed that letter!\") elif guess.lower() in message: for i in range(len(message)): if guess.lower() == message[i]: board = board[:i] + guess.lower() + board[i+1:] if board == message: print(\"Great! You won!\") tries = 0 win = True used_letters.append(guess.lower()) else: tries -= 1 print(\"Tries left: \", tries) print(board) if win == True: print(\"Congrats! You won!\") else: print(\"Sorry... maybe better luck next time.\")     Project 3: Ceasar Cipher   letters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" open_message = \"\"\" We are going to use a Ceaser Cipher to encrypt or decrypt a secret message. A Ceasar Cipher maps the letters of the alphabet to different letters. For example, take the message 'Hello World' and a cipher code of 3, we will move each letter down 3 letters in the alphabet. So H -> K, E -> H, L -> 0, and so on. So 'Hello World' is encrypted as 'KHOOR ZRUOG'. If we know the cipher code, we can decrypt it back to 'HELLO WORLD'. \"\"\" print(open_message) encrypt_decrypt = input(\"Do you want to encrypt or decrypt a message? E or D \") if encrypt_decrypt.upper() == 'E': message = input(\"What is your secret message? \") code = input(\"Give a cipher code between 0 and 25. \") message = message.upper() encrypt_message = \"\" for i in range(len(message)): if message[i] == \" \": encrypt_message += \" \" else: letter_index = letters.index(message[i]) letter_index += int(code) encrypt_message += letters[letter_index%26] print(\"Your encrypted message: \") print(encrypt_message) else: message = input(\"What is your encrypted message? \") code = input(\"Give a cipher code between 0 and 25. \") decrypt_message = \"\" for i in range(len(message)): if message[i] == \" \": decrypt_message += \" \" else: letter_index = letters.index(message[i]) letter_index -= int(code) decrypt_message += letters[letter_index%26] print(\"Your encrypted message: \") print(decrypt_message)     Project 4: Upside-Down Snowfall   import random, time open_message = \"\"\" We will build an upside-down snowfall... meaning the snow flakes will fall upward! \"\"\" print(open_message) intensity = input(\"How intense of a snowstorm do you want? 1-10 \") snow_count = int(intensity) while True: #Display our snow flakes row = \" \"*90 for i in range(snow_count): flake = random.randint(0,len(row)) row = row[:flake] + '*' + row[flake+1:] time.sleep(0.05) print(row)     Project 5: The Sieve of Erastothenes   import math open_message = \"\"\" The Sieve of Eratosthenes ---- a way to check for primes. Philosopher and mathematician, Eratosthenes developed a way to find prime numbers less than a given integer. First, we arange the numbers in a grid. Secondly, we choose a number and eliminate all multiples of that number in our grid. After a while, we will eliminate all numbers that are not prime! And for integer n, we only need to check the first sqrt(n) integers. \"\"\" def num_list(n): row_count = n\/\/10 + 1 grid = [] for i in range(row_count): row = [] for j in range(10): if (i*10 + j >= n): row.append(i*10 + j) grid.append(row) return grid def num_grid(list): list for i in range(len(list)): print(list[i]) def multiples_in_row(p, list): for i in range(len(list)): if list[i]=='X': continue elif int(list[i])% p == 0 and int(list[i]) != p: list[i] = 'X' elif int(list[i]) == 1: list[i] = 'X' return list def multiples_in_sieve(p,list): if p == 1: print(\"Well, 1 is not prime. Try again. \") else: for j in range(len(list)): multiples_in_row(p, list[j]) return list iterate = True print(open_message) number_q = input(\"For what integer, do you want to apply the Sieve of Eratosthenes? (Like 100, for example.) \") number = int(number_q) sieve = num_list(number) num_grid(sieve) while iterate == True: multiples_to_check = input(\"What multiples should we eliminate? \") multiples_in_sieve(int(multiples_to_check),sieve) num_grid(sieve) terminate = input(\"Do you think you have all the primes? Y\/N \") if terminate.upper() == 'Y': iterate = False    "
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
