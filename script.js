function check(event){
   
    event.preventDefault(); // Prevent the form from submitting
    
    // Access the input value
    const inputValue = event.target.userAnswer.value; // Assuming the input has the id 'userAnswer'
     if (inputValue.length == 0) {
        alert("Enter Valid Answer");
        return false;
    }
    alert("From submitted"); // Alert the user that the form was submitted
    console.log(inputValue); // Log the input value
}
