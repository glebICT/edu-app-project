function check(event){

    event.preventDefault(); // Prevent the form from submitting
    // Access the input value
    let score = document.getElementById('score')
    const inputValue = event.target.userAnswer.value; // Assuming the input has the id 'userAnswer'
    const video = document.getElementById('videoPlayer')
    if (inputValue == 'lego') {
        alert("Answer correct");
        score.value = Number(score.value) + 1
      
        video.children[0].src = 'cube.mp4'
        video.load()
        return false;
    }
    if (inputValue == 'cube') {
      alert("Answer correct");
      score.value = Number(score.value) + 1
      // const video = document.getElementById('videoPlayer')
      // video.children[0].src = 'cube.mp4'
      // video.load()
      return false;
  }
   else{
      score.value = Number(score.value) - 1

      alert("Answer incorrect");
        return false;
   }
}
