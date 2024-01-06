const summarizer = require('./summarizer.mjs'); 

async function searchMovie() {
    const apiKey = 'f3cfbf48'; // Replace with your OMDb API key
    const movieInput = document.getElementById('movieInput').value;

    if (movieInput.trim() === '') {
        alert('Please enter a movie name.');
        return;
    }

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieInput)}`);
        const data = await response.json();

        if (data.Response === 'True') {
            displayMovieDetails(data);
            summarizeText(data.Plot); // Summarize the movie plot
        } else {
            alert('Movie not found!');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }


}

// function displayMovieDetails(movie) {
//     const movieDetailsContainer = document.getElementById('movieDetails');
//     movieDetailsContainer.innerHTML = `
//         <h2>${movie.Title}</h2>
//         <p><strong>Year:</strong> ${movie.Year}</p>
//         <p><strong>Genre:</strong> ${movie.Genre}</p>
//         <p><strong>Director:</strong> ${movie.Director}</p>
//         <p><strong>Plot:</strong> ${movie.Plot}</p>
//     `;
// }
function displayMovieDetails(movie) {
    const iframeContainer = document.getElementById('iframeContainer');
    const wikipediaURL = `https://en.wikipedia.org/wiki/${encodeURIComponent(movie.Title)}`;

    iframeContainer.innerHTML = `
        <iframe src="${wikipediaURL}" width="800" height="600"></iframe>
    `;


    const summaryContainer = document.getElementById('summaryContainer');
    summaryContainer.innerHTML = `<p><strong>Summary:</strong> ${movieSummary}</p>`;
}


function summarizeText(text) {
    summarizer.summarizeText(text, function(summary) {
        movieSummary = summary;
    });
}


