// Reading Quiz Week 6 — ICS 45C
export const quiz6 = [
    {
        question: "What is the output of the following program?",
        code:
`1 #include <iostream>
2 using namespace std;
3
4 class Base {
5     int X {};
6 public:
7     Base(int x): X{x} { cout << "B"; }
8     ~Base() { cout << "~B"; }
9     void print() const { cout << "B" << X; }
10 };
11 struct Derived: public Base {
12     Derived(int y): Base{y} { cout << "D"; }
13     ~Derived() { cout << "~D"; }
14     void print() const { cout << "P"; }
15 };
16 int main() {
17     Derived d{ 5 };
18     Base b{ 6 };
19     d.print();
20     b.print();
21 }`,
        options: ["none of the other choices", "DBB6~B~D", "BDB5~B~D~B", "BDBPB6~B~D~B", "BDB5B6~B~D~B", "BDBPB5~D~B"],
        answer: ["BDBPB6~B~D~B"]
    },

    {
        question: "What is the output of the program below?",
        code:
`1 #include <iostream>
2 using namespace std;
3
4 struct A {
5     int a;
6     A(int new_a) : a(new_a) { cout << "A" << a; }
7     ~A() { cout << "~A" << a; }
8 };
9 struct B: public A {
10     double b;
11     B(int a, double new_b) : A{ a }, b(new_b) { cout << "B" << b; }
12     ~B() { cout << "~B" << b; }
13 };
14 struct C: public B {
15     char c;
16     C(int a, double b, char new_c) : B{ a, b }, c(new_c) { cout << "C" << c; }
17     ~C() { cout << "~C" << c; }
18 };
19 int main() {
20     C c{ 5, 4.3, 'R' };
21 }`,
        options: ["A5B4.3CR", "none of the other choices", "ABC54.3R~CR~B4.3~A5", "A5B4.3CR~CR~B4.3~A5", "CBA54.3R~CR~B4.3~A5"],
        answer: ["A5B4.3CR~CR~B4.3~A5"]
    },

    {
        question: "What is the output of the program below?",
        options: ["8", "6", "none of the other choices", "10", "12", "4"],
        answer: ["10"]
    },

    {
        question: "What is the output of the following program?",
        options: ["none of the other choices", "BDB~B~D~B", "DB~B~D", "BDB~B~D", "BDB~B~D", "DB~B~B~D"],
        answer: ["BDB~B~D~B"]
    },

    {
        question: "What should replace BLANK2 below to properly construct this Student object?",
        options: ["none of the other choices", ": Person{ name, age }, m_major{ major }", ": m_major{ major }, Person{ major, age }", ": m_name{ name }, m_age{ age }, M_major{ major }", ": m_major{ major }", "a blank line"],
        answer: [": Person{ name, age }, m_major{ major }"]
    },

    {
        question: "SELECT ALL Which of the statements in main() will generate a compile-time error?",
        options: ["pub.m_public = 1;", "none, they are all fine", "pub.m_private = 3;", "pub.m_protected = 2;"],
        answer: ["pub.m_private = 3;", "pub.m_protected = 2;"]
    },

    {
        question: "What is the output of the program below?",
        options: ["DBDB5", "none of the other choices", "DB7B5", "DB7DB5", "D7B5"],
        answer: ["DB7B5"]
    },

    {
        question: "SELECT ALL Which of the statements in the constructor for Pub will generate a compile-time error?",
        options: ["m_protected = 2;", "m_public = 1;", "no other choice will generate an error", "m_private = 3;"],
        answer: ["m_private = 3;"]
    },

    {
        question: "What should replace BLANK1 to derive Student from Person so that Student is-a Person?",
        options: ["none of the other choices", ": Person", ": public Person", ": private Person", "public Person", ": protected Person"],
        answer: [": public Person"]
    },

    {
        question: "SELECT ALL Which of the statements in main() will generate a compile-time error?",
        options: ["base.m_private = 3;", "none, they are all fine", "base.m_protected = 2;", "base.m_public = 1;"],
        answer: ["base.m_private = 3;", "base.m_protected = 2;"]
    },
];