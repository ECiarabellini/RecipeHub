async function newFormHandler(event) {
    event.preventDefault();
  
    const recipe_name = document.querySelector('#recipe_name').value;
    const ingredients = document.querySelector('#ingredients').value;
    const recipe_instructions = document.querySelector('#recipe_instructions').value;

  
  
    const response = await fetch(`/api/recipe`, {
      method: 'POST',
      body: JSON.stringify({
        recipe_name,
        ingredients,
        recipe_instructions,
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