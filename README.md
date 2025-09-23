# محلل العروض الشعري (Arabic Poetry Scansion)

This is a web-based application for the scansion of Arabic poetry. It allows users to input Arabic verses and analyzes them to determine the poetic meter (*Bahr*), syllables, and *taf3eelaat*.

## Features

*   **Arabic & RTL Interface:** The application is designed in Arabic with a full right-to-left layout.
*   **Verse Analysis:** The core feature of the app is to perform a scansion analysis, which includes:
    *   Normalizing Arabic text by removing diacritics and punctuation.
    *   Converting the verse into a pattern of short (`ᴗ`) and long (`–`) syllables.
    *   Identifying the classical *taf3eelaat* (metrical feet).
    *   Guessing the poetic *bahr* (meter).
*   **Clean Results Display:** The analysis results are presented in a clear, card-based layout.
*   **Pre-filled Examples:** The application includes one-click examples from famous poets like Al-Mutanabbi and Al-Sayyab to demonstrate its functionality.
*   **Modern & Responsive Design:** The UI is professional, minimalistic, and responsive, ensuring it works well on both desktop and mobile devices.

## How to Use

1.  Open the `index.html` file in your web browser.
2.  Enter an Arabic verse in the text area.
3.  Click the "تحليل" (Analyze) button to see the scansion results.
4.  Alternatively, you can click on one of the "تجربة مثال" (Try Example) buttons to test the application with pre-filled verses.

## Technologies Used

*   **HTML5:** For the main structure of the application.
*   **CSS3:** For styling, layout, and responsive design, with a focus on modern features and RTL support.
*   **JavaScript (ES6+):** For the core scansion logic, event handling, and dynamic UI updates.

## Deployment to GitHub Pages

To deploy this application and share it with the world, you can use GitHub Pages, which is a free service provided by GitHub.

Follow these steps from your terminal:

1.  **Initialize a new Git repository:**
    ```bash
    git init
    ```

2.  **Add all the files to the staging area:**
    ```bash
    git add .
    ```

3.  **Commit the files with a message:**
    ```bash
    git commit -m "Initial commit: Arabic Poetry Scansion application"
    ```

4.  **Create a new repository on GitHub.** Name it, for example, `arabic-poetry-scansion`.

5.  **Link your local repository to the remote one on GitHub:**
    *Replace `<YOUR_REPOSITORY_URL>` with the URL of the repository you just created.*
    ```bash
    git remote add origin <YOUR_REPOSITORY_URL>
    git branch -M main
    git push -u origin main
    ```

6.  **Enable GitHub Pages:**
    *   Go to your repository's **Settings** tab on GitHub.
    *   In the **Pages** section, select the `main` branch as the source and click **Save**.
    *   Your application will be live in a few minutes at `https://<YOUR_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`.

## Future Improvements

This application provides a solid foundation, but the scansion logic can be significantly improved:

*   **Advanced Scansion Algorithm:** The current algorithm is a simplified placeholder. A more sophisticated phonetic analysis of the Arabic language would be required for a fully accurate scansion.
*   **Expanded Bahr and Taf3eelaat Library:** More poetic meters (*bahoor*) and their variations (*zafaf* and *'ilal*) could be added for a more comprehensive analysis.
*   **User Accounts:** Allowing users to create accounts to save their analysis history.
*   **Dark Mode:** Adding a dark mode theme for better user experience in low-light environments.
