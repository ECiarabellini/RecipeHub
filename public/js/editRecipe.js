async function editFormHandler(event) {
    event.preventDefault();
    const recipe_name = document.querySelector('#recipe_name').value;
    const ingredients = document.querySelector('#ingredients').value;
    const recipe_instructions = document.querySelector('#recipe_instructions').value;
    
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/recipe/${id}`, {
      method: 'PUT',
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
      document.location.replace(`/recipe/${id}`);
    } else {
      alert('Failed to edit recipe');
    }
  }
  
  document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);