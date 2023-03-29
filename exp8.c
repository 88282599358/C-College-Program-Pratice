#include<stdio.h>
//Write a program to find GCD and LCM of any 2 numbers(Do-While)
int main()
{
    int num1, num2,a,b, lcm;
    printf("Enter the Value of Number_1 : ");
    scanf("%d",&num1);
    printf("Enter the Value of Number_2 : ");
    scanf("%d",&num2);
    a = num1;
    b = num2;

    do{
        if(num1>num2)
        {
            num1 = num1 - num2;
        }
        else{
            num2 = num2 - num1;
        }
    }while(num1 != num2);

    lcm = a*b/num1;
    printf("gcd is: %d \nlcm is: %d", num2,lcm);
    return 0;
}
