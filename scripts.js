//Student interface - scripts.js

//This function displays hidden elements
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
//This function displays hidden elements
function toggleDisplayAnn(ann) {
    var a1 = document.getElementById("ann1");
    var a2 = document.getElementById("ann2");
    var a3 = document.getElementById("ann3");
    var a1_box = document.getElementById("annbox1");
    var a2_box = document.getElementById("annbox2");
    var a3_box = document.getElementById("annbox3");

    if (ann == "ann1") {
        if (a1.style.display === "none") {
            a1_box.style.background = "#D5F5CD";
            a2_box.style.background = "none";
            a3_box.style.background = "none";
            a1.style.display = "block";
            a2.style.display = "none";
            a3.style.display = "none";
        }
    }
    if (ann == "ann2") {
        if (a2.style.display === "none") {
            a2_box.style.background = "#D5F5CD";
            a1_box.style.background = "none";
            a3_box.style.background = "none";
            a2.style.display = "block";
            a1.style.display = "none";
            a3.style.display = "none";
        } 
    }
    if (ann == "ann3") {
        if (a3.style.display === "none") {
            a3_box.style.background = "#D5F5CD";
            a1_box.style.background = "none";
            a2_box.style.background = "none";
            a3.style.display = "block";
            a1.style.display = "none";
            a2.style.display = "none";
        } 
    }
}
