async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#recipe-title').value;
    const ingredients = document.querySelector('#ingredients').value;
    const instructions = document.querySelector('#instructions').value;
    
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/recipe/${id}`, {
      method: 'PUT',
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
      document.location.replace(`/recipe/${id}`);
    } else {
      alert('Failed to edit recipe');
    }
  }
  
  document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);