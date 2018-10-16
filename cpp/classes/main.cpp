#include <iostream>

using namespace std;

class testClass{

public:
    testClass(){
    cout << "hoi \n"; }

    string text = "Hello world!";
};
int main()
{
    testClass text;

    cout << text.text << endl;
    return 0;
}
