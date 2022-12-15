void selectionSort(int arr[], int n)
{
   for(int i = 0; i< n-1; i++){
       int min = arr[i];
       int minCounter = i;
       for(int j=i+1; j<n; j++){
         if(min > arr[j]) {minCounter = j;
             min = arr[j];
         }
       }
       swap(&arr[i], &arr[minCounter]);
   }
}
