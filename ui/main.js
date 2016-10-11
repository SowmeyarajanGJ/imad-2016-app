console.log('Loaded!');

// Change the text of the maintext div
var element = document.getElementById ('main text');

element.InnerHTML = 'New Value';

// Move the image
var img = docment.getElementById ('img');
img.onclick = function () {
  img.style.marginLeft = '100px';
  
};