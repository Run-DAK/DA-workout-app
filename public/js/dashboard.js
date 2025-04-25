document.getElementById('newWorkoutForm')?.addEventListener('submit', async (e) => {
  //listener for form submission for new workouts
    e.preventDefault();
    //get values from the form
    const title = e.target.title.value;
    const date = e.target.date.value;
    const description = e.target.description.value;
    const res = await fetch('/workouts', {
      //post request for new workout 
      method: 'POST',
      body: JSON.stringify({ title, date, description }),
      headers: { 'Content-Type': 'application/json'},
    });
    //reloads page if successful, shows alert if not 
    if (res.ok) {
      location.reload();
    } else {
      alert('Cannot add workout!');
    }
  });
  
  //click handlers for all delete buttons
  document.querySelectorAll('.delete-btn')?.forEach(btn=> {
    btn.addEventListener('click', async () => {
      const workoutId = btn.parentElement.dataset.id;
      //delete request sent to server 
      const res = await fetch(`/workouts/${workoutId}`, { method: 'DELETE' });
      //reload for success, alert if not 
      if (res.ok) {
        location.reload();
      } else {
        alert('Cannot delete workout!');
      }
    });
  });
  