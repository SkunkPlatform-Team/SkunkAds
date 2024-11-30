// main.mjs

import axios from 'axios';

console.log(`SkunkAds
- API:
SkunkAds for API has been Added by using ads.create().
- Used:
ES Module · Node.js
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
        const response = await axios.get("https://skunkplatform.netlify.app/api/ads.js");
        return response.data;
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
    const response = await axios.get("https://skunkplatform.netlify.app/api/ads.js");
    return response.data;
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

// Make sure you're exporting them correctly
export { Client, adsInit };
