console.log(`SkunkAds
- API:
SkunkAds for API has been Added by using ads.create().
- Used:
Content Delivery Network
- Example Usage:
// Use this Example
const adClient = new Client();
adClient.initialize(); // Don't forget to call the method with parentheses

// OR

adsInit(); // for a short function
`);

class Client {
  constructor() {
    // No need for anything in the constructor unless you need to initialize properties
  }

  async initialize() {
    await this.loadAdsScript();
  }

  async init() {
    await this.loadAdsScript();
  }

  async loadAdsScript() {
    try {
      const response = await fetch("https://skunkplatform.netlify.app/api/ads.js");
      const data = await response.text();  // Wait for the text response
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = data;  // Set the fetched script content
      document.body.appendChild(script);  // Append the script to the body
    } catch (error) {
      const today = new Date().toLocaleString(); // Get current date and time
      console.error(`[${today}] Couldn't Fetch\n\n`, error); // Log current time and error
    }
  }
};

async function adsInit() {
  try {
    const response = await fetch("https://skunkplatform.netlify.app/api/ads.js");
    const data = await response.text();  // Wait for the text response
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = data;
    document.body.appendChild(script);
  } catch (error) {
    const today = new Date().toLocaleString();
    console.error(`[${today}] Couldn't Fetch\n\n`, error, "\n\nRead our SkunkAd's Documentations for Best Pratice:\nhttps://skunkplatform.netlify.app/ads/docs");
  }
}
