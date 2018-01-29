// Find all elements
var btns = document.querySelectorAll('.btn');
var school = document.getElementById('school');
var employer = document.getElementById('employer');

// Hide the two input fields
school.style.display = 'none';
employer.style.display = 'none';

// Loop through and listen to click
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', buttonClicked);
}

// Function called when the button is clicked
function buttonClicked(e) {
  // Find active button and remove class
  var active = document.querySelector('.active');
  active.classList.remove('active');

  // Add active class to the btn we clicked
  var btn = e.target;
  btn.classList.add('active');

  // Hide both input fields so we can just show the one we need
  school.style.display = 'none';
  employer.style.display = 'none';

  // If student btn was clicked, show input field
  if (btn.id == 'student') {
    school.style.display = 'block';
  } else if (btn.id == 'employed') {
    // If employed was clicked, show other input field
    employer.style.display = 'block';
  }
}
