/**
 * Stable Diffusion Infinity Grid Generator
 *
 * Author: Alex 'mcmonkey' Goodwin
 *
 * GitHub URL: https://github.com/mcmonkeyprojects/sd-infinity-grid-generator-script
 * Created: 2022/12/08
 * Last updated: 2022/12/08
 *
 * For usage help, view the README.md file in the extension root, or via the GitHub page.
 *
 */

// Title injection code referenced from d8ahazard's Dreambooth extension
ex_titles = titles;

new_titles = {
    "Select grid definition file": "Select the grid definition yaml file, in your '(extension)/assets' folder. Refer to the README for info.",
    "Overwrite existing images (for updating grids)": "If checked, any existing image files will be overwritten - this is useful if you want to redo the grid with completely different base settings. If unchecked, if an image already exists, it will be skipped - this is useful for adding new options to an existing grid."
}

ex_titles = Object.assign({}, ex_titles, new_titles);
titles = ex_titles;
