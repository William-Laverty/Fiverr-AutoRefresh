# Fiverr Online 24/7

Are you constantly checking your Fiverr gig management page for new orders or messages, but frustrated with having to manually refresh the page every few minutes? Our simple JavaScript code automates the process for you, opening your gig management page in an iframe and automatically refreshing it at your desired interval. Say goodbye to tedious manual refreshing and hello to 24/7 productivity with our Fiverr Online 24/7 tool!

## Usage

1. Copy the code in `Fiverr-Online.js` to your clipboard.
2. Go to your Fiverr seller dashboard.
3. Open the browser console (usually by pressing F12).
4. Paste the code into the console and press Enter.

The code will create an iframe that loads your seller dashboard and reloads it at the specified interval. You can minimize the iframe by clicking the "Minimize" button. To restore the iframe, click the "Expand" button.

## Configuration

You can customize the interval and URL by changing the values in the first line of the code:

```javascript
(function (interval_min, url) {
  // Constants
  var CONTAINER_TOP_OFFSET = 30;
  var CONTAINER_MARGIN = 20,
      CONTAINER_PADDING = 10,
      BUTTON_CONTAINER_HEIGHT = 30;

  // Set the interval (in minutes) and URL here
  var interval = interval_min * 60 * 1000; // Convert minutes to milliseconds
  var url = url;
  ...
