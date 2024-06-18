// Node.js 18+ Fetch API example

const requestUrl = 'https://api.github.com/users/abhishekjachak2';

// Fetch data from GitHub API
fetch(requestUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Success: Log the user data
    // console.log('User Data:', data);
    console.log('Followers:', data.followers);
  })
  .catch(error => {
    // Error: Log any errors that occur
    console.error('Fetch Error:', error);
  })
  .finally(() => {
    // Finalization: Log that the operation is complete
    console.log('Fetch operation complete');
  });
