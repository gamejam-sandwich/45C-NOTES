// Reading Quiz Week 2 — ICS 45C
export const quiz2 = [
    {
        question: "What is the output of this program?",
        code:
`#include <iostream>
int main()
{
    int x { 5 };
    int& ref { x };
    ++x;
    ++ref;
    std::cout << ref << ' ' << x << '\\n';
}`,
        options: ["6 6", "7 7", "none of the other choices", "5 5"],
        answer: ["7 7"]
    },

    {
        question: "What is the output of the following code?",
        code:
`#include <iostream>
#include <string>
void p(std::string y)
{
    y[0] = 'M';
    std::cout << y;
}
int main()
{
    std::string x { "Hello" };
    p(x);
    std::cout << x << std::endl;
}`,
        options: ["MelloMello", "HelloHello", "none of the other choices", "MelloHello", "HelloMello"],
        answer: ["MelloHello"]
    },

    {
        question: "Select all the values for X and Y that we should use as test cases to ensure all statements in compare() are tested.",
        code:
`#include <iostream>
void compare(int x, int y)
{
    if (x > y)
        std::cout << x << " is greater than " << y << '\\n'; // case 1
    else if (x < y)
        std::cout << x << " is less than " << y << '\\n';    // case 2
    else
        std::cout << x << " is equal to " << y << '\\n';     // case 3
}
int main()
{
    int x{ X };
    int y{ Y };
    compare(x, y);
}`,
        options: ["none of the other answers", "X=0, Y=0", "X=0, Y=1", "X=1, Y=0"],
        answer: ["X=0, Y=0", "X=0, Y=1", "X=1, Y=0"]
    },

    {
        question: "The primary reason to pass parameters by const reference is",
        options: ["none of the other choices", "improved efficiency, by eliminating copying of the argument passed in", "to allow the function to make modification to modifiable lvalues passed in as arguments"],
        answer: ["improved efficiency, by eliminating copying of the argument passed in"]
    },

    {
        question: "According to Learncpp 1.11, Developing your first program, which of the following statements are true?",
        options: [
            "When you are learning C++, it's best to copy/paste code so that you don't introduce errors by typing.",
            "You have to write a program once to know how you should have written it the first time.",
            "Adding one piece at a time makes it easier to interpret compiler error messages.",
            "For the sample program given, storing the doubled number into the same variable as the original user input is the best solution, because it is more efficient.",
            "The first way of coding a solution is almost never the best solution.",
            "Best practice is to write as much of the program as possible all at once, because many pieces interact.",
            "Once a program works correctly, producing correct output, it's done, because correct output is all that matters."
        ],
        answer: [
            "You have to write a program once to know how you should have written it the first time.",
            "Adding one piece at a time makes it easier to interpret compiler error messages.",
            "The first way of coding a solution is almost never the best solution."
        ]
    },

    {
        question: "When member function print() accesses first and second, what is the name of the IntPair object that first and second belong to?",
        code:
`#include <iostream>
struct IntPair
{
    int first{};
    int second{};
    void print()
    {
        std::cout << first << " " << second;
    }
};`,
        options: ["__init__", "the implicit object named self", "the implicit object named this", "any name you choose", "none of the other choices"],
        answer: ["the implicit object named this"]
    },

    {
        question: "Where should the class declaration (or definition) be placed to facilitate reuse in multiple files or projects?",
        options: ["none of the other choices", "In a .cpp file with the same name as the class.", "In a separate header file with the same name as the class.", "Anywhere in the code, as long as the functions are defined outside the class.", "In a .cpp file that includes the header file."],
        answer: ["In a separate header file with the same name as the class."]
    },

    {
        question: "Consider the following program that declares an array of double named A inside its body. Select ALL statements that are true about this program.",
        code:
`#include <iostream>
constexpr int N = 10;
void F(){
    //...
}
int main()
{
    double A[N] = {1.5, 2.5, 3.5, 4.5, 5.5};
    for (int i=0; i<N; ++i)
        std::cout << A[i] << ' ';
    F();
}`,
        options: [
            "A is a 10 element array, and the initial values in array A are {1.5, 2.5, 3.5, 4.5, 5.5, 0.0, 0.0, 0.0, 0.0, 0.0}",
            "A is a 5 element array, and its initial values are unpredictable values",
            "A is a 5 element array, and the initial values are {1.5, 2.5, 3.5, 4.5, 5.5}",
            "A contains 10 double elements over its entire lifetime",
            "A is a 10 element array, and its initial values are unpredictable"
        ],
        answer: [
            "A is a 10 element array, and the initial values in array A are {1.5, 2.5, 3.5, 4.5, 5.5, 0.0, 0.0, 0.0, 0.0, 0.0}",
            "A contains 10 double elements over its entire lifetime"
        ]
    },

    {
        question: "Which of the following ARE valid where the 'here' comment is?",
        code:
`struct Date
{
    int year {};
    int month {};
    int day {};
    void incrementDay()
    {
        ++day;
    }
    int getDay() const
    {
        return day;
    }
};
int main()
{
    const Date eclipse { 2024, 4, 8 };
    Date today { 2024, 4, 7 };
    // here...
}`,
        options: ["today.incrementDay();", "cout << eclipse.getDay() << endl;", "++today.day;", "++eclipse.day;", "eclipse.incrementDay();", "cout << today.getDay() << endl;", "none of the other choices"],
        answer: ["today.incrementDay();", "cout << eclipse.getDay() << endl;", "++today.day;", "cout << today.getDay() << endl;"]
    },

    {
        question: "How do you define a member function outside the class definition?",
        options: ["Declare the function inside the class definition and define it outside using the friend keyword.", "none of the other choices", "Define the function with the class name prefixed using the scope resolution operator ( :: ).", "Simply define the function as a normal function without any class prefix."],
        answer: ["Define the function with the class name prefixed using the scope resolution operator ( :: )."]
    },

    {
        question: "Select all members that are public for class Date.",
        code:
`#include <iostream>
class Date
{
    int year { 2024 };
public:
    int month { 4 };
    void print() const
    {
        std::cout << year << '/' << month << '/' << day;
    }
private:
    int day { 8 };
};`,
        options: ["day", "none of the other choices", "print()", "month", "year"],
        answer: ["print()", "month"]
    },

    {
        question: "Select all of the following statements which are true of the following code.",
        code:
`int main()
{
    int x{ 5 };
    const double d{ 1.2 };
    int y { x };
    const double e { d };
    int w { x + 1 };
}`,
        options: ["d is a non-modifiable lvalue expression", "1.2 is an rvalue expression", "x is a modifiable lvalue expression", "5 is an rvalue expression", "x + 1 is an rvalue expression", "none of the other choices"],
        answer: ["d is a non-modifiable lvalue expression", "1.2 is an rvalue expression", "x is a modifiable lvalue expression", "5 is an rvalue expression", "x + 1 is an rvalue expression"]
    },

    {
        question: "Select all valid definitions for a symbolic constant for PI (the ratio of a circle circumference to its diameter).",
        code:
`#include <iostream>
int main()
{
    // define PI here
    std::cout << "PI is approximately " << PI << std::endl;
}`,
        options: ["double PI = 3.14159;", "PI = 3.14159;", "const double PI;", "const double PI = 3.14159;", "double PI;", "double const PI = 3.14159;"],
        answer: ["const double PI = 3.14159;", "double const PI = 3.14159;"]
    },

    {
        question: "What is the output of the following program?",
        code:
`#include <iostream>
int main()
{
    int x { 5 };
    int& ref { x };
    ++ref;
    std::cout << x << ' ' << ref << std::endl;
}`,
        options: ["5 5", "6 6", "5 6", "none of the other choices", "6 5"],
        answer: ["6 6"]
    },

    {
        question: "What is the output of the following program?",
        code:
`#include <iostream>
class C {
public:
    C() { std::cout << "+"; }
    ~C() { std::cout << "-"; }
};
int main() {
    C a;
    C b;
}`,
        options: ["no output", "--", "++", "+-", "++--"],
        answer: ["++--"]
    },

    {
        question: "What is the output of the following code?",
        code:
`#include <iostream>
struct IntPair
{
    int first{};
    int second{};
    void print()
    {
        std::cout << first << " " << second;
    }
};
int main()
{
    IntPair p1 {1, 2};
    IntPair p2 {3, 4};
    // p1.print();
    p2.print();
}`,
        options: ["none of the other choices", "3 4", "1 2"],
        answer: ["3 4"]
    },

    {
        question: "Given the following variable declarations, what is the value of the expression X / Z + Y / Z?",
        code:
`int X = 19;
double Y = 9.0;
int Z = 2;`,
        options: ["14.5", "13.0", "13.5", "14", "13"],
        answer: ["13.5"]
    },

    {
        question: "What is the output of the following code?",
        code:
`#include <iostream>
class Foo
{
private:
    int x{};
    int y{ 20 };
    int z;
public:
    Foo(int new_x)
        : x{ new_x }, z{0}
    {
    }
    void print() const
    {
        std::cout << x << " " << y << " " << z;
    }
};
int main()
{
    Foo foo{ 10 };
    foo.print();
}`,
        options: ["10 10 0", "10 20 0", "none of the other choices", "10 20 <unpredictable value such as -858993460>"],
        answer: ["10 20 0"]
    },

    {
        question: "What is the output of the following code?",
        code:
`#include <iostream>
#include <string>
void p(std::string& y)
{
    y[0] = 'M';
    std::cout << y;
}
int main()
{
    std::string x { "Hello" };
    p(x);
    std::cout << x << std::endl;
}`,
        options: ["HelloHello", "none of the other choices", "HelloMello", "MelloHello", "MelloMello"],
        answer: ["MelloMello"]
    },

    {
        question: "What type is the variable v1?",
        code:
`int main()
{
    auto v1 { 12 / 4 };
    auto v2 { 12.0 / 4 };
}`,
        options: ["double", "none of the other choices", "int", "char", "float"],
        answer: ["int"]
    },

    {
        question: "What replaces T for ref to be a non-modifiable lvalue reference to x?",
        code:
`#include <iostream>
int main()
{
    int x { 5 };
    T ref { x };
    ++x;
    std::cout << ref << '\\n';
}`,
        options: ["int", "none of the other choices", "const int", "const int&", "const&"],
        answer: ["const int&"]
    },

    {
        question: "What type is the variable v2?",
        code:
`int main()
{
    auto v1 { 12 / 4 };
    auto v2 { 12.0 / 4 };
}`,
        options: ["char", "int", "double", "none of the other choices", "float"],
        answer: ["double"]
    },

    {
        question: "The primary reason to pass parameters by non-const reference is",
        options: ["for efficiency, by eliminating copying of the argument passed in", "to allow the function to make modification to modifiable lvalues passed in as arguments", "none of the other choices"],
        answer: ["to allow the function to make modification to modifiable lvalues passed in as arguments"]
    },

    {
        question: "Select all members that are private for class Date:",
        code:
`class Date
{
    int year { 2024 };
public:
    int month { 4 };
    void print() const
    {
        std::cout << year << '/' << month << '/' << day;
    }
private:
    int day { 8 };
};`,
        options: ["none of the other choices", "month", "day", "print()", "year"],
        answer: ["day", "year"]
    },

    {
        question: "Select all — What is the purpose of defining member functions outside the class definition?",
        options: ["When defined in a source file, to minimize recompilation times when an implementation detail changes.", "none of the other choices", "To separate the public interface from the implementation details.", "To make the class definition more modular and easier to manage."],
        answer: ["When defined in a source file, to minimize recompilation times when an implementation detail changes.", "To separate the public interface from the implementation details.", "To make the class definition more modular and easier to manage."]
    },

    {
        question: "Consider the following program that declares an array of std::string named A inside its body. Select ALL statements that are true about this program.",
        code:
`#include <iostream>
#include <string>
constexpr int N = 10;
void print(std::string P[])
{
}
int main()
{
    std::string A[] = {"foo", "bar", "baz"};
    for (auto s : A)
        std::cout << s << ' ';
    std::cout << std::endl;
}`,
        options: [
            "array A has ten elements",
            "if print(A) is called from main(), print can use for (auto s : P) cout << s; to print the elements of A",
            "it prints foo bar baz",
            "array A has three elements",
            "the initial values in array A are the std::strings {\"foo\", \"bar\", \"baz\"}"
        ],
        answer: [
            "it prints foo bar baz",
            "array A has three elements",
            "the initial values in array A are the std::strings {\"foo\", \"bar\", \"baz\"}"
        ]
    },

    {
        question: "In the following program fragment, what are the values of i and result that are written to cout?",
        code:
`#include <iostream>
int main() {
    int result = 15;
    int i = 15;
    for (i=1; i<=5; ++i) {
        result -= i;
    }
    std::cout << i << " " << result;
}`,
        options: ["0 5", "5 5", "6 5", "6 0", "5 6"],
        answer: ["6 0"]
    },
];
