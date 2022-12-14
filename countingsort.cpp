vector<int> countingSort(vector<int> arr) {
    vector<int> result;
    for(int i=0;i<100; i++){
        int count = 0;
        for(int j = 0; j<arr.size(); j++){
            if(arr[j] == i) count++;
        }
        result.push_back(count);
        cout<<result[i]<<" ";
    }
    return result;
}
