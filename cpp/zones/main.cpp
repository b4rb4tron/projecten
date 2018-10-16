#include <iostream>
#include <stdio.h>      /* printf */
#include <math.h>       /* remainder */
using namespace std;




int main()
{
    int min, max;
    cout << "Heart rate zone calculator \n" << endl;
    cout << "minimum heart rate:" ;
    cin >> min;
    cout << "maximum heart rate:" ;
    cin  >> max;
    cout << endl ;


    int z60 = (max - min) * 0.6 + min;
    int z70 = (max - min) * 0.7 + min;
    int z75 = (max - min) * 0.75 + min;
    int z80 = (max - min) * 0.8 + min;
    int z85 = (max - min) * 0.85 + min;

    cout << "60% =" << z60 << endl;
    cout << "70% =" << z70 << endl;
    cout << "75% =" << z75 << endl;
    cout << "80% =" << z80 << endl;
    cout << "85% =" << z85 << endl << endl;

    cout << "zones: \n";
    cout << "zone 0: "<<  min << "-" << round((max - min) * 0.4 + min) << endl;
    cout << "zone 1: "<<  round((max - min) * 0.4 + min)  << "-" << round((max - min) * 0.52 + min) << endl;
    cout << "zone 2: "<<  round((max - min) * 0.52 + min) << "-" << round((max - min) * 0.64 + min) << endl;
    cout << "zone 3: "<<  round((max - min) * 0.64 + min) << "-" << round((max - min) * 0.76 + min) << endl;
    cout << "zone 4: "<<  round((max - min) * 0.76 + min) << "-" << round((max - min) * 0.88 + min) << endl;
    cout << "zone 5: "<<  round((max - min) * 0.88 + min) << "-" << max << endl;

    return 0;
}
