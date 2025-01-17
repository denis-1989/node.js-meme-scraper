# node.js-meme-scraper

Node.js Meme Scraper

Scraping the First 10 Memes
The program scrapes the first 10 meme images from the website.
Command:

```
node index.js
```

Saving Images in the memes Folder
The images are saved in a directory named memes within the project folder. If the folder doesn’t exist, the program creates it.
Command:

```
node index.js
```

Numbered File Names
Images are saved as 01.jpg, 02.jpg, …, 10.jpg, ensuring proper sequential order.
Command:

```
node index.js
```

Overwrite Existing Images Running the program multiple times overwrites the previously downloaded images without errors.
Command:

```
node index.js
```

Git Ignore for memes Folder
The memes folder is added to .gitignore to ensure the images are not committed to the repository.
Command:

```
echo "memes/" >> .gitignore
```

Error Handling
The program gracefully handles potential errors (e.g., network issues or folder creation problems) to ensure smooth operation.
Command:

```
node index.js
```

These points summarize the main functionali

## TODOs

- [ ] Figure out how to make `memes` "ignored" in Git
- [ ] Create a `memes` directory
- [ ] Investigate how to access the website
  - [ ] Is "HTTP request" or "fetching" what we want?
- [ ] Retrieve the HTML string data from the website and store in a variable
- [ ] Extract the image `src` strings (URLs) in the HTML string (`<img>` elements) to an array of image URLs
  - [ ] Check whether the image `src` URLs work with the `?width=300`
- [ ] Separate out the first 10 image URLs from the array
- [ ] Loop over first 10 image URLs, and for each of them:
  - [ ] Access the image URL
    - [ ] Is "HTTP request" or "fetching" what we want?
  - [ ] Retrieve the image data from the website and store in a variable
  - [ ] Save the the image data to a file
    - [ ] Create a new file with a name with a 2-digit number, eg. 01.jpg, 02.jpg, ... 10.jpg.
    - [ ] Add the data
- [ ] Test program to make sure it can run multiple times
