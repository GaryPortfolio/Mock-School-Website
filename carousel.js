// passed in variable
let next = 1;
//function call to help buttons operate based on passed in variable
proceed(next);

//function parameter takes number passed in from home html file
function moveSlide(page){
    //function call to control the carousel and how images are displayed
    proceed(next += page);
}

function proceed(page){
    //variables to save the object
    let slideNum = document.getElementsByClassName("images");
    let backBlur = document.getElementsByClassName("imageBlur");
    //if the slideshow goes past the first page
    if (page < 1){
        //set the next page to the left of the first page to be the last page
        next = slideNum.length;
    }
    //if the page is already the last page
    if(page > slideNum.length){
        //set the next page to the right to be the first page
        next = 1;
    }
    //for loop to loop through carousel of images
    for(let i = 0; i < slideNum.length; i++){
        //sets the entire carousel to hide each image
        slideNum[i].style.display = "none";
        backBlur[i].style.display = "none";
    }
    //displays the image each time left or right button is clicked
    slideNum[next-1].style.display = "block";
    backBlur[next-1].style.display = "block";
}
