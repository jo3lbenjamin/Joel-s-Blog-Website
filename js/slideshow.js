//Variable declaration so that correct elements are read
var img = document.getElementById('img-gallery');
var number = document.getElementById("number")
// Array to store the images.
var image = ['img/drums/drum6','img/drums/drum2', 'img/drums/drum7', 'img/drums/drum4','img/drums/drum5'];
var i = image.length;
//Next image function that will run whenever button is clicked. Changes to the next image in the array.
function nextImage(){
    //Increase value of i.
	if (i<image.length) {
		i+=1;
	}else{
        //value of i is reset to 1 when it is higher that image.length
		i = 1;
    }
    //Fetch the image from the array
      img.innerHTML = "<img src="+image[i-1]+".jpeg class='img-fluid'>";
      number.innerHTML = i + " / 5";
}
// Previous image function that will run whenever button is clicked. Changes to previous image in the array
function prevImage(){
    //Decrease value of i only when i is lesser that the array length and it is more than 1
	if (i<image.length+1 && i>1) {
		i-=1;
	}else{
        //value of i is reset to 5 when i=0 and when i is greater than image.length
		i = image.length;
    }
    //Fetch the image from the array
      img.innerHTML = "<img src="+image[i-1]+".jpeg class='img-fluid'>";
      number.innerHTML = i + " / 5";
}
//Run this function so that the first image will be displayed
nextImage()
  