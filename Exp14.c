#include<stdio.h>
#include<string.h>
int main()
{
    //Write a C program for inbuilt string functions
    //[strlen(),strcat(),strcpy(),strcmp()]

    char language[] = "Hello C Programming";
    puts(language);
    // Finding Length of String
    printf("\nLength of: %zu \n", strlen(language));

    //Copied string into other variables
    char lang1[strlen(language)];
    strcpy(lang1,language);
    printf("\nCopied Sentence: %s", lang1);

    //Concatenates
    char text1[] = "Hey ";
    char text2[] = "How are you!!";
    strcat(text1 ,text2);
    printf("\nConcatenates Sentence: %s", text1);
    strlwr(text1);
    printf("\nLowercase: %s", text1);

    strupr(text2);
    printf("\nUppercase: %s", text2);

    //Compare String
    char comp1[] = "abcde";
    char comp2[] = "efghi";
    //strcmp(text1 ,text2);
    int result = strcmp(text1 ,text2);
    printf("\nCompare String Sentence: %d", result);


      char a[20], b[15];
     printf("\nEnter the first string:");
     scanf("%s",&a);
     printf("\nEnter the second string:");
     scanf("%s",&b);
     strcat(a,b);
     printf("\n after concat: %s ",a);
    return 0;
}
