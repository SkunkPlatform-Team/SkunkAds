console.log(`SkunkAds
- API:
SkunkAds for API has been Added by using ads.create().
- Used:
Client-Side JavaScript
- Example Usage:
// Use this Example
const adClient = new Client();
adClient.initialize(); // Don't forget to call the method with parentheses

// OR

adsInit(); // for a short function
`);

async function help() {
    console.log(`Help & Documentation:
1. Initialize ads with Client:
   const adClient = new Client();
   adClient.initialize();

2. Quick setup with adsInit:
   adsInit();

3. Ensure the JavaScript is compatible with CDN, ES Module, and CommonJS.

4. Ensure the Package Version is compatible with 1.0.1 to 1.0.3 for CommonJS, ES Module: 1.0.2-ES

5. For more information, visit:
   https://skunkplatform.netlify.app/ads/docs
`);

class Client {
    constructor() {
        // No need for anything in the constructor unless you need to initialize properties
    }

    async initialize() {
        await this.loadAdsScript();
    }

    async loadAdsScript() {
        if (!this.isBrowserEnvironment()) return;

        try {
            const scriptData = await this.fetchAdScript();
            this.appendScriptToDocument(scriptData);
        } catch (error) {
            this.handleError(error);
        }
    }

    isBrowserEnvironment() {
        if (typeof document === 'undefined') {
            console.log("`document` is Undefined. You are using an environment that doesn't support the DOM (e.g., Visual Studio Code). Read our documentation: https://skunkplatform.netlify.app/ads/docs");
            return false;
        }
        return true;
    }

    async fetchAdScript() {
        const response = await fetch("https://skunkplatform.netlify.app/api/ads.js");
        if (!response.ok) {
            throw new Error(`Failed to fetch ad script: ${response.statusText}`);
        }
        return response.text();
    }

    appendScriptToDocument(data) {
        try {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.innerHTML = data;
            document.body.appendChild(script);
        } catch (error) {
            this.handleError(error);
        }
    }

    handleError(error) {
        const today = new Date().toLocaleString();
        console.error(`[${today}] Error:`, error);
    }
}

async function adsInit() {
    if (!isBrowserEnvironment()) return;

    try {
        const scriptData = await fetchAdScript();
        appendScriptToDocument(scriptData);
    } catch (error) {
        handleError(error);
    }
}

function isBrowserEnvironment() {
    if (typeof document === 'undefined') {
        console.log("`document` is Undefined. You are using an environment that doesn't support the DOM.");
        return false;
    }
    return true;
}

async function fetchAdScript() {
    const response = await fetch("https://skunkplatform.netlify.app/api/ads.js");
    if (!response.ok) {
        throw new Error(`Failed to fetch ad script: ${response.statusText}`);
    }
    return response.text();
}

function appendScriptToDocument(data) {
    try {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = data;
        document.body.appendChild(script);
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    const today = new Date().toLocaleString();
    console.error(`[${today}] Error:`, error);
}

// Make sure you're exporting them correctly (if using modules)
export { Client, adsInit };
