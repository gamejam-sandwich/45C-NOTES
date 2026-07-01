/*
Simplest C++ program which returns 0; exit code 0 AKA success
RETURN TYPE: int
NAME: basic
PARAMETERS: () none in this one!
ALTERNATIVE: int basic() { return 0; }
*/
int basic()
{
    return 0;
}


/*
Static type checking;
Before the program runs, compiler ensures value types are valid
*/

// Preprocessor directive; AKA importing a library
#include <iostream>
using namespace std;
int text()
{
    // output stream, string literal, end of line
    std::cout << "Hello Matcha!" << std::endl;
    return 0;
}

/*
Basic built-in data types;
Includes integrals, unsigned integrals, bools, & floating-point numbers
Use sizeof(type) to see memory usage
*/
int variables()
{
    // Signed vars (+-)
    char ch = 'h';  // 8 bits
    short sh = 32000;  // 16 bits
    int i = 2000000000; // 32 bits
    long l = 2000000000L;  // >= 32 bits
    long long ll = 9000000000000000000LL;  // >= 64 bits
    
    // Unsigned vars (+)
    unsigned short us = 65000;

    // Bools
    bool isMatchaYummy = true;
    bool isRainy = false;

    // Floating-point numbers
    float f = 3.14159f;  // 32 bits
    double d = 3.14159; // 64 bits

    return 0;
}


/*
Expressions and statements
*/
int conditional_statements()
{
    // Vars require declaration of type prior to assigning value
    int a = 9;
    double b = 3.0;
    int c = 0;
    int d = 0;
    if (a < 100)
    {
        std::cout << "while loop example" << std::endl;
        while (c < 3)
        {
            std::cout << c << std::endl;
            c++;
        }
    }
    if (a > 8)
    {
        std::cout << "do...while example" << std::endl;
        do
        {
            std::cout << d << std::endl;
            d++;
        }
        while (d < 3);
    }
    if (a == 9)
    {
        std::cout << "for loop example" << std::endl;
        for (int e = 0; e < 3; e++)
        {
            std::cout << e << std::endl;
        }
    }
    return 0;
}


/*
Assignments, lvalues, rvalues
lvalue is the value on the left
rvalue is the value on the right

Not legal vvv
 3 = a
 b + c = a
*/

// void square (int n)  if it didn't return a value
string square(int n)
{
    string text = "The square of " + std::to_string(n) + " is " + std::to_string(n*n);
    return text;
}


// Always runs main
int main()
{
    text();
    conditional_statements();
    std::cout << square(4) << std::endl;
    return 0;
}