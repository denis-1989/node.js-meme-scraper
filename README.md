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
