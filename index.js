// Your code goes here
document.addEventListener('DOMContentLoaded', function() {
    // This function will run when the DOM is fully loaded
    const paragraph = document.getElementById('text');
    
    if (paragraph) {
        paragraph.textContent = 'This is really cool!';
    } else {
        console.error('Paragraph element with id="text" not found.');
    }
});
