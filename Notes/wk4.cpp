#include <iostream>
#include <string>
#include <iterator>
using namespace std;
// RUN WITH "g++ -std=c++17 wk4.cpp -o main"

int examples_of_literals() {
    bool myNameIsMeredith{true};  // true is a boolean literal
    double d{3.4};  // 3.4 is a double literal
    cout << "Hello world";  // "Hello world" is C-style string literal
    return 5;  // 5 is integer literal
    // Literals cannot be redefined (like 5 always equals 5)
}

void floating_point_literals() {
    // Integrals don't need suffixes, but floats should
    // By default, they're doubles, so use f/F suffix
    cout << 5.0 << '\n';  // Type: double
    cout << 5.0f << '\n';  // Type: float
    float f {4.1f};
    double avogadro{6.02e23}; // Scientific notation (6.02 x 10^23)
}

void ternary() {
    int x = 5;
    int y = 3;
    int max;
    if (x > y)
        max = x;
    else
        max = y;

    // Can be rewritten as:
    max = ((x > y) ? x : y);
    // (condition) ? max = x : else max = y
}

class Fraction
{
private:
    int num{ 0 };
    int den{ 1 };
public:
    // Default constructor
    Fraction(int numer=0, int denom=1)
        : num{numer}, den{denom}
        {}
    // Copy constructor
    Fraction(const Fraction& fraction)
        : num{fraction.num}, den{fraction.den}
        {}
    void print() const
    {
        cout << "Fraction(" << num << ", " << den << ")\n";
    }
};

int main()
{
    Fraction f {5, 3};  // Original object
    Fraction fCopy {f};  // The object you want to copy as parameter
    f.print();
    fCopy.print(); // Prints the same thing as above
    return 0;
}