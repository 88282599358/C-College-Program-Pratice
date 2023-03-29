#include<stdio.h>
int main()
{
    // This is Wrong See Exp 12 for Logic and better undertstanding
    //Write a C program to addition 3*3 matrix and find the transpose of it.
    int matrix1[3][3],matrix2[3][3],add[3][3],i,j;
//    printf("Enter the first element(any 9 number): ");
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            printf("Enter the first element a%d%d: ",i + 1, j + 1);
            scanf("%d",&matrix1[i][j]);
        }
    }

    printf("\n___________________________________________________________________\n\n");
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            printf("Enter the Second element a%d%d: ",i + 1, j + 1);
            scanf("%d",&matrix2[i][j]);
        }
    }
    printf("\n*************************************************************\n");
    printf("Resultant Matrix are as follows: \n");
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            add[i][j]  = matrix1[i][j] + matrix2[i][j];
            printf("%d\t",add[i][j]);
        }
        printf("\n");
    }
    printf("Transpose of Matrix is: \n");
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            add[i][j]  = add[j][i];
            printf("%d\t",add[j][i]);
        }
        printf("\n");
    }
    return 0;
}
