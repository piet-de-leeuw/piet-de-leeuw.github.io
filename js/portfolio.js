var isClosed = true; // Determines if the popup form is closed.

// Opens and closes popup form. \\
function OpenCloseForm()
{
    // Displays popup form id isclosed is true and set isClosed to false so the next time OpenClose function is called it ignores this if-statement. 
    if(isClosed) 
    {
        document.getElementById("myform").style.display= "block";
        isClosed = false;
        return 
    }
    
    //This part is only executed if isClosed is false. it hiddes the form.
    document.getElementById("myform").style.display= "none";
    isClosed = true;
}

// Controls for slideshow \\
var slideIndex = 1; // This stores the currend displayed slide.
SetSlide(slideIndex); // SetSlide() is called to display the default slide.

// This calls the previous or next slide. (called by the previous or by the next button.)
function PlusSlide(slideNumber)
{
    SetSlide(slideIndex += slideNumber);
}

// This changes the slides if one of the dots is clicked.
function CurrentSlide(slideNumber)
{
    SetSlide(slideIndex = slideNumber);
}


function SetSlide(slideNumber)
{
    var allSlides = document.getElementsByClassName("my-slide"); // A array that stores all slide elements with class my-slide.
    var dots = document.getElementsByClassName("dot"); // A array that stores all dots elements with class dot.
    
    if(slideNumber > allSlides.length) {slideIndex = 1}; // If we go beyond the the last slide return to the first slide.
    if(slideNumber < 1) {slideIndex = allSlides.length}; // If we go below the first slide go to the last slide.

    for (i = 0; i < allSlides.length; i++) // Loops throug all slides an hides them. making shure only 1 slide can be displayed as we change slides.
    {
        allSlides[i].style.display = "none";
    }

    for(i = 0; i < allSlides.length; i++) // Loops through all dots and markes them as inactive making shure only 1 dot can be presented as active.
    {
       dots[i].className = dots[i].className.replace(" active", "")
    }

    allSlides[slideIndex - 1].style.display = "block"; //displayes the active slide in the slideshow.
    dots[slideIndex - 1].className += " active"; // adds active to the class of the active dot to display it as active.
}

// Close popup form if we click anywere outside of it.\\
// Add an eventListener for any click in our website.
document.addEventListener("click", function(event) {
    if(isClosed === true) {return;} // Ignores the rest of this code if the popup form already is closed making shure we dont open it if we click anyware outsite of the contact buttons. 
    //if we click the cancel button or anywere outsite of the popupform we close it. 
    if(event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".pop-up-button") && !event.target.closest(".contact"))
    {
        OpenCloseForm();
    }
})