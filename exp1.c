#include<stdio.h>
#include<math.h>
//Write a C program to find areas of triangle
int main()
{
    // Declaring Variables
    double a,b,c,d,area;
//Taking input from user
    printf("Enter the side of Triangle: ");
    scanf("%lf %lf %lf", &a,&b,&c);
// Applying logic to find d (side)
    d = (a+b+c)/2;
	//Applying Logic to find Area of sides of triangle
    area = sqrt(d*(d*a)*(d*b)*(d*c));
    printf("Area of the triangle = %.3lf\n", area);
    return 0;
}
