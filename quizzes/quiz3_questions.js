// Reading Quiz Week 3 — ICS 45C
export const quiz3 = [
    {
        question: "What is the output of line 8 in the code below?",
        code:
`1  #include <iostream>
2
3  int main()
4  {
5      char name[10]{ "Alex" };
6      std::cout << "My name is: " << name << '\\n';
7      name[5] = 'a';
8      std::cout << name << '\\n';
9      return 0;
10 }`,
        options: ["Alex", "none of the other choices", "Alexa", "compiler generates an error", "Alex0a0000"],
        answer: ["Alex"]
    },

    {
        question: "What is the output of line 10?",
        code:
`1  #include <iostream>
2  #include <cstring>
3  #include <iterator> // for std::size
4
5  int main()
6  {
7      char name[50]{ "Klefstad" };
8      std::cout << "My name is: " << name << '\\n';
9      std::cout << "name has " << std::strlen(name) << " characters.\\n";
10     std::cout << "name has " << std::size(name) << " characters in the array.\\n";
11     return 0;
12 }`,
        options: [
            "name has 9 characters in the array.",
            "name has 8 characters in the array.",
            "none of the other choices",
            "name has 50 characters in the array."
        ],
        answer: ["name has 50 characters in the array."]
    },

    {
        question: "What happens in the scenario below if the user enters more than 254 characters?",
        code:
`1  #include <iostream>
2
3  int main()
4  {
5      char name[255] {};
6      std::cout << "Enter your name: ";
7      std::cin >> name;
8      std::cout << "You entered: " << name << '\\n';
9
10     return 0;
11 }`,
        options: [
            "The program ignores the values past 254 characters, not writing them to memory.",
            "The array grows to accommodate the length of the user's input.",
            "The program ignores the values past 255 characters, not writing them to memory.",
            "It overruns the end of array and writes into memory beyond the array, corrupting memory.",
            "An exception is thrown."
        ],
        answer: ["It overruns the end of array and writes into memory beyond the array, corrupting memory."]
    },

    {
        question: "SELECT ALL: What statements are true of making copies of C-style strings?",
        options: [
            "strncpy() doesn't ensure strings are null terminated, leaving plenty of room for array overflow.",
            "strcpy() is preferred because it carefully prevents array overflows.",
            "none of the other choices",
            "strcpy_s() adds an ugly #define parameter to define the size of the destination, and not all compilers support this function.",
            "strlcpy() is non-standard, and thus not included in a lot of compilers."
        ],
        answer: [
            "strncpy() doesn't ensure strings are null terminated, leaving plenty of room for array overflow.",
            "strcpy_s() adds an ugly #define parameter to define the size of the destination, and not all compilers support this function.",
            "strlcpy() is non-standard, and thus not included in a lot of compilers."
        ]
    },

    {
        question: "What is the output of line 9?",
        code:
`1  #include <iostream>
2  #include <cstring>
3  #include <iterator> // for std::size
4
5  int main()
6  {
7      char name[50]{ "Klefstad" };
8      std::cout << "My name is: " << name << '\\n';
9      std::cout << "name has " << std::strlen(name) << " characters.\\n";
10     std::cout << "name has " << std::size(name) << " characters in the array.\\n";
11     return 0;
12 }`,
        options: [
            "none of the other choices",
            "name has 8 characters.",
            "name has 9 characters.",
            "name has 50 characters."
        ],
        answer: ["name has 8 characters."]
    },

    {
        question: "What is the result of the following code?",
        code:
`1  #include <cstring>
2  #include <iostream>
3
4  int main()
5  {
6      char original[]{ "The original!" };
7      char copy[5];
8      std::strcpy(copy, original);
9      std::cout << copy << '\\n';
10
11     return 0;
12 }`,
        options: [
            "The compiler will always give a warning about a potential buffer overrun.",
            "segfault",
            "It prints The original!",
            "throws an exception",
            "none of the other choices",
            "It may print The original! but it has corrupted memory due to array overflow."
        ],
        answer: ["It may print The original! but it has corrupted memory due to array overflow."]
    },

    {
        question: "What is the (logical) length of the array name below, which will be returned by strlen(name)?",
        code:
`char name[]{ "klefstad" };`,
        options: ["9", "can vary at different points of execution", "none of the other choices", "7", "8"],
        answer: ["8"]
    },

    {
        question: "SELECT ALL the statements that are true of C-strings.",
        options: [
            "When printing a C-style string, std::cout << arrayName prints all characters in the complete allocation of the size of arrayName.",
            "When comparing two C-strings for equality, loop as long as they are equal and non-null.",
            "A C-string named firstName may be changed by assignment thusly: firstName = \"raymond\";",
            "The strlen() function returns the length of the C-style string (without the null terminator)."
        ],
        answer: [
            "When comparing two C-strings for equality, loop as long as they are equal and non-null.",
            "The strlen() function returns the length of the C-style string (without the null terminator)."
        ]
    },

    {
        question: "SELECT ALL: Which of the following ways indicate the end of a C-string?",
        options: [
            "ASCII code 0",
            "a null terminator",
            "The end of a C-string is not indicated; the programmer must keep track of the index of the last character in the C-string.",
            "\"\\0\"",
            "'\\0'"
        ],
        answer: ["ASCII code 0", "a null terminator", "'\\0'"]
    },

    {
        question: "After the null character is inserted in the 5th element of name in line 9 in the code below, which for loop would print out \"Hello\"?",
        code:
`1  #include <iostream>
2  #include <iterator>
3  using namespace std;
4
5  int main()
6  {
7      constexpr int size = 20;
8      char name[size] {"Hello World"};
9      name[5] = '\\0';
10     // for loop here
11 }`,
        options: [
            "for (int i=0; i<size; ++i)  cout << name[i];",
            "for (int i=0; i<(int)sizeof(name); ++i)  cout << name[i];",
            "for (int i=0; name[i] != '\\0'; ++i)  cout << name[i];",
            "for (auto c : name) cout << c;",
            "none of the other choices"
        ],
        answer: ["for (int i=0; name[i] != '\\0'; ++i)  cout << name[i];"]
    },
];
