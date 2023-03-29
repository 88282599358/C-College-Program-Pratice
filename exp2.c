#include <stdio.h>
#include <conio.h>
#include <math.h>
//Write a C program to find the roots of quadratic equation
int main() {
	    // Declaring Variables
    int a,b,c,d;
    float r1,r2;
//Taking input from user
    printf("Enter the Value of a,b,c: ");
    scanf("%d %d %d",&a,&b,&c);
	//Finding the Underroot part of quadratic equation
    d = b*b-4*a*c;
    if (d>0)
    {
	//Finding the Numerator of quadratic equation in if condition
    r1 = -b + sqrt(d)/(2*a);
    r2 = -b - sqrt(d)/(2*a);
    printf("Roots are real and different = %f %f",r1,r2);
    printf("First  Root Root1= %f\n",r1);
    printf("Second Root root2= %f\n",r2);
    printf("This is d>0");
    }
    else if(d==0)
    {
//Finding the Denominator of quadratic equation in if condition
        r1 = -b/(2.0*a);
        r2 = -b/(2.0*a);
        printf("Roots are real and same = %f %f",r1,r2);
        printf("First  Root Root1= %f\n",r1);
        printf("Second Root root2= %f\n",r2);
        printf("This is d==0");
    }
    else{
        printf("Root are Imaginary;\n No Solution. \n");
    }
    return 0;
}
