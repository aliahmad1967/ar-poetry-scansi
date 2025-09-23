# Blueprint: Arabic Poetry Scansion Application

## Overview

This document outlines the plan for building a professional Arabic Poetry Scansion application. The application will be a web-based tool built with HTML, CSS, and JavaScript. It will allow users to input Arabic poetry verses, and it will analyze them to determine the poetic meter (Bahr).

## Features

*   **Arabic & RTL:** The application interface will be in Arabic with a right-to-left (RTL) layout.
*   **Verse Input:** Users can input one or more Arabic verses.
*   **Scansion Analysis:** The application will perform the following analysis:
    *   Normalize Arabic text.
    *   Convert verses into syllables (short `ᴗ` and long `–`).
    *   Match syllables to classical *taf3eelaat*.
    *   Guess the *bahr* (poetic meter).
    *   Handle free verse by showing the dominant *taf3eela*.
*   **Results Display:** The results will be displayed in a clean card-based layout.
*   **Pre-filled Examples:** The application will include one-click examples for users to try.
*   **Modern UI/UX:** The application will have a professional, modern, and minimalistic design with:
    *   Soft shadows on cards.
    *   Readable Arabic fonts.
    *   Clear buttons for actions.
*   **Modular Code:** The project will be structured with separate files for HTML, CSS, and JavaScript.

## Project Structure

```
/
|-- index.html
|-- style.css
|-- main.js
|-- blueprint.md
```

## Plan for Current Request

1.  **Create `blueprint.md`:** Establish the project plan and document it.
2.  **Modify `index.html`:** Create the main structure of the application in Arabic and with an RTL layout.
3.  **Modify `style.css`:** Add professional, modern, and minimalistic styling with a focus on RTL layout and Arabic fonts.
4.  **Modify `main.js`:**
    *   Implement the core scansion algorithm in JavaScript.
    *   Add event listeners for the "Analyze" and "Try Example" buttons.
    *   Implement the logic to display the analysis results.
5.  **Review and Refine:** Test the application, refine the UI, and ensure all requirements are met.
