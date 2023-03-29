#include <stdio.h>
//Write an algorithm and draw flowchart: To add any 2 numbers
int main()
{
    // Declaring Variables
    int first_num, second_num, sum;
//Taking input from user
    printf("Enter the First Number: ");
    scanf("%d", &first_num);
    printf("Enter the Second Number: ");
    scanf("%d", &second_num);
    // Adding value of first and second number
    sum = first_num + second_num;
    printf("Sum of your Entered Number is : %d", sum);
    return 0;
}

