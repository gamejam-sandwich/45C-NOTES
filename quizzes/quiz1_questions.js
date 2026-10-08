// Reading Quiz Week 1 — ICS 45C
export const quiz1 = [
    {
        question: "What operator gives a variable's memory address in C++?",
        options: ["none of the other choices", "It depends upon the implementation", "the symbol &", "the symbol id", "the symbol *"],
        answer: ["the symbol &"]
    },

    {
        question: "What is the type of the expression A[3]?",
        code:
`string A[] =
    {"what", "is", "the", "size", "of", "this", "array?"};`,
        options: ["const char *", "char", "char[]", "none of the other choices", "std::string"],
        answer: ["std::string"]
    },

    {
        question: "What value does the following code output at line 7?",
        code:
`1 #include <iostream>
2 using namespace std;
3
4 int main(){
5    int foo = 77;
7    cout << &foo << endl;
8    return 0;
9 }`,
        options: ["0", "a memory address, such as 0x7fffeb17da34 which may vary each time the program is run", "none of the other choices", "1", "compile error because foo was not initialized", "77"],
        answer: ["a memory address, such as 0x7fffeb17da34 which may vary each time the program is run"]
    },

    {
        question: "Consider the following program that declares an array of type double named A inside function main. Select ALL statements that are true about this program.",
        code:
`int main()
{
    double A[10];
    for (int i=0; i<10; ++i)
        A[i] = 2.5 * i;
    cout << A[3];
}`,
        options: ["The program prints 10", "The program prints 7.5", "A contains 10 double elements over its entire lifetime", "A initially contains 10 double elements but may be reallocated to a different size at another time"],
        answer: ["The program prints 7.5", "A contains 10 double elements over its entire lifetime"]
    },

    {
        question: "To specify a value of type char in C++, what set of symbols must be used?",
        options: ["' '", "' ' or \" \" may be used", "It depends upon the implementation", "\" \"", "It depends on whether iostream.h was #included", "none of the other choices"],
        answer: ["' '"]
    },

    {
        question: "What is the output of the following C++ program? Pay attention to spaces.",
        code:
`#include <iostream>
using namespace std;
int main() {
    for (int i=0; i<10; ++i)
        cout << i;
    cout << " ";
}`,
        options: ["0 1 2 3 4 5 6 7 8 9 10", "0 1 2 3 4 5 6 7 8 9", "none of the other choices", "0123456789 (followed by a space)", "0123456789 (no space after)", "123456789", "1 2 3 4 5 6 7 8 9"],
        answer: ["0123456789 (followed by a space)"]
    },

    {
        question: "Which of the following is NOT an array of three integers?",
        options: ["int c[3] = {2,6,8};", "int e[3] = {0};", "int b[] = {2,6,8};", "int a[3];", "int d[6] = {2,6,8};"],
        answer: ["int d[6] = {2,6,8};"]
    },

    {
        question: "What is the output of this program?",
        code:
`#include <iostream>
using namespace std;
int main() {
    int grade = 95;
    if (grade < 60) {
        cout << 'F';
    }
    else if (grade < 70) {
        cout << 'D';
    }
    else if (grade < 80) {
        cout << 'C';
    }
    else if (grade < 90) {
        cout << 'B';
    }
    else cout << 'A';
}`,
        options: ["A", "B", "FDCBA", "none of the other choices", "D", "C", "F"],
        answer: ["A"]
    },

    {
        question: "What is the result of 5/2 in C++?",
        options: ["none of the other choices", "2", "3", "2.0", "2.5", "2.50", "a runtime error will occur"],
        answer: ["2"]
    },

    {
        question: "Consider the following code. What is the output of line 12?",
        code:
`1 #include <iostream>
2 using namespace std;
3
4 int main( ) {
5    int courseCode = 35670;
6    int *p = &courseCode;
7
8    while (p != nullptr) {
9        cout << "Pointer p points to " << p << endl;
10       p = nullptr;
11   }
12   cout << "Pointer p points to " << p << endl;
13 }`,
        options: ["Pointer p points to 35670", "none of the other choices", "segfault", "Pointer p points to courseCode", "Pointer p points to 0x7fffa26dfeac", "Pointer p points to 0"],
        answer: ["Pointer p points to 0"]
    },

    {
        question: "How many elements are in the array A?",
        code:
`string A[] = {"what", "is", "the", "size", "of", "this", "array?"};`,
        options: ["6", "8", "7", "compile error", "25"],
        answer: ["7"]
    },

    {
        question: "SELECT ALL statements that are true of the following line of code:",
        code:
`int courseCode = 35760;`,
        options: ["It dereferences a pointer", "It declares a reference", "It is an initialization", "It is a declaration", "It declares a pointer"],
        answer: ["It is an initialization", "It is a declaration"]
    },

    {
        question: "Consider the following code. What is the output of line 9?",
        code:
`1 #include <iostream>
2 using namespace std;
3
4 int main( ) {
5    int courseCode = 35670;
6    int *p = &courseCode;
7
8    while (p != nullptr) {
9        cout << "Pointer p points to " << p << endl;
10       p = nullptr;
11   }
12   cout << "Pointer p points to " << p << endl;
13 }`,
        options: ["Pointer p points to 0x7ffc1156dbdc", "Pointer p points to 35670", "segfault", "Pointer p points to 0", "none of the other choices", "Pointer p points to courseCode"],
        answer: ["Pointer p points to 0x7ffc1156dbdc"]
    },

    {
        question: "What happens in C++ when you index an array out of bounds (where index is either less than zero or greater than N-1 if the array has N elements)?",
        options: ["the array grows to handle the new index", "a compile-time error occurs", "You access memory before or after the array, getting unexpected values or modifying memory that does not belong to the array", "an exception is thrown", "an error message is generated"],
        answer: ["You access memory before or after the array, getting unexpected values or modifying memory that does not belong to the array"]
    },

    {
        question: "What is the output of the following C++ code?",
        code:
`#include <iostream>
using namespace std;
int main(){
    int aNumber = 9;
    aNumber = aNumber + 1;
    bool aBool = true;
    aBool = 9;
    cout << aBool << endl;
    return 0;
}`,
        options: ["1", "none of the other choices", "won't compile", "false", "9", "true", "0", "runtime error"],
        answer: ["1"]
    },
];
