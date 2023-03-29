#include<stdio.h>
//Write a program to display result of student. Program should perform following task:
int main()
{
    // Display the Grade on Students according to thier marks
    printf("_____________________*******************____________________ \n");
    //Variables
    float sub1, sub2, sub3, sub4, sub5;
    float total;
    float per;
    printf("______Enter your marks to get your Grade______________ \n");
    printf(" ");
    // Getting Marks of Subjects
    printf("Enter the Mark of Subject 1: ");
    scanf("%f", &sub1);
    printf("Enter the Mark of Subject 2: ");
    scanf("%f", &sub2);
    printf("Enter the Mark of Subject 3: ");
    scanf("%f", &sub3);
    printf("Enter the Mark of Subject 4: ");
    scanf("%f", &sub4);
    printf("Enter the Mark of Subject 5: ");
    scanf("%f", &sub5);

    // Total Marks
    total = sub1 + sub2 + sub3 + sub4 + sub5;
    printf("Your Total Marks %.3f", total);
    printf("\n");


    // Percenage of Students
    per = (total / 500) * 100;
    printf("Your Total Percentage %.3f", per);
    printf("\n");

    // Condition for Checking Grade
        if (per>=85 && per<=100){
            printf("\n Congratulations!!! You Score Grade A \n");
            printf("You are doing Great Job \n");
        }
        else if (per>=60 && per<=84){
            printf("Congratulations!!! You Score Grade B \n");
            printf("You are doing Good Job \nDo More Hard Work \n");
        }
        else if (per>=35 && per<=59){
            printf("Congratulations!!! You Score Grade C \n");
            printf("You are have to Work Really To get Score Good Marks \n");
        }
        else if (per>=0 && per<=34){
            printf("You are Fail \n");
            printf("Better luck nex time \n You have now only thing to study    hard!!! \n");
        }
        else{
            printf("Input Valid Number");
        }
        return 0;
}

