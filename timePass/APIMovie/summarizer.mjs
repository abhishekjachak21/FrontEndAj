import _ from 'lodash';


// Function to summarize text
function summarizeText(text, callback) {
    summary.summarize("", text, function(err, summary) {
        if (!err) {
            callback(summary);
        } else {
            console.error("Error summarizing text:", err);
            callback(null);
        }
    });
}

