const recipeId = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
  ];

async function removeRecipeHandler(event) {
    event.preventDefault();
    
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to recipeId.
  
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
  
    
document.getElementById("button-edit").addEventListener("click", function() {
    window.location.href = `/recipe/edit/${recipeId}`;
});

