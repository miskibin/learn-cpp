#include<iostream>

using namespace std;

int main()
{
    const int AGE = 20;
    int* a = new int;
    *a = 10;
    a = &AGE;
    
    return 0;
}