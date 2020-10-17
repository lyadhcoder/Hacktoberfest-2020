var i=1;
function previous() {
	i--;
	if (i==0) {
		i=4;
	}

	if (i==1) {
		document.querySelector('img').src="image/img1.jpg";
	}
	if (i==2) {
		document.querySelector('img').src="image/img2.jpg";
	}
	if (i==3) {
		document.querySelector('img').src="image/img3.jpg";
	}
	if (i==4) {
		document.querySelector('img').src="image/img4.gif";
	}
}

function next() {
	i++;
	if (i==5) {
		i=1;
	}

	if (i==1) {
		document.querySelector('img').src="image/img1.jpg";
	}
	if (i==2) {
		document.querySelector('img').src="image/img2.jpg";
	}
	if (i==3) {
		document.querySelector('img').src="image/img3.jpg";
	}
	if (i==4) {
		document.querySelector('img').src="image/img4.gif";
	}
}