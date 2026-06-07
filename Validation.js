function validateForm() {
    $('#formError').text('');
  
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var contactNumber = $('#contactNumber').val().trim();
    var message = $('#message').val().trim();
  
    if (name === '') {
      $('#formError').text('Please enter your name.');
      return false;
    }
  
    if (email === '') {
      $('#formError').text('Please enter your email.');
      return false;
    }
  
    if (contactNumber === '') {
      $('#formError').text('Please enter your contact number.');
      return false;
    }
  
    if (message === '') {
      $('#formError').text('Please enter a message.');
      return false;
    }
  
    return true;
  }