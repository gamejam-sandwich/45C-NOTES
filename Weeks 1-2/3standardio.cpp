// std::cin is the standard input
// std::cout is the standard output
// std::endl is the end-of-line sequence

// this << is the "put" operator
#include <iostream>
#include <limits>

void outputting()
{
    int i = 3;
    double d = 12.75;
    std::string s = "Matcha";

    std::cout << i << d << s << std::endl;
    std::cout << s <<" " << d << std::endl;
}

void inputting()
{
    int i;
    double d;
    std::string s;

    // Notice the arrows point in different directions
    std::cin >> i >> s >> d;
    std::cout << i << s << d;
}

void input_alt()
{
    std::string name;
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
    std::cout << "Enter your nickname:  " << std::endl;
    std::getline(std::cin, name);
    std::cout << "Hello, " << name << "!" << std::endl;
}

int main()
{
    outputting();
    //inputting();
    input_alt();
    return 0;
}