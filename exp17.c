#include<stdio.h>
int power(int x, int y);
//Write a recursive function to find X^Y
int main()
{
    int base, a, result;
    printf("Enter the base Number: ");
    scanf("%d",&base);

    printf("Enter the Second Number: ");
    scanf("%d",&a);
    result = power(base,a);
    printf("Result of %d^%d = %d", base, a, result);

    return 0;
}

int power(int base, int a)
{
        if(a != 0)
        {
            return (base *power(base, a-1));
        }
        else
        {
            return 1;
        }
}
