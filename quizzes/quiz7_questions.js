// Reading Quiz Week 7 — ICS 45C
export const quiz7 = [
    {
        question: "What does it mean to capture external variables by reference in a lambda expression?",
        options: ["The lambda function captures the addresses of the variables", "The lambda function creates new copies of the captured variables", "The lambda function has references to the original external variables with the same name", "none of the other choices"],
        answer: ["The lambda function has references to the original external variables with the same name"]
    },

    {
        question: "What is the syntax for throwing an exception of type std::string in C++?",
        options: ["none of the other choices", "catch string(\"error message\");", "throw \"error message\";", "try string(\"error message\");", "throw string(\"error message\");"],
        answer: ["throw string(\"error message\");"]
    },

    {
        question: "How do you handle an exception in C++?",
        options: [
            "By using the assert keyword followed by a block of code that may throw an exception, and one or more catch clauses to handle the exception",
            "none of the other choices",
            "By using the try keyword followed by a block of code that may throw an exception, and one or more catch clauses to handle the exception",
            "By using the if keyword followed by a block of code that may throw an exception, and one or more catch clauses to handle the exception"
        ],
        answer: ["By using the try keyword followed by a block of code that may throw an exception, and one or more catch clauses to handle the exception"]
    },

    {
        question: "What happens if you try to call a function template without instantiating it with specific template arguments?",
        options: ["none of the other choices", "The function will use default template arguments and return a default result", "The function will compile, but the result will be unpredictable", "The compiler will try to automatically instantiate the template using the types of the supplied arguments"],
        answer: ["The compiler will try to automatically instantiate the template using the types of the supplied arguments"]
    },

    {
        question: "What is the syntax for a try/catch block used to catch an exception in C++?",
        options: ["none of the other choices", "try { ... } catch (...) { ... }", "catch (...) { ... } try { ... }", "{ ... } catch (...) { ... }"],
        answer: ["try { ... } catch (...) { ... }"]
    },

    {
        question: "What is a template class in C++?",
        options: ["none of the other choices", "A class that can be instantiated with specific types replacing generic types at compile-time", "A class that can operate with generic types specified at runtime", "A class that can only operate with a specific type of data"],
        answer: ["A class that can be instantiated with specific types replacing generic types at compile-time"]
    },

    {
        question: "How do you instantiate a template class in C++?",
        options: [
            "By using the typename keyword followed by the template class name and template arguments in angle brackets",
            "By creating a new object of the template class with the template arguments specified in angle brackets after the class name",
            "none of the other choices",
            "By using the new keyword followed by the template class name and template arguments in angle brackets"
        ],
        answer: ["By creating a new object of the template class with the template arguments specified in angle brackets after the class name"]
    },

    {
        question: "How do you define a template class in C++?",
        options: [
            "By using the typename keyword before the class name",
            "By using the template keyword followed by the template parameter list and then class keyword followed by the class name",
            "By using the class keyword followed by the template parameter list and then the class name",
            "none of the other choices"
        ],
        answer: ["By using the template keyword followed by the template parameter list and then class keyword followed by the class name"]
    },

    {
        question: "What is the purpose of a try/catch block in C++?",
        options: ["To terminate the program when an error occurs", "To improve program performance by reducing error checking", "none of the other choices", "To provide a mechanism for handling and recovering from errors"],
        answer: ["To provide a mechanism for handling and recovering from errors"]
    },

    {
        question: "What does it mean to instantiate a function template in C++?",
        options: ["To modify the function template's implementation", "To compile the function template into an executable program", "none of the other choices", "To create a new instance of the function with specific template arguments"],
        answer: ["To create a new instance of the function with specific template arguments"]
    },

    {
        question: "How do you pass arguments to a lambda function in C++?",
        options: ["none of the other choices", "By specifying the argument types in the lambda declaration", "By using the capture keyword followed by the argument list", "By passing the arguments inside the function call parens () after the lambda"],
        answer: ["By passing the arguments inside the function call parens () after the lambda"]
    },

    {
        question: "SELECT ALL statements that are true of string streams:",
        options: [
            "string streams are connected to a different I/O channel than cout and cin",
            "string streams are used to process data line by line",
            "str can be used to set the value of the stringstream buffer",
            "string streams can convert strings to ints or doubles",
            "string streams do not work with the << and >> operators",
            "Like cout and cin, string streams hold data in a buffer."
        ],
        answer: [
            "string streams are used to process data line by line",
            "str can be used to set the value of the stringstream buffer",
            "string streams can convert strings to ints or doubles",
            "Like cout and cin, string streams hold data in a buffer."
        ]
    },

    {
        question: "What is the syntax for calling a lambda in C++?",
        options: ["none of the other choices", "By passing the lambda as a parameter to another function", "By using the call keyword followed by the lambda expression", "By using the function call notation fn () with the lambda as the function fn"],
        answer: ["By using the function call notation fn () with the lambda as the function fn"]
    },

    {
        question: "What is a lambda in C++?",
        options: ["none of the other choices", "A function that takes no arguments and returns no value", "A built-in data type for storing sequences of characters", "A anonymous function object that can be defined inline"],
        answer: ["A anonymous function object that can be defined inline"]
    },

    {
        question: "What happens if you try to call a lambda without capturing any variables?",
        options: ["The compiler will generate a warning message", "none of the other choices", "The lambda will execute with no issues", "The lambda will not compile"],
        answer: ["The lambda will execute with no issues"]
    },

    {
        question: "What happens if you try to use a template class without instantiating it with specific template arguments?",
        options: ["The template parameters will default to their default values", "The code will not compile unless the compiler can infer the template parameters from context", "none of the other choices", "The compiler will allow template arguments to vary at runtime"],
        answer: ["The code will not compile unless the compiler can infer the template parameters from context"]
    },

    {
        question: "How do you capture variables by value in a lambda expression?",
        options: ["By using empty square brackets [] without specifying any variable names", "By using square brackets [&] containing just the ampersand character", "none of the other choices", "By using square brackets [=] containing just the equal character"],
        answer: ["By using square brackets [=] containing just the equal character"]
    },

    {
        question: "What is the purpose of lambda captures in C++?",
        options: ["To specify the return type of the lambda function", "none of the other choices", "To define the input parameters of the lambda function", "To capture and use external variables in the lambda function body"],
        answer: ["To capture and use external variables in the lambda function body"]
    },

    {
        question: "SELECT ALL the following statements that are true.",
        options: [
            "The noexcept keyword is used to promise not to throw exceptions visible to the caller",
            "If an unhandled exception would exit a noexcept function, std::terminate will be called.",
            "It’s up to the programmer to make sure that exceptions are not thrown by functions that should not throw them",
            "void noexcept doSomething() is valid syntax to define a non-throwing function",
            "noexcept prevents the function from throwing exceptions or calling other functions that potentially throw exceptions"
        ],
        answer: [
            "The noexcept keyword is used to promise not to throw exceptions visible to the caller",
            "If an unhandled exception would exit a noexcept function, std::terminate will be called.",
            "It’s up to the programmer to make sure that exceptions are not thrown by functions that should not throw them"
        ]
    },

    {
        question: "What is instantiation in the context of C++ template classes?",
        options: ["The process of overriding template parameters in a class", "The process of creating a concrete class from a template class with specific template arguments", "none of the other choices", "The process of defining a template class"],
        answer: ["The process of creating a concrete class from a template class with specific template arguments"]
    },

    {
        question: "What is a function template in C++?",
        options: ["A type of pointer that can be passed between functions", "A generic function definition that can be instantiated to operate on various specific types", "none of the other choices", "A function that takes in multiple arguments"],
        answer: ["A generic function definition that can be instantiated to operate on various specific types"]
    },

    {
        question: "What happens when an exception is thrown in a function in C++?",
        options: ["none of the other choices", "The program terminates immediately", "The exception is handled and caught within the same function", "The exception is propagated up the call stack until a matching catch block is found"],
        answer: ["The exception is propagated up the call stack until a matching catch block is found"]
    },

    {
        question: "How do you specify template arguments when instantiating a template class in C++?",
        options: ["By using the typename keyword followed by the template argument type", "By using the template keyword followed by the template argument type", "none of the other choices", "By passing the template arguments inside angle brackets after the class name when creating an object"],
        answer: ["By passing the template arguments inside angle brackets after the class name when creating an object"]
    },

    {
        question: "Which of the following is a valid lambda expression in C++?",
        options: ["() {[]}", "none of the other choices", "[](){}", "()[]{}", "{}"],
        answer: ["[](){}"]
    },

    {
        question: "Why convert a function, like max(), to be a template?",
        options: ["To make the function more readable", "To improve performance", "To allow the function to work with different data types", "none of the other choices"],
        answer: ["To allow the function to work with different data types"]
    },

    {
        question: "How do you capture variables by reference in a lambda expression?",
        options: ["By using square brackets [&] containing just the ampersand character", "By using square brackets [=] containing just the equal character", "By using empty square brackets [] without specifying any variable names", "none of the other choices"],
        answer: ["By using square brackets [&] containing just the ampersand character"]
    },

    {
        question: "What happens if an exception is thrown inside a try block in C++, but there is no matching catch block to handle it?",
        options: ["The program terminates with an error message", "The exception is propagated up the function call stack until a matching catch block is found", "The exception is ignored and the program continues execution", "none of the other choices"],
        answer: ["The exception is propagated up the function call stack until a matching catch block is found"]
    },

    {
        question: "SELECT ALL the statements that are true.",
        options: [
            "A friend can access the this pointer.",
            "Both functions and classes can be declared as friend",
            "Overuse of friends violates encapsulation",
            "In order to make a member function a friend, the compiler only needs to have seen a forward declaration."
        ],
        answer: ["Both functions and classes can be declared as friend", "Overuse of friends violates encapsulation"]
    },

    {
        question: "How do you specify template arguments when instantiating a function template in C++?",
        options: ["By passing the template arguments inside angle brackets after the function name", "none of the other choices", "By using the 'typename' keyword followed by the template argument type", "By using the 'template' keyword followed by the template argument type"],
        answer: ["By passing the template arguments inside angle brackets after the function name"]
    },

    {
        question: "How does a try/catch block work in C++?",
        options: [
            "none of the other choices",
            "The try block contains code that may throw an exception, and the catch block contains code to handle the exception if one is thrown while executing the code in the try",
            "The catch block contains code that may throw an exception, and the try block contains code to handle the exception if one is thrown",
            "The try and catch blocks are interchangeable, and can be used in any order"
        ],
        answer: ["The try block contains code that may throw an exception, and the catch block contains code to handle the exception if one is thrown while executing the code in the try"]
    },
];
