#include<stdio.h>
int fact(int n);
//Write a C program to find factorial of any number using function.
int main()
{
    int number, getfact;
    printf("Enter the Number You want Factorials: ");
    scanf("%d",&number);
    getfact = fact(number);

    printf("Factorial of : %d",getfact);
    return 0;
}

int fact(int n)
{
    int i,f=1;
    for(i=1;i<=n;i++)
    {
        f= f*i;
    }
    return f;
}
