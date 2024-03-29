# SciHubXtension
Research Paper Finding Chrome Extension

This extension finds the DOI of the research paper you're viewing and provides a direct link to the PDF.
> This works by taking advantage of the scihub database

# Getting Started

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Jimzical/SciHubXtension.git
    ```

2. Open Chrome and go to `chrome://extensions/`

3. Enable `Developer Mode` by clicking the toggle switch next to `Developer mode`

4. Click the `Load unpacked` button and select the `SciHubXtension` folder

5. The extension should now be installed

## Usage

1. Find a research paper you want to download (e.g. )
1. Find a research paper you want to download (e.g. [this](https://dl.acm.org/doi/abs/10.1145/3325773.3325779) or [that](https://ieeexplore.ieee.org/document/8300913))

2. Click on the extension icon

3. Click on the `Go to PDF` button

4. The PDF will open in a new tab 


Updates
=======
- 1.0.0
  - Initial Release
  - Basic functionality to get the DOI and redirect to the PDF
- 1.0.1
  - Added a Notification to display the DOI and PDF link
- 1.1.0
  - Added a context menu to the extension
- 1.1.1
  - Fixed bug where No results returned from excecuteScript
- 1.1.2
  - Cleaned up popup.html
Future Updates
==============
- Find a better way to try to get the pdf with a single button that somehow tries both normal and lowercase DOI and tries to get that pdf
- Fix the icon issues
