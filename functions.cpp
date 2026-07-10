#include <iostream>
using namespace std;

int timesTwo(int num) {
    // Function that returns a value
    return num*2;
}

void dogWalk(int steps) {
    // Function that doesn't return anything
    for (int step = 1; step <= steps; step++) {
        cout << "dog walked " << step << " steps!" <<endl;
    }
}

void swap_values(int &var1, int &var2) {
    // Interchanges the actual values of the parameters
    // Params MUST have & in front to reference locations
    // The two vars switch memory references
    int temp;
    temp = var1;
    var1 = var2;
    var2 = temp;
}

void add_lists(const int a[], const int b[], int total[], int length) {
    // Const modifier prevents accidentally modifying arrays
    int count;
    for (count = 0; count < length; count++) {
        total[count] = a[count] + b[count];
    };
}

void myfunct(int n) {
    cout << "1 parameter: " << n << endl;
}

void myfunct(int n, int m) {
    cout << "2 parameters: " << n;
    cout << " and " << m << endl;
}

int main(){
    cout << timesTwo(5) << endl;
    dogWalk(3);
    
    cout << "\nPass by reference example" << endl;
    int first_num, second_num;
    first_num = 7;
    second_num = 8;
    cout <<"Before swap: " << first_num << " and " << second_num << endl;
    swap_values(first_num, second_num);
    cout <<"After swap: " << first_num << " and " << second_num << endl;

    cout << "\nPassing arrays as parameters" << endl;
    int first[3] = {4, 5, 6};
    int second[] = {1, 2, 3};
    int empty[3];
    add_lists(first, second, empty, 3);
    for (int i = 0; i < size(empty); i++) {
        cout << first[i] << "+" << second[i] << " = " << empty[i] << endl;
    }

    cout <<"\nFunction overloading" << endl;
    // Functions can have the same name if their params are different
    myfunct(4);
    myfunct(5, 6);

    return 0;
}