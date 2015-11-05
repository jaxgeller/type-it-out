# Type It Out

A chrome extension that disables copying, forcing you to type it out.

### Install

Download the extension [here](A chrome extension that disables copying, forcing you to type it out.)

or

+ Clone this repo
+ Follow [these instructions](https://developer.chrome.com/extensions/getstarted#unpacked)

### Use

By default, this extension will not allow copying on [Stackoverflow](http://stackoverflow.com/questions/) and [MDN](https://developer.mozilla.org/en-US/docs/Web).

If you try to copy text from either of those sites, the copying will be nullified and a popup will remind you to type it out. To add or remove sites from being copyable, see configuration.

### Config

To add or remove sites from being copyable, navigate to the options of the extension [chrome://extensions/?options=cakjfpgihbciegpnmholbaafghdbngjp](here).

Every line adds a new filter. Filters can be strings, keywords, or even regexes. Each filter will be checked against `window.location.href`.

For example

```javascript
`[a-z]+`           matches one or more lowercase letters.
`mail`             matches anything with mail in the url.
`https:\/\/.*`     matches every https site.
```
