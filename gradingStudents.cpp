vector<int> gradingStudents(vector<int> grades) {
    int gradesSize = grades.size(); 
    vector<int> finalGrades(gradesSize);
    
    for(int i = 0; i <gradesSize; i++){
          if((5 - (grades[i] % 5) < 3) && grades[i] >=38){
          finalGrades[i] = (grades[i] + (5 - (grades[i] % 5)));    
          } 
          else finalGrades[i] = grades[i];    
    }
    
    return finalGrades;    
}
