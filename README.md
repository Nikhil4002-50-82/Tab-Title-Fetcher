# Tab Title Fetcher - Chrome Extension

A modern Chrome Extension built with **React** and **Tailwind CSS**. It fetches and displays the **title of the current active tab** when a button is clicked in the popup.

## How to Clone and Use This Extension

### Clone the Repository

```bash
git clone https://github.com/Nikhil4002-50-82/Tab-Title-Fetcher.git
cd Tab-Title-Fetcher/extension
````

### Install Dependencies

```bash
npm install
```

### Build the Extension

```bash
npm run build
```

### Copy Required Files to `dist/`

Manually copy these files:

```bash
cp public/manifest.json dist/
cp public/icon.png dist/
```

Then simply run:

```bash
npm run build && npm run postbuild
```

### Load the Extension in Chrome

1. Open Chrome and navigate to: `chrome://extensions/`
2. Turn ON **Developer Mode**
3. Click **Load Unpacked**
4. Browse to and select the `dist/` folder inside your `extension/` directory

### Use the Extension

* Click on the extension icon in the Chrome toolbar
* Click the **“Get Current Tab Title”** button
* The title of the active browser tab will appear inside the popup

## 📚 Resources

* 🔗 [Chrome Extensions - Getting Started](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
* 🔗 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* 🔗 [Vite Documentation](https://vitejs.dev/guide/)
* 🔗 [Google Fonts](https://fonts.google.com/) (for custom fonts like `Caveat`)

---

## 🙋‍♂️ Author

Nikhil R Nambiar

---
