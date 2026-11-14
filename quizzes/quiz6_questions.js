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
        code:
`1 #include <iostream>
2 using namespace std;
3
4 struct A
5 {
6     virtual int get_value() { return 1; }
7 };
8
9 struct B: public A
10 {
11     virtual int get_value() { return 2; }
12 };
13
14 struct C: public B
15 {
16     virtual int get_value() { return 3; }
17 };
18
19 struct D: public C
20 {
21     virtual int get_value() { return 4; }
22 };
23
24 int main() {
25     A * ARR[] = { new A, new B, new C, new D };
26     int total = 0;
27     for (auto e : ARR)
28         total += e->get_value();
29     cout << total;
30     for (auto e : ARR)
31         delete e;
32 }`,
        options: ["8", "6", "none of the other choices", "10", "12", "4"],
        answer: ["10"]
    },

    {
        question: "What is the output of the following program?",
        code:
`1 #include <iostream>
2 using namespace std;
3
4 struct Base {
5     Base() { cout << "B"; }
6     ~Base() { cout << "~B"; }
7 };
8 struct Derived: public Base {
9     Derived() { cout << "D"; }
10    ~Derived() { cout << "~D"; }
11 };
12 int main() {
13    Derived d;
14    Base b;
15 }`,
        options: ["none of the other choices", "BDB~B~D~B", "DB~B~D", "BDB~B~D", "DB~B~B~D"],
        answer: ["BDB~B~D~B"]
    },

    {
        question: "What should replace BLANK2 below to properly construct this Student object?",
        code:
`1 #include <string>
2
3 class Person {
4 public:
5     string m_name();
6     int m_age();
7     Person(const string & name = "", int age = 0)
8         : m_name{ name }, m_age{ age }
9     {
10    }
11    const string & get_name() const { return m_name; }
12    int get_age() const { return m_age; }
13 };
14 class Student
15     BLANK1
16 {
17 public:
18     string m_major;
19     Student(string name, int age, string major)
20         BLANK2
21     {
22     }
23 };`,
        options: ["none of the other choices", ": Person{ name, age }, m_major{ major }", ": m_major{ major }, Person{ major, age }", ": m_name{ name }, m_age{ age }, M_major{ major }", ": m_major{ major }", "a blank line"],
        answer: [": Person{ name, age }, m_major{ major }"]
    },

    {
        question: "SELECT ALL Which of the statements in main() will generate a compile-time error?",
        code:
`1 class Base {
2 public:
3     int m_public {};
4 protected:
5     int m_protected {};
6 private:
7     int m_private {};
8 };
9 struct Pub : public Base {
10 };
11
12 int main() {
13     Pub pub;
14     pub.m_public = 1;
15     pub.m_protected = 2;
16     pub.m_private = 3;
17 }`,
        options: ["pub.m_public = 1;", "none, they are all fine", "pub.m_private = 3;", "pub.m_protected = 2;"],
        answer: ["pub.m_private = 3;", "pub.m_protected = 2;"]
    },

    {
        question: "What is the output of the program below?",
        code:
`1 #include <iostream>
2 using namespace std;
3
4 class Base {
5     int m_value;
6 public:
7     Base(int value) : m_value{ value } { }
8     void print() {
9         cout << "B";
10        cout << m_value;
11    }
12 };
13 struct Derived : public Base {
14    Derived(int value) : Base{ value } { }
15
16    void print() {
17        cout << "D";
18        static_cast<Base*>(this)->print();
19    }
20 };
21 int main() {
22    Derived derived { 7 };
23    Base base { 5 };
24    derived.print();
25    base.print();
26 }`,
        options: ["DBDB5", "none of the other choices", "DB7B5", "DB7DB5", "D7B5"],
        answer: ["DB7B5"]
    },

    {
        question: "SELECT ALL Which of the statements in the constructor for Pub will generate a compile-time error?",
        code:
`1 class Base {
2 public:
3     int m_public {};
4 protected:
5     int m_protected {};
6 private:
7     int m_private {};
8 };
9
10 struct Pub: public Base {
11     Pub() {
12         m_public = 1;
13         m_protected = 2;
14         m_private = 3;
15     }
16 };`,
        options: ["m_protected = 2;", "m_public = 1;", "no other choice will generate an error", "m_private = 3;"],
        answer: ["m_private = 3;"]
    },

    {
        question: "What should replace BLANK1 to derive Student from Person so that Student is-a Person?",
        code:
`1 #include <string>
2 class Person {
3 public:
4     string m_name();
5     int m_age();
6     Person(const string & name = "", int age = 0)
7         : m_name{ name }, m_age{ age }
8     {
9     }
10    const string & get_name() const { return m_name; }
11    int get_age() const { return m_age; }
12 };
13 class Student
14     BLANK1
15 {
16 public:
17     string m_major;
18     Student(string name, int age, string major)
19         BLANK2
20     {
21     }
22 };`,
        options: ["none of the other choices", ": Person", ": public Person", ": private Person", "public Person", ": protected Person"],
        answer: [": public Person"]
    },

    {
        question: "SELECT ALL Which of the statements in main() will generate a compile-time error?",
        code:
`1 class Base {
2 public:
3     int m_public {};
4 protected:
5     int m_protected {};
6 private:
7     int m_private {};
8 };
9 int main() {
10     Base base;
11     base.m_public = 1;
12     base.m_protected = 2;
13     base.m_private = 3;
14 }`,
        options: ["base.m_private = 3;", "none, they are all fine", "base.m_protected = 2;", "base.m_public = 1;"],
        answer: ["base.m_private = 3;", "base.m_protected = 2;"]
    },
];
