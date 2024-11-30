/*
This is a test for SkunkAd's API.

DOCUMENTATION:
We have documentation and resources for SkunkAd's practice & usage.
https://skunkplatform.netlify.app/ads/docs

-

COMMUNITY GUIDELINES:
Read our SkunkAd Community Guidelines to comply with the standards for ads.
Please do not do the following:
NO ILLEGAL CONTENT, MALWARE, OR HARMFUL LINKS. Violations will RESULT IN DELETION OF ADVERTISEMENT DATA AND WILL PREVENT REQUEST APPROVAL.

NSFW content is only activated by blurry images. For example: <span class="advertisement" data-nsfw=true></span> <!-- data-nsfw=true: Makes image blurry, data-nsfw=false: Default safe image. -->

Please keep the SkunkAd Community safe by following the guidelines.
https://skunkplatform.netlify.app/ads/community-guidelines

-

Remember to read the License:
MIT License

Copyright (c) 2024 SkunkPlatform Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

2. The Software may not be copied, published, or redistributed through any package manager, such as npm, or any version control platform, such as GitHub.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM,
OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Importing Client and adsInit from main.mjs
import { Client, adsInit } from './main.mjs'; // Adjust the path to where your script is located

// Function to simulate ad script loading
function previewAds() {
    const adClient = new Client();
    adClient.initialize().then(() => {
        console.log('Ads script loaded successfully.');
    }).catch(err => {
        console.error('Error loading ads script:', err);
    });
}

// Initialize using adsInit function for a quick setup
function previewAdsInit() {
    adsInit().then(() => {
        console.log('Ads initialized successfully using adsInit.');
    }).catch(err => {
        console.error('Error initializing ads using adsInit:', err);
    });
}

// Running both preview functions for demonstration
console.log('Previewing SkunkAds Setup:');
previewAds();
previewAdsInit();
