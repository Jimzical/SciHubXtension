# SciHubXtension
Research Papers Finder


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

1. Find a research paper you want to download (e.g. https://ieeexplore.ieee.org/abstract/document/9039685)

2. Click on the extension icon

3. Click on the `Go to PDF` button

4. The PDF will open in a new tab 


Updates
=======
- 1.0.0
  - Initial Release
  - Basic functionality to get the DOI and redirect to the PDF

Future Updates
=======
- Add a context menu option to open the PDF

- or have the popup open automatically when a research paper is detected

- Try replacing the `Alt` button by running doi and doi.ToLowerCase() simultaneously and using the first one that returns a valid link

