#include<stdio.h>
//Write a C program to display information of n employees using Union.
struct emp_details
{
    int emp_id;
    char name[30];
    float salary;
};
union employee_information {
    struct emp_details employee;
};

typedef union employee_information emp;
int main()
{
    emp employee_details;
    //Write a C program to display information of n employees using Union.
    int i,n;
    printf("\nEnter the Number of Employee: ");
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
    printf("\n _____ Enter the Details of Employee ____ \n");
    printf("Enter the Name of Employee:\t");
    scanf("%s",&employee_details.employee.name);
    printf("Enter the ID of Employee:\t");
    scanf("%d",&employee_details.employee.emp_id);
    printf("Enter the Salary of Employee:\t");
    scanf("%f",&employee_details.employee.salary);
    }
    for(i=0;i<n;i++)
    {
    printf("\n_____________*****************_________________\n");
    printf("_____ Entered Employee Details ____ \n");
    printf("Employee Name:\t%s\n", employee_details.employee.name);
    printf("Department ID:\t%d\n", employee_details.employee.emp_id);
    printf("Employee Salary:\t%.2f\n", employee_details.employee.salary);
    }
    return 0;
}
