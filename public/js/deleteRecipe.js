async function removeRecipeHandler(event) {
    event.preventDefault();
  
    // Extract the recipe ID from the form or any other source.
    const recipeId = document.querySelector('#recipe_id_to_delete').value;
  
    const response = await fetch(`/api/recipe/${recipeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to remove recipe');
    }
  }
  
  document
    .querySelector('.remove-recipe')
    .addEventListener('click', removeRecipeHandler);
  