var j=0,i=0,k=0;

 document.addEventListener("DOMContentLoaded",
 	function sec() {
	document.getElementById("box3").textContent=i;
	document.getElementById("box2").textContent=j;
	document.getElementById("box1").textContent=k;

	i++;
	if (i==60) {
		i=0;
		min();	
	}
	setTimeout(sec,1000);//Built-in fun used to call sec function by delay of one sec
});

 function min() {
 	j++;
 	if (j==60) {
 		j=0;
 		hr();
 	}
 }

 function hr() {
 	k++;
 	if (k==24) {
 		k=0;
 	}
 }

 function mininc() {
 	if (j<59) {
 	j++;
 }
    else if (j==59) {
    	j=0;
    }
 }

 function mindec() {
 	if (j>0) {
 	j--;
 }
    else if (j==0) {
    	j=59;
    }
 }

 function hrinc() {
 	if (k<23) {
 	k++;
 }
    else if (k==23) {
    	k=0;
    }
 }

 function hrdec() {
 	if (k>0) {
 	k--;
 }
    else if (k==0) {
    	k=23;
    }
 }