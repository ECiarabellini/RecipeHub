async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#recipe-title').value;
    const ingredients = document.querySelector('#ingredients').value;
    const instructions = document.querySelector('#instructions').value;

    const response = await fetch(`/api/recipe`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        ingredients,
        instructions,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add recipe');
    }
  }
  
  document
    .querySelector('.new-recipe-form')
    .addEventListener('submit', newFormHandler);