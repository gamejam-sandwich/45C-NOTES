#include <iostream>
#include <vector>
using namespace std;

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
    

    return 0;
}