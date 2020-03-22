//Student interface - main.js

//This functions displays the dropdown options for the profile button
function hideOnClickOutside(element, display) {
    var x = document.getElementById(element)
    var y = document.getElementById(display)
    x.style.display = "block";
    const outsideClickListener = event => {
        if (!y.contains(event.target) && isVisible(x)) { 
          x.style.display = "none";
          removeClickListener();
        }
    }
    const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener);
    }
    document.addEventListener('click', outsideClickListener)
}
const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );


//This function displays hidden elements for the Forums page
function displayHidden(thread) {
    var t1 = document.getElementById("thread1");
    var t2 = document.getElementById("thread2");
    var t1_box = document.getElementById("threadbox1");
    var t2_box = document.getElementById("threadbox2");

    if (thread == "thread1") {
        if (t1.style.display === "none") {
            t1_box.style.background = "#D5F5CD";
            t2_box.style.background = "none";
            t1.style.display = "block";
            t2.style.display = "none";
        }
    }
    else {
        if (t2.style.display === "none") {
            t2_box.style.background = "#D5F5CD";
            t1_box.style.background = "none";
            t2.style.display = "block";
            t1.style.display = "none";
        } 
    }
}


//This function displays hidden elements for the Announcements page
function toggleDisplayAnn(x, z) {
    var x = document.getElementById(x);     // the folder button
    var z = document.getElementById(z);     // the folder display
    var box = ["annbox1", "annbox2", "annbox3"];
    var display = ["ann1", "ann2", "ann3"];

    for (let i = 0; i < box.length; i++) { // hide all folders that are not selected
        document.getElementById(box[i]).style.background = "none";
        document.getElementById(display[i]).style.display = "none";
    }
    x.style.background = "#D5F5CD";
    z.style.display = "block";
}


//This function displays hidden elements for the Resources page
function toggleDisplayRes(x, z) {
    var x = document.getElementById(x);     // the folder button
    var z = document.getElementById(z);     // the folder display
    var box = ["resbox1", "resbox2", "resbox3", "resbox4"];
    var display = ["res1", "res2", "res3", "res4"];

    for (let i = 0; i < box.length; i++) { // hide all folders that are not selected
        document.getElementById(box[i]).style.background = "none";
        document.getElementById(display[i]).style.display = "none";
    }
    x.style.background = "#D5F5CD";
    z.style.display = "block";
}


//This function displays the view of the graded optional assignment
function view_graded() {
    var modal = document.getElementById("returned_assign");
    var modal_img = document.getElementById("opt_a");
    var caption_text = document.getElementById("modal_caption");
    
    hideOnClickOutside("returned_assign", "opt_assign");

    modal_img.src = "img/graded_assign.png"
    caption_text.innerHTML = "Optional Assignment - Returned"
    
    var span = document.getElementsByClassName("modal_close")[0]; // to close modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// This function shows the popup from an event on the dashboard calendar
function showPopup(x) {
    var popup = document.getElementById(x);
    popup.classList.toggle("show");
  }