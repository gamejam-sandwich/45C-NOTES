// Reading Quiz Week 4 — ICS 45C
export const quiz4 = [
    {
        question: "SCENARIO: Class String. For Homework 4, the same functionality of class String from Homework 3 is implemented using a dynamically allocated array. The data member inside, also named buf, is now a pointer to an array of char which must be terminated with a null character. Suppose we write a helper function, strdup(const char *s), that returns an exact copy of the C-string pointed to by the parameter s by allocating an array with new[] and copying the characters from s into that new[] storage with strcpy(). Which should replace line 6 (BLANK) to write the proper constructor for String from a C-string s?",
        code:
`1 class String {
2     char *buf;
3 public:
4     static char *strdup(const char *s);
5     String(const char * s)
6          BLANK
7 };`,
        options: ["{ buf = s.buf; s.buf = nullptr; }", ": buf(strdup(s)) { }", ": buf(strdup(s.buf)) { }", "{ buf = nullptr; s.buf = nullptr; return *this; }", "{ delete[] buf;  buf = strdup(s); s.buf = nullptr; }", "{ delete[] buf; buf = strdup(s.buf); s.buf = nullptr; return *this; }", "{ delete[] buf;  buf = strdup(s.buf);  }", "{ delete[] buf; buf = s.buf; s.buf = nullptr; }"],
        answer: [": buf(strdup(s)) { }"]
    },

    {
        question: "SELECT ALL the statements that are true of const objects and member functions.",
        options: ["const member functions can also be called on non-const objects.", "All private and public member functions may be called on const class objects.", "Constructors can be made const.", "A const member function guarantees it will not modify this object or call any non-const member functions."],
        answer: ["const member functions can also be called on non-const objects.", "A const member function guarantees it will not modify this object or call any non-const member functions."]
    },

    {
        question: "Which line inserted for PRINT_ARRAY in line 5 properly prints out the zero values in array A one per line?",
        code:
`1 int main() {
2     int N{0};
3     cin >> N;
4     int *A = new int[N]{};
5     PRINT_ARRAY
6     DELETE_ARRAY
7 }`,
        options: ["for (int e : A) cout << e << endl;", "for (int i=0; i<N; ++i) cout << A[i] << endl;", "for (auto e : A) cout << e << endl;"],
        answer: ["for (int i=0; i<N; ++i) cout << A[i] << endl;"]
    },

    {
        question: "SELECT ALL the statements that are true of const variables.",
        options: ["const variables can be initialized from other variables (including non-const ones).", "const variables may be later changed through assignment.", "const variables must be initialized when you define them.", "Function parameters can be made immutable via the const keyword."],
        answer: ["const variables can be initialized from other variables (including non-const ones).", "const variables must be initialized when you define them.", "Function parameters can be made immutable via the const keyword."]
    },

    {
        question: "SCENARIO: Class String. For Homework 4, the same functionality of class String from Homework 3 is implemented using a dynamically allocated array. The data member inside, also named buf, is now a pointer to an array of char which must be terminated with a null character. Suppose we write a helper function, strdup(const char *s), that returns an exact copy of the C-string pointed to by the parameter s by allocating an array with new[] and copying the characters from s into that new[] storage with strcpy(). Which should replace line 6 (BLANK) to write a proper copy constructor for String from a C-string s?",
        code:
`1 class String {
2     char *buf;
3 public:
4     static char *strdup(const char *s);
5     String(const String & s)
6          BLANK
7 };`,
        options: [": buf(strdup(s.buf)) { }", "{ buf = nullptr; s.buf = nullptr; return *this; }", ": buf(strdup(s)) { }", "{ delete[] buf;  buf = strdup(s.buf);  }", "{ buf = s.buf; s.buf = nullptr; }", "{ delete[] buf;  buf = strdup(s); s.buf = nullptr; }", "{ delete[] buf; buf = strdup(s.buf); s.buf = nullptr; return *this; }", "{ delete[] buf; buf = s.buf; s.buf = nullptr; }"],
        answer: [": buf(strdup(s.buf)) { }"]
    },

    {
        question: "SELECT ALL the code fragments which result in memory leaks.",
        options: [
`int* p{ new int{} };
p = new int{};`,
`int number = 21;
int* p{ new int{} };
p = &number;`,
`int number{ 21 };
int* p{ new int{} };
delete p;
p = &number;`
        ],
        answer: [
`int* p{ new int{} };
p = new int{};`,
`int number = 21;
int* p{ new int{} };
p = &number;`
        ]
    },

    {
        question: "Which line inserted for DELETE_ARRAY in line 6 properly returns the storage for array A to the heap?",
        code:
`1 int main() {
2     int N{0};
3     cin >> N;
4     int *A = new int[N]{};
5     PRINT_ARRAY
6     DELETE_ARRAY
7 }`,
        options: ["delete &A;", "delete[] &A;", "delete A;", "free(A);", "return A;", "free(&A);", "delete[] A;"],
        answer: ["delete[] A;"]
    },

    {
        question: "SCENARIO: Class String. For Homework 4, the same functionality of class String from Homework 3 is implemented using a dynamically allocated array. The data member inside, also named buf, is now a pointer to an array of char which must be terminated with a null character. Suppose we write a helper function, strdup(const char *s), that returns an exact copy of the C-string pointed to by the parameter s by allocating an array with new[] and copying the characters from s into that new[] storage with strcpy(). Which should replace line 6 (BLANK) to write the proper move constructor for String?",
        code:
`1 struct String {
2     char *buf;
3 public:
4     static char *strdup(const char *s);
5     String(String && s)
6          BLANK
7 };`,
        options: [": buf(strdup(s.buf)) { }", "{ delete[] buf;  buf = strdup(s.buf);  }", "{ delete[] buf;  buf = strdup(s); s.buf = nullptr; }", "{ delete[] buf; buf = strdup(s.buf); s.buf = nullptr; return *this; }", ": buf(strdup(s)) { }", "{ buf = s.buf; s.buf = nullptr; }", "{ delete[] buf; buf = s.buf; s.buf = nullptr; }", "{ buf = nullptr; s.buf = nullptr; return *this; }"],
        answer: ["{ buf = s.buf; s.buf = nullptr; }"]
    },

    {
        question: "SELECT ALL the statements that are true.",
        options: ["The heap area of memory is very small.", "The new operator requests memory to be allocated by the compiler.", "The new operator creates another object using heap memory.", "The new operator returns the address of the memory that has been allocated.", "Static and automatic memory allocation are done in the heap."],
        answer: ["The new operator creates another object using heap memory.", "The new operator returns the address of the memory that has been allocated."]
    },

    {
        question: "SELECT ALL that are true of the following code:",
        code:
` 1 #include <iostream>
 2
 3 int userNumber()
 4 {
 5     std::cout << "Enter a number: ";
 6     int b{};
 7     std::cin >> b;
 8
 9     return b;
10 }
11
12 int main()
13 {
14     const int a{ 25 };
15
16     const int b{ userNumber() };
17
18     const int c{ a + b };
19     std::cout << c << '\\n';
20
21     return 0;
22 }`,
        options: ["a is a compile time constant", "The compiler keeps track of whether a const variable is a runtime or compile-time constant.", "b is a compile time constant"],
        answer: ["a is a compile time constant", "The compiler keeps track of whether a const variable is a runtime or compile-time constant."]
    },

    {
        question: "SCENARIO: Class String. For Homework 4, the same functionality of class String from Homework 3 is implemented using a dynamically allocated array. The data member inside, also named buf, is now a pointer to an array of char which must be terminated with a null character. Suppose we write a helper function, strdup(const char *s), that returns an exact copy of the C-string pointed to by the parameter s by allocating an array with new[] and copying the characters from s into that new[] storage with strcpy(). Which should replace line 6 (BLANK) to write the proper copy assignment operator for String?",
        code:
`1 struct String {
2     char *buf;
3 public:
4     static char *strdup(const char *s);
5     String & operator =(const String & s)
6          BLANK
7 };`,
        options: [": buf(strdup(s.buf)) { }", "{ buf = s.buf; s.buf = nullptr; }", "{ delete[] buf; buf = s.buf; s.buf = nullptr; }", "{ delete[] buf; buf = strdup(s.buf); s.buf = nullptr; return *this; }", "{ delete[] buf;  buf = strdup(s.buf); return *this; }", "{ buf = nullptr; s.buf = nullptr; return *this; }", "{ delete[] buf;  buf = strdup(s); s.buf = nullptr; }", ": buf(strdup(s)) { }"],
        answer: ["{ delete[] buf;  buf = strdup(s.buf); return *this; }"]
    },

    {
        question: "SELECT ALL that are true of the following code:",
        code:
` 1 #include <iostream>
 2
 3 void printNum(const int n)
 4 {
 5     std::cout << n << '\\n';
 6 }
 7
 8 int main()
 9 {
10     printNum(100);
11     printNum(9);
12
13     return 0;
14 }`,
        options: ["n cannot change within the scope of printNum()", "It prints\n100\n100", "It prints\n100\n9", "n cannot change within the scope of main()", "There is a compile-time error at line 11"],
        answer: ["n cannot change within the scope of printNum()", "It prints\n100\n9"]
    },

    {
        question: "SCENARIO: Class String. For Homework 4, the same functionality of class String from Homework 3 is implemented using a dynamically allocated array. The data member inside, also named buf, is now a pointer to an array of char which must be terminated with a null character. Suppose we write a helper function, strdup(const char *s), that returns an exact copy of the C-string pointed to by the parameter s by allocating an array with new[] and copying the characters from s into that new[] storage with strcpy(). Which should replace line 6 (BLANK) to write the proper move assignment for String?",
        code:
`1 struct String {
2     char *buf;
3 public:
4     static char *strdup(const char *s);
5     String & operator =(String && s)
6          BLANK
7 };`,
        options: ["{ delete[] buf; buf = s.buf; s.buf = nullptr; return *this; }", "{ delete[] buf;  buf = strdup(s); s.buf = nullptr; }", "{ delete[] buf;  buf = strdup(s.buf);  }", "{ buf = s.buf; s.buf = nullptr; }", ": buf(strdup(s.buf)) { }", ": buf(strdup(s)) { }", "{ delete[] buf; buf = strdup(s.buf); s.buf = nullptr; return *this; }", "{ buf = nullptr; s.buf = nullptr; return *this; }"],
        answer: ["{ delete[] buf; buf = s.buf; s.buf = nullptr; return *this; }"]
    },

    {
        question: "SELECT ALL the statements that are true of const variables.",
        options: ["Proper use of const is important when passing by value.", "A const variable is a compile-time constant if its initializer is a constant expression.", "Variables in the initializer list are initialized in the order that they are specified in the initializer list.", "Proper use of const is important for pass by reference, and pass by address."],
        answer: ["A const variable is a compile-time constant if its initializer is a constant expression.", "Proper use of const is important for pass by reference, and pass by address."]
    },

    {
        question: "SELECT ALL the statements that are true.",
        options: ["Deleting a null pointer is called a dangling pointer.", "Pointers used to hold dynamically allocated memory addresses follow special scoping rules.", "Dynamically allocated heap memory stays allocated until it is explicitly deallocated or until the program ends.", "A pointer holding the address of storage allocated with the new operator can be returned to the heap by calling the delete operator on that pointer.", "A pointer that is pointing to deallocated memory is called a null pointer."],
        answer: ["Dynamically allocated heap memory stays allocated until it is explicitly deallocated or until the program ends.", "A pointer holding the address of storage allocated with the new operator can be returned to the heap by calling the delete operator on that pointer."]
    },
];