# To Boost your development

## Installation

## React Developer Tools
The easiest way to debug websites built with React is to install the React Developer Tools browser extension. It is available for several popular browsers:

* [Install for **Chrome**](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Install for **Edge**](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

For other browsers (for example, Safari), install the react-devtools npm package:

```bash
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```
Next open the developer tools from the terminal:

```bash
react-devtools
```

Then connect your website by adding the following `<script>` tag to the beginning of your website’s `<head>`:

```html
<html>
  <head>
    <script src="http://localhost:8097"></script>
```