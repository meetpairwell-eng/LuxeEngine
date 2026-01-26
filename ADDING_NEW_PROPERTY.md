# Adding a New Property Listing

Follow these steps to create and deploy a new property website using this template.

---

## Step 1: Create the Property Data ("The Brain")

1.  Navigate to `src/config/properties/`.
2.  Duplicate the `template.js` file.
3.  Rename the new file to a unique ID (e.g., `oaklawn.js` or `preston-road.js`).
4.  Open the file and update:
    *   **propertyInfo:** Address, price, specs, and SEO description.
    *   **agentInfo:** Name and contact details.
    *   **images:** Update the `R2_BASE_URL` and `FOLDER_NAME` to point to your Cloudflare R2 bucket.
    *   **detailSections:** Customize the text for the four narrative sections.
    *   **theme:** Set your colors and fonts (use `lobello.js` for "Light/Classic" or `test-listing.js` for "Dark/Modern").

---

## Step 2: Register the Property ("The Switchboard")

You must tell the template that this new property exists.

1.  Open `src/config/propertyConfig.js`.
2.  Import your new file at the top:
    ```javascript
    import * as oaklawn from './properties/oaklawn';
    ```
3.  Add it to the `properties` object:
    ```javascript
    const properties = {
        'lobello': lobello,
        'test': test,
        'oaklawn': oaklawn, // Add your new ID here
    };
    ```

---

## Step 3: Local Testing

Before pushing to GitHub, you can see how it looks on your computer.

1.  Stop the terminal (`Ctrl+C`).
2.  Run the development server with the new ID:
    ```bash
    VITE_PROPERTY_ID=oaklawn npm run dev
    ```
3.  Open `localhost:5173` to verify everything looks correct.

---

## Step 4: Push to GitHub

Once satisfied, save your changes and push them to your repository:

```bash
git add .
git commit -m "Add new listing: Oaklawn"
git push origin main
```

---

## Step 5: Deploy to Dokploy

1.  In your Dokploy Dashboard, create a **New Service** (or duplicate an existing one).
2.  Connect it to your GitHub repository.
3.  Go to the **Environment** or **Variables** tab in Dokploy.
4.  Add a new variable:
    *   **Key:** `VITE_PROPERTY_ID`
    *   **Value:** `oaklawn` (This must match the key you used in Step 2).
5.  Assign your **Custom Domain** (e.g., `www.5610oaklawn.com`) to this Service.
6.  Click **Deploy**.

---

## Summary of the "Golden Rule"
**One Template + Many Configs = Infinite Sites.** 
You never need to copy the whole project folder. Just add a new `.js` file for every house!
