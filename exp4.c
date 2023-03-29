#include <stdio.h>
//Write a C program for Switch statement to perform all arithmetic operations. (+,-,/,*)
int main()
{
    // Program to Perform Opertion
    // Declaring Varibles
    int _num1, _num2;
    int _opertors;
    printf("______________Opertion on (+),(-),(*),(/)___________________ \n");
    printf(" ");
    // Take input from user
    printf("Enter the First Number: ");
    scanf("%d",&_num1);
    printf("Enter Operator (1 = +),(2 = -),(3 = *),(4 = /): ");
    scanf("%d",&_opertors);
    printf("Enter the Second Number: ");
    scanf("%d",&_num2);

    // performing Opertions
    switch (_opertors)
    {
    case 1:
        printf("Addition of your input number: %d ",_num1+_num2);
        break;
    case 2:
        printf("Subtraction of your input number: %d ",_num1-_num2);
        break;
    case 3:
        printf("Multiplication of your input number: %d ",_num1*_num2);
        break;
    case 4:
        printf("Division of your input number: %d ",_num1/_num2);
        break;
    default:
        printf("Invalid Opertor!!!!");
        break;
    }
    return 0;
}

