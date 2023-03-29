#include <stdio.h>

int main() {
    int a[3][3], b[3][3], c[3][3], i, j;

    // input matrix a
    printf("Enter elements of matrix a:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    // input matrix b
    printf("Enter elements of matrix b:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            scanf("%d", &b[i][j]);
        }
    }

    // add matrices a and b
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            c[i][j] = a[i][j] + b[i][j];
        }
    }

    // print matrix c (sum of a and b)
    printf("Matrix c (sum of a and b):\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d ", c[i][j]);
        }
        printf("\n");
    }

    // find transpose of matrix c
    int temp;
    for (i = 0; i < 3; i++) {
        for (j = i+1; j < 3; j++) {
            temp = c[i][j];
            c[i][j] = c[j][i];
            c[j][i] = temp;
        }
    }

    // print transpose of matrix c
    printf("Transpose of matrix c:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d ", c[i][j]);
        }
        printf("\n");
    }

    return 0;
}

