var state = {
  selected: 'unemployed'
};

var form = document.getElementById('form');

function render() {
  // Remove all existing elements
  form.innerHTML = '';

  var unemployed = document.createElement('a');
  unemployed.classList.add('btn');
  unemployed.href = '#';
  unemployed.innerHTML = 'Unemployed';
  if (state.selected == 'unemployed') {
    unemployed.classList.add('active');
  }
  form.appendChild(unemployed);
  unemployed.addEventListener('click', function() {
    state.selected = 'unemployed';
    render();
  });

  var student = document.createElement('a');
  student.classList.add('btn');
  student.href = '#';
  student.innerHTML = 'Student';
  form.appendChild(student);
  if (state.selected == 'student') {
    student.classList.add('active');
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'School name';
    form.appendChild(input);
  }
  student.addEventListener('click', function() {
    state.selected = 'student';
    render();
  });

  var employed = document.createElement('a');
  employed.classList.add('btn');
  employed.href = '#';
  employed.innerHTML = 'Employed';
  form.appendChild(employed);
  if (state.selected == 'employed') {
    employed.classList.add('active');
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Employer name';
    form.appendChild(input);
  }
  employed.addEventListener('click', function() {
    state.selected = 'employed';
    render();
  });
}

render();

// // Loop through and listen to click
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', buttonClicked);
// }
//
// // Function called when the button is clicked
// function buttonClicked(e) {
//   // Find active button and remove class
//   var active = document.querySelector('.active');
//   active.classList.remove('active');
//
//   // Add active class to the btn we clicked
//   var btn = e.target;
//   btn.classList.add('active');
//
//   // Hide both input fields so we can just show the one we need
//   school.style.display = 'none';
//   employer.style.display = 'none';
//
//   // If student btn was clicked, show input field
//   if (btn.id == 'student') {
//     school.style.display = 'block';
//   } else if (btn.id == 'employed') {
//     // If employed was clicked, show other input field
//     employer.style.display = 'block';
//   }
// }
