#include<stdio.h>
//Write a C program to find the Armstrong numbers in the entered range
int main()
{
    int lower, upper, i,m,rem,result = 0;
    printf("Enter the Lower Number: ");
    scanf("%d",&lower);
    printf("Enter the Upper Number: ");
    scanf("%d",&upper);
    printf("\n Armstrong Numbers are \n");
    for(i=0;i<=upper;i++)
    {
        m=i;
        result =0;
        while(m>0)
        {
            rem=m%10;
            m=m/10;
            result=result+rem*rem*rem;
        }
        if(result==i)
        printf("%d\n",i);
    }
    return 0;
}
