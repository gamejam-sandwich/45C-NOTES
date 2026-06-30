#include <iostream>
#include <string>
using namespace std;

int main()
{
    // Strings are MUTABLE in C++!!!
    string s = "Jane";
    s.append(" Street");  // Appends characters to existing string
    cout << s << endl;

    // Two ways to access/modify, [] and .at()
    cout << s[5] << endl;
    cout << s.at(5) << endl;
    s[0] = 'j';
    s.at(10) = 'T';
    cout << s << endl;    
    return 0;
}
