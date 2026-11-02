// Reading Quiz Week 5 — ICS 45C
export const quiz5 = [
    {
        question: "Which method for a singly-linked list typically requires two temporary pointers?",
        options: ["search()", "remove()", "size()", "none of the other choices", "isEmpty()", "add()"],
        answer: ["remove()"]
    },

    {
        question: "What might happen if you access L->data or L->next without first ensuring the value of L is not nullptr?",
        options: ["none of the other choices", "the program will get a segfault", "we lose the head of our list and are no longer able to access any of its elements", "the memory for the nodes in this linked list will be lost (leaked)", "it works just fine with no issues"],
        answer: ["the program will get a segfault"]
    },

    {
        question: "What is the output of line 14 below?",
        code:
`1  #include <iostream>
2
3  int main() {
4    int x = 7;
5    int* px = &x;
6
7    std::cout << "x value:  " << x << std::endl;
8    std::cout << "x address: " << &x << std::endl;
9    std::cout << "px points to " << px << std::endl;
10   std::cout << "px dereferenced: " << *px << std::endl;
11   std::cout << "&px is " << &px << std::endl;
12
13   *px = 42;
14   std::cout << "*px is " << *px << std::endl;
15
16   return 0;
17 }`,
        options: ["none of the other choices", "*px is 0xfff000bd4 (or a similar memory address)", "compile time error because px cannot be changed", "*px is 42", "*px is 7"],
        answer: ["*px is 42"]
    },

    {
        question: "Suppose you are writing functions that each require one parameter v. v holds the address of an integer. v cannot be pointed to a different address within the function. The value that v refers to may be read, but not modified, within the function. What is the correct type for v?",
        options: ["const int * v", "none of the other choices", "int & v", "int * v", "const int * const v"],
        answer: ["const int * const v"]
    },

    {
        question: "Assume we have two classes: class Node, which contains data and next, and class List, implemented as a singly linked list, which has one data member named head, which is a pointer to a Node. Which of the following statements are true?",
        options: [
            "Every Node in the list is in various locations in memory, and each Node contains a pointer to the next Node in the list without needing to be otherwise saved in the List class.",
            "none of the other choices",
            "Every Node in the list is in various locations in memory, and those memory addresses are additionally stored in an array inside of the List object, which makes accessing each Node possible.",
            "Every Node in the linked list is exactly one space in memory away from the next, making it possible to find the next Node and traverse through the list.",
            "Every Node is contained within the List class object, making direct access to every Node of the linked list possible."
        ],
        answer: ["Every Node in the list is in various locations in memory, and each Node contains a pointer to the next Node in the list without needing to be otherwise saved in the List class."]
    },

    {
        question: "What C++ statement is most often used to distinguish between base cases and recursive cases when writing a recursive function?",
        options: ["if", "while", "none of the above choices", "for", "assignment"],
        answer: ["if"]
    },

    {
        question: "SELECT ALL of the statements which apply when using recursion to write a function:",
        options: ["must make progress toward the base case", "must use a conditional (e.g., if, switch, ?:)", "must have at least one base case where there is no recursive call", "must have at least one recursive case where the function calls itself", "must use a while loop or for loop statement"],
        answer: ["must make progress toward the base case", "must use a conditional (e.g., if, switch, ?:)", "must have at least one base case where there is no recursive call", "must have at least one recursive case where the function calls itself"]
    },

    {
        question: "Where is the most efficient location to add a new member to a singly-linked list with only a head pointer?",
        options: ["the next element after the head", "none of the above choices", "anywhere in the list, it doesn’t matter", "the head", "the tail"],
        answer: ["the head"]
    },

    {
        question: "Suppose you are writing functions that each require one parameter v. v holds the address of an integer. v can be pointed to a different address within the function, but the integer it points to is not permitted to change. What is the correct type for v?",
        options: ["const int * v", "const int & v", "none of the other choices", "int & v", "const int * const v", "int * v"],
        answer: ["const int * v"]
    },

    {
        question: "Why might we also keep a tail pointer in addition to a head pointer to our singly linked list?",
        options: ["none of the other choices", "to allow more efficient removal of an item from the tail end of a singly linked list", "to allow traversing the singly linked list in reverse", "to allow more efficient adding of new items to the tail end of a singly linked list", "to allow more efficient deleting of linked list nodes"],
        answer: ["to allow more efficient adding of new items to the tail end of a singly linked list"]
    },

    {
        question: "What is the primary purpose of the next member?",
        options: ["to print out the linked list", "to access the nodes following this node in this linked list", "none of the other choices", "to allow moving forward and backward through the nodes of a linked list"],
        answer: ["to access the nodes following this node in this linked list"]
    },

    {
        question: "What is the purpose of the member named data within a linked list node?",
        options: ["none of the other choices", "to record statistics about the linked list", "to store one of the values in this linked list", "to store all of the values in this linked list", "to allow access to the rest of the nodes of linked list", "to provide a pointer to access the linked list"],
        answer: ["to store one of the values in this linked list"]
    },

    {
        question: "Consider the following code fragment that traverses a singly linked list pointed to by the variable head. SELECT ALL of the statements which apply if we use head instead of p to traverse the linked list?",
        code:
`Node *p = head;
while (p != nullptr) {
    std::cout << p->data << ' ';
    p = p->next;
}`,
        options: ["none of the other choices", "it works just fine and there are no issues", "the program will get a segfault", "the memory for the nodes in this linked list will be lost (leaked)", "we lose the head of our list and are no longer able to access any of its elements"],
        answer: ["the memory for the nodes in this linked list will be lost (leaked)", "we lose the head of our list and are no longer able to access any of its elements"]
    },
];