#include <iostream>
#include <cmath>
using namespace std;

int main(){
    cout << "----MATH---" << endl;
    cout << (2+3*4) << endl;
    cout << pow(2, 10) << endl;  // 2 to the 10th power
    cout << float(7)/3 << endl;  // 2.333 (float division)
    cout << 7/3 << endl;         // 2 (integer division, like 7//3)
    cout << float(3)/6 << endl;  // 0.5
    cout << 3/6 << endl;         // 0
    cout << 7%3 << endl;         // 1
    cout << 3%6 << endl;         // 3

    cout << "----BOOLEANS---" << endl;
    cout << (true || false) << endl;  // outputs as 1 (true)
    cout << (true && false) << endl;  // outputs as 0 (false)
    /*
     theBool is a boolean with "true" or 1 value
     if we set theBool to any number, it's still 1
     because as long as the number isn't 0, theBool isn't false
     therefore it's true aka 1
    */
    bool theBool = true;
    theBool = 5;
    cout << theBool << endl;

    // STRINGS AND CHARS
    string strvar = "b";
    char charvar = 'b';
    /*
     cout << ('a' == "a") << endl; will error!
      string and chars cannot be directly compared
    */

    cout << "----POINTERS---" << endl;
    int varN = 9;
    int *ptrN = &varN;  // ptrN points to varN address
    /*
     ptrN and &varN are locations
     *ptrN and varN are values

     if you typed "int *ptrN = varN;"
     it would make *ptrN point to memory position 9
     which might not have anything there
    */
    cout << "varN value: " << varN << endl;
    cout << "varN location: " << ptrN << endl;
    cout << "dereference ptrN: " << *ptrN << endl;
    // Dereference means reading data in a pointer's memory location

    cout << "\nThis is how null pointer works below\n";
    int x = 12345;
    int *ptrx = &x;
    while (ptrx) {
        cout << "Pointer ptrx points to " << ptrx << endl;
        ptrx = nullptr;
    }
    cout << "Pointer ptrx points to nothing!\n";

    return 0;
}
