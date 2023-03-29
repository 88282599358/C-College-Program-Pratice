#include <stdio.h>
#include <string.h>
int main()
{
    // Write a program to check whether entered string is a palindrome or not.
    char string1[20];
    int i, length;
    int flag = 0;

    printf("Enter the String: ");
    scanf("%s",&string1);

    length = strlen(string1);
    for(i=0;i<length;i++)
    {
        if(string1[i] != string1[length-i-1])
        {
            flag = 1;
            break;
        }
    }
    if (flag)
    {
        printf("%s is not a palindrome", string1);
    }
    else{
        printf("%s is a palindrome", string1);
    }

    return 0;
}
//Explanation:- Suppose we have 5 char(a,b,c,b,a) and one null char \0 means we have int 5 and
//there is 2 char which change position means 5/2 so it will come 2 because in int it will not give 2.5
// So we have to exchange there position and check it is happens or not
