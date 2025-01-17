import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

// Derive __dirname using import.meta.url for ES modules
const _filename = fileURLToPath(import.meta.url);
const dirnamePath = dirname(_filename); // Renamed to avoid ESLint naming convention warning

// Define the output directory for the memes
const OUTPUT_DIR = join(dirnamePath, 'memes');

// Ensure the memes folder exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Function to scrape the memes
async function scrapeMemes() {
  try {
    // Launch Puppeteer browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Go to the meme site
    await page.goto('https://memegen-link-examples-upleveled.netlify.app/');

    // Scrape the meme images
    const memeUrls = await page.evaluate(() => {
      const images = Array.from(document.getElementsByTagName('img'));
      return images.slice(0, 10).map((img) => img.src);
    });

    // Download the images
    for (let i = 0; i < memeUrls.length; i++) {
      const url = memeUrls[i];
      const imageName = `${(i + 1).toString().padStart(2, '0')}.jpg`;

      // Use Puppeteer to download the image
      const viewSource = await page.goto(url);
      fs.writeFileSync(join(OUTPUT_DIR, imageName), await viewSource.buffer());
    }

    console.log('Memes have been successfully saved!');
    await browser.close();
  } catch (error) {
    console.error('Error during scraping:', error);
  }
}

// Call the scrapeMemes function
await scrapeMemes();
