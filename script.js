function check(event){

    event.preventDefault(); // Prevent the form from submitting
    // Access the input value
    const inputValue = event.target.userAnswer.value; // Assuming the input has the id 'userAnswer'
     if (inputValue == 'lego') {
        alert("Answer correct");
        const video = document.getElementById('videoPlayer')
        video.children[0].src = 'cube.mp4'
        video.load()
        return false;
    }
   else{
      alert("Answer incorrect");
        return false;
   }
}
