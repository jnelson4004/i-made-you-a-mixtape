// NICO paste your code in this file, it is already linked to the index.html file 

// Pexel API 

        document.addEventListener('DOMContentLoaded', function() {
            var apiKey = '9IvYJcMUlcHfIRnYFVJXeLyDYq27CVxbqvLyL7rENmNAQCZjYKX7w2wq'; // Replace 'YOUR_API_KEY' with your actual Pexels API key
            var currentIndex = 1; // Start index for image fetching

            function fetchAndDisplayImage() {
                var imageContainer = document.getElementById('image-container');
                imageContainer.innerHTML = ''; // Clear previous image

                var url = 'https://api.pexels.com/v1/search?query=💝💋&per_page=1&orientation=landscape&size=medium&page=' + currentIndex;

                fetch(url, {
                    headers: {
                        Authorization: apiKey
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.photos.length > 0) {
                        var photo = data.photos[0];
                        var img = document.createElement('img');
                        img.src = photo.src.medium;
                        img.classList.add('responsive-img'); // Make image responsive
                        imageContainer.appendChild(img);
                    } else {
                        console.error('No photos found.');
                    }
                })
                .catch(error => console.error('Error fetching image:', error));
            }

            fetchAndDisplayImage(); // Fetch and display the first image

            // Fetch and display a new image every 5 seconds
            setInterval(function() {
                currentIndex++;
                fetchAndDisplayImage();
            }, 5000);
        });