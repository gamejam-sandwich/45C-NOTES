#include <iostream>
using namespace std;

int main(){
    cout << "---CONDITIONALS---" << endl;
    int grade = 85;
    if (grade < 60) {
        cout << 'F' << endl;
    }
    else {  // Else with nested if
        if (grade < 70) {
            cout << 'D' << endl;
        }
        else if (grade < 80) {  // Or easier, else if
            cout << 'C' << endl;
        }
        else if (grade < 90) {
            cout << 'B' << endl;
        }
        else {
            cout << 'A' << endl;
        }
    }

    cout << "Alternatively, there is a switch statement" << endl;
    int score = 85;
    int tempgrade = score/10;
    switch(tempgrade) {
        case 10:
        case 9:  // Like saying 10 && 9
            cout << "The grade is A" << endl;
            break;
        case 8:
            cout << "The grade is B" << endl;
            break;
        case 7:
            cout << "The grade is C" << endl;
            break;
        case 6:
            cout << "The grade is D" << endl;
            break;
        default:  // Like saying else
            cout << "The grade is F" << endl;
    }
    cout << "Switch can only check equality, not comparisons" << endl;


    cout << "---WHILE LOOPS---" << endl;
    int counter = 1;
    while (counter <= 5) {
        cout << "Count: " << counter << endl;
        counter = counter + 1;
    }

    cout << "---FOR LOOPS---" << endl;
    for (int i = 0; i < 2; i++) {
        cout << i + 1 << " fish" << endl;
    }
    cout << "red fish\nblue fish" << endl;

    return 0;
}