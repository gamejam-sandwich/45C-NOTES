#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;


void checker(unordered_set<char> set, char letter) {
    // This will be used for sets example later
    // Checks if a char is in the unordered set
    if (set.find(letter) == set.end()) {
        cout << "letter " << letter << " is not in the set." << endl;
    }
    else {
        cout << "letter " << letter << " is in the set." << endl;
    }
}

int main(){
    cout << "---ARRAYS---" << endl;
    // Statically allocated
    double darray[4];
    int iarray[10];
    char arr2[3000];
    int arr[] = {1, 2, 3, 4}; // Size 4

    int myarray[] = {2, 4};
    int otherdata[] = {777, 777};
    cout << "myarray" << endl;
    for (int i=0; i < 4; i++) {
        myarray[i] = 0;
        cout << myarray[i]<< endl;
        cout << "add:" << &myarray[i] << endl;
    }
    cout << "otherdata overridden bc/ myarray went out of bounds\n";
    for (int i = 0; i < 2; i++) {
        cout <<"otherdata["<< i << "]=";
        cout << otherdata[i]<< endl;
        cout << "add:" << &otherdata[i] << endl;
    }


    cout << "---VECTORS---" << endl;
    // More similar to Python lists than arrays
    // Dynamically sized, meaning their size can auto change
    vector<int> v = {8, 4, 5, 9};
    cout << "Value at index 2: " << v[2] << endl;
    v[2] = 3;
    cout << "Assign 3 to index 2: " << v[2] << endl;
    v.push_back(10);
    cout << "Append 10 to end of vector: " << v[v.size() - 1] << endl;
    v.pop_back();
    cout << "Delete last item: " << v[v.size() - 1] << endl;
    v.insert(v.begin(), 3);  // First param is an iterator, not an index
    cout << "Insert 3 at index 0: " << v[0] << endl;
    cout << "Reserve requests space in memory if u know how much u need\n";
    vector<int> intvector;
    intvector.reserve(10);
    for (int i = 0; i < 10; i++) {
        intvector.push_back(i);
        cout << intvector[i] << "   ";
        cout << "capactiy: " << intvector.capacity() << endl;
    }
    cout << "But this happens if you don't request space\n";
    vector<int> badvector;
    for (int i = 0; i < 10; i++) {
        badvector.push_back(i);
        cout << badvector[i] << "   ";
        cout << "capacity: " << badvector.capacity() << endl;
    }
    cout << "It grows automatically but exponentially" << endl;


    cout << "---STRINGS---" << endl;
    char cppchar = 'a';  // char values use single quotes
    string cppstring = "Hello World!";  // strings use double quotes
    char cstring[] = {"Hello World!"};  // cstring aka char array
    // Examples
    cout << cppstring[0] << " is the first character\n";
    cppstring[0] = 'h';
    cout << cppstring[0] << " is now the first character\n";
    string otherstring = " I'm Bob";
    cout << cppstring + otherstring + "\n";  // Concatenating strings
    cout << cppstring.append(otherstring) + "\n";  // Append str to end of string
    otherstring.push_back('!');  // Append char to end of string
    cout << otherstring + "\n";
    otherstring.pop_back();  // Deletes the last char
    cout << otherstring + "\n";
    otherstring.insert(0, "Hello,");
    cout << otherstring + "\n";
    otherstring.erase(0, 7);  // Erase from index a to index b
    cout << otherstring + "\n";
    cout << "o first appears at index " << otherstring.find('o');
    cout << "\n" << otherstring.size() << endl;

    cout << "---HASH TABLES---" << endl;
    /*
    Hash table: collection of items with key and value
    Hash function: returns location of associated value when given key
    Unordered map: C++ version of dictionaries
    */
    unordered_map<string, string> spnumbers;
    // one maps to uno, two maps to dos, etc.
    spnumbers = { {"one", "uno"}, {"two", "dos"} };
    spnumbers["three"] = "tres";
    spnumbers["four"] = "cuatro";
    cout << "one is " << spnumbers["one"] << endl;
    cout << spnumbers.size() << endl;
    
    for (auto i=spnumbers.begin(); i!=spnumbers.end(); i++){
        // auto automaticaly detects datatype
        // when a variable is declared
        cout << i->first << ": ";
        cout << i->second << endl;
    }

    unordered_map<string, string> mymap;
    mymap = { {"apple", "red"}, {"kumquat", "orange"} };
    cout << mymap["apple"] << endl;  // Outputs value associated with key
    cout << "apple appears " << mymap.count("apple");
    cout << " times\n";
    mymap.erase("apple");  // No more apples
    // These two are used for traversal (as seen above)
    mymap.begin();  // Creates iterator pointing to first element
    mymap.end();  // Points to theoretical element after last element


    cout << "---UNORDERED SET---" <<endl;
    // Items in set are immutable but can be inserted/removed
    // No duplicates allowed
    unordered_set<char> charSet = {'d', 'c', 'b', 'a'};
    char letter = 'e';
    checker(charSet, letter);
    charSet.insert('e');
    checker(charSet, letter);

    return 0;
}
