# Module 19: Progressive Web Applications (PWA) / Text Editor

## Description
This is the challenge for Module 19 of the coding bootcamp. This is a text editor that runs in the browser that meets the PWA criteria, features a number of data persistence techniques, and functions offline.

### User Story
```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

### Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Application
You can see how the project works [here](https://text-editor-tl9e.onrender.com/).

The user will first see a text editor and install button.
![Text Editor](assets/text-editor.png)

When the user presses the install button, they will be prompted to install the app. This will download the text editor onto your computer and open as a progressive web app.
![Install](assets/install.png)
![PWA](assets/install-pwa.png)

This application utilizes IndexedDB to store and retrieve data.
![indexedDB](assets/indexedDB.png)

It also includes a manifest file (to provide information that the browser needs to install the text editor on a device) and service worker (for caching).
![Manifest 1](assets/manifest-1.png)
![Manifest 2](assets/manifest-2.png)
![Service Worker](assets/sw.png)