#include <iostream>
#include <string>
#include <iterator>
// RUN WITH "g++ -std=c++17 wk3.cpp -o main"

void strings() {
    std::cout << "Hello, world!" << std::endl;  // "Hello world!" is a C-style string literal
    std::string empty {};  // Empty string, will print nothing when cout'd

    std::string name {"Alex"};  // Initialized string
    name = "45";  // Strings can be numeric characters too
    name = "John";  // Strings can be reassigned

    std::cout << "Enter your full name: ";
    std::string fullName{};
    std::cin >> fullName;

    std::string color{};
    std::cin >> color;  // Before you have a chance to input color, it prints the final string
    std::cout << "Your name is " << fullName << " and your fav color is " << color << "\n";
    // The above prints "Your name is John and your fav color is Doe"

    // cin reads by whitespace; if input is multiple words, you need...
    // std::getline() and std::ws
    std::cout << "Enter your college: ";
    std::string college{};
    std::getline(std::cin >> std::ws, college);  // Read a full line of text into the var

    std::cout << "Enter the mascot: ";
    std::string mascot{};
    std::cin >> mascot;
    std::cout << "You attend " << college << " with the " << mascot << "\n";
}

const std::string& getMajor() {
    static const std::string major{ "Computer Science" };
    // Major has static duration, destroyed at end of main

    // If it were not static, major is destroyed at then end of this function,
    // and program would crash because an object returned by refrence
    // MUST exist after the function returns.
    return major;
}

class Foo {
// Constructor, no args
public:
    Foo() {
        std::cout << "This is the default Foo constructor\n";
    }
};

class Boo {
// Constructor with args
private:
    int x {};
    int y {};
public:
    Boo(int x=0, int y=0)
        : x{x}, y{y}
    {std::cout << "Boo(" << x << ", " << y << ") constructed\n";}
};

class Goo {
// Constructor overloaded
private:
    int x {};
    int y {};
public:
    Goo(){
        std::cout << "Default Goo constructed\n";
    }
    Goo(int x, int y)  // Do not give it defaults here!!
        : x{x}, y{y}
    {std::cout << "Goo(" << x << ", " << y << ") constructed\n";}
};

void functions() {
    Foo foo{};  // No initialization, calls default foo
    Foo foo2;  // Same thing
    Boo boo1{};  // Calls Boo(int, int) with default args
    Boo boo2{6, 7};  // Calls Boo(int, int) with actual parameters
    Goo goo1{}; // Default goo
    Goo goo2{5, 8};  // Goo with args
    // If no argument is declared at all, the compiler will create an implicit default constructor
}

void arrays() {
    const int arr[] {3, 2, 1};

    std::cout << "Subscripting to get address and values of array\n";
    std::cout << &arr[0] << ' ' << &arr[1] << ' ' << &arr[2] << '\n';
    std::cout << arr[0] << ' ' << arr[1] << ' ' << arr[2] << '\n';

    std::cout << "The same thing using pointer arithmetic\n";
    std::cout << arr << ' ' << (arr+ 1) << ' ' << (arr+ 2) << '\n';
    std::cout << *arr << ' ' << *(arr + 1) << ' ' << *(arr + 2) << '\n';
    // Same outcome, note that "arr" holds the address when printed.

    // Using this logic, we can get the start/end of an array using simple math
    constexpr int myArr[]{ 9, 7, 5, 3, 1 };
    const int* begin{ myArr };  // Points to starting element
    const int* end{ myArr + std::size(myArr) };  // Points to one past end
    for(; begin !=end; ++begin) {  // Iterate [begin, end) aka end - 1
        std::cout << *begin << ' ';  // Dereferencing loop var to get current element
    }
    
    // NOTE: if you pass an array as a parameter to a function, it will
    // decay into a pointer (points at first element) so it can no longer
    // use the std::size() function
}

void pointerArithmetic() {
    int x {};
    const int* ptr{ &x };  // assume 4 byte ints
    std::cout << "Pointer address: " << ptr << '\n';

    ++ptr;
    std::cout << "Pointer address + 1: " << ptr << '\n';

    --ptr;
    std::cout << "New address - 1 is back to original: " << ptr << '\n';
}

int main() {
    //strings();
    std::cout << "My major is " << getMajor() << "\n";
    functions();
    arrays();
    pointerArithmetic();
    arrays();
    return 0;
}