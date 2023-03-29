#include<stdio.h>

//Write a C program to display the following pattern up to n terms
int main()
{
    int i,j,n;
    printf("Enter the Line: ");
    scanf("%d",&n);

    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n-i;j++)
        {
            printf("%c",(char)(j+64));
        }
        printf("\n");
    }
    return 0;
}
