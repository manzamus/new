
  const button = document.getElementById('like');
  button.addEventListener('click', function() {
    alert('Button like!');
   
  });


  
  const newButton = document.createElement('like');
  newButton.innerHTML = 'Click Me'; 
  newButton.id = 'dynamicButton'; 
  newButton.addEventListener('click', function() {
    
    alert('Dynamically Created Button Clicked!');

  });
