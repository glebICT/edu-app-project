function check(event){
   
    event.preventDefault(); // Prevent the form from submitting
    
    // Access the input value
    const inputValue = event.target.userAnswer.value; // Assuming the input has the id 'userAnswer'
     if (inputValue == 'lego') {
        alert("Answer correct");
        return false;
    }
   else{
      alert("Answer incorrect");
        return false;
   }
}
