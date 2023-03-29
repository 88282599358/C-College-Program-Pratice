#include<stdio.h>
//Write a program to define structured called Student with following
//members a)Name b)Roll_No c)DOB(date of birth) Write a program to
//read and display information of n students .
struct date
{
    int day;
    int month;
    int year;

};
struct student
{
    int roll_no;
    char students[50];
    struct date dob;
};
int main()
{
    int i,j,n;
    struct student a[50];
    printf("Enter the Number How many students you want to register: ");
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        printf("Enter the Student Name: ");
        scanf("%s",&a[i].students);
        printf("Enter the Student Roll No: ");
        scanf("%d",&a[i].roll_no);
        printf("Enter the Student Date of Birth: ");
        scanf("%d %d %d",&a[i].dob.day,&a[i].dob.month,&a[i].dob.year);
    }
    printf("\n");
    printf("\n_______________________________________________________\n");
    printf("Displaying Information:\n");
    for(j=0;j<n;j++)
    {
        printf("Name:- %s \n",a[j].students);
        printf("Roll no:-%d \n",a[j].roll_no);
        printf("DOB:- %d/%d/%d \n",a[j].dob.day,a[j].dob.month,a[j].dob.year);
        printf("\n");
    }
    return 0;
}
