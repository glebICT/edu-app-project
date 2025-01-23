function check(event){
    alert("From submitted"); // Alert the user that the form was submitted
    event.preventDefault(); // Prevent the form from submitting
    
    // Access the input value
    const inputValue = event.target.userAnswer.value; // Assuming the input has the id 'userAnswer'
    console.log(inputValue); // Log the input value
    // You can add further processing of inputValue here
}
