//#include<stdio.h>
//int main()
//{
//    //Write a C program to find out the Fibonacci series of given number entered by user.
//    int num1 = 0,  num2 = 1, num3, count, num;
//    printf("Enter the Number of terms to be printed: ");
//    scanf("%d",&num);
//    printf("\n%d\n%d\n",num1, num2);
//    for (count =1 ; count<=num;count++)
//    {
//        num3 = num1 + num2;
//        printf("%d\n",num3);
//
//        num1 = num2;
//        num2 = num3;
//    }
//    return 0;
//}

#include<stdio.h>
int fib(int n);
int main()
{

    int n;
    printf("Enter How many terms you want to see: ");
    scanf("%d",&n);
    printf("Fibonacci Number is: %d",fib(n));
    return 0;
}
int fib(int n)
{
    if(n==1){
        return 0;
    }
    else if(n==2)
    {
        return 1;
    }
    else{
       return fib(n-1)+fib(n-2);
    }
}

