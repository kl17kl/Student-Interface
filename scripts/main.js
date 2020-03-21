//Student interface - main.js

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

//This function displays hidden elements

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
