export const quizData = [
    {
        question: "What operator gives a variable’s memory address in C++?",
        options: ["it depends upon the implementation", "the symbol &", " the symbol id", " the symbol *"],
        answer: "the symbol &"
    },
    {
        question: "What is the type of the expression A[3]?",
        code: `string A[] =
        {"what", "is", "the", "size", "of", "this", "array?"};`,
        options: ["const char *", "char", "char[]", "std::string"],
        answer: "std::string"
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
    options: ["a memory address, such as  0x7fffeb17da34 which may vary each time the program is run", "1", "compile error because foo was not initialized", "77"],
    answer: "a memory address, such as  0x7fffeb17da34 which may vary each time the program is run"
    },
    {
        question: "Consider the following program that declares an array of type double named A inside function main.  Select ALL statements that are true about this program.",
        code:
        `int main()
{
    double A[10];
    for (int i=0; i<10; ++i)
        A[i] = 2.5 * i;
    cout << A[3];
}`,
    options: ["The program prints 10", "The program prints 7.5", "A contains 10 double elements over its entire lifetime", "A contains 10 double elements at first but may be reallocated to a different size any time"],
    answer: "The program prints 7.5"
    },
];