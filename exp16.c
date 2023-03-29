// C program for implementation of Bubble sort
#include <stdio.h>

void swap(int* xp, int* yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n - 1; i++)

		// Last i elements are already in place
		for (j = 0; j < n - i - 1; j++)
			if (arr[j] > arr[j + 1])
				swap(&arr[j], &arr[j + 1]);
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		printf("%d ", arr[i]);
	printf("\n");
}

// Driver program to test above functions
int main()
{
	int arr[] = { 5, 1, 4, 2, 8 };
    int length = sizeof(arr)/sizeof(arr[0]);
    //Unsorted Array
    printf("Unsorted array: \n");
    for(int i=0;i<length;i++)
    {
        printf("%d ",arr[i]);
    }

    //Sorted Array
	int n = sizeof(arr) / sizeof(arr[0]);
	bubbleSort(arr, n);

	printf("\nSorted array: \n");
	printArray(arr, n);
	return 0;
}
