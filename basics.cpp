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
}


/*
Expressions and statements
*/


// Always runs main
int main()
{
    text();
}