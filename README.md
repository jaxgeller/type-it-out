# Type It Out

A chrome extension that disables copying, forcing you to type it out.

<img src="https://github.com/jaxgeller/type-it-out/blob/master/examples/screens/overlay.png" alt="Type it out screenshot">

### Install

Download the extension [here](A chrome extension that disables copying, forcing you to type it out.)

or

+ `git clone https://github.com/jaxgeller/type-it-out`
+ Follow [these instructions](https://developer.chrome.com/extensions/getstarted#unpacked)

### Use

By default, this extension will not allow copying on [Stackoverflow](http://stackoverflow.com/questions/) and [MDN](https://developer.mozilla.org/en-US/docs/Web).

If you try to copy text from either of those sites, the copying will be nullified and a popup will remind you to type it out. To add or remove sites from being copyable, see configuration.

### Config

To add or remove sites from being copyable, navigate to the options of the extension [here](chrome://extensions/?options=cakjfpgihbciegpnmholbaafghdbngjp).

Every line adds a new filter. Filters can be strings, keywords, or even regexes. Each filter will be checked against `window.location.href`.

For example

```javascript
`.*`               matches everyting.
`mail`             matches anything with mail in the url.
`https:\/\/.*`     matches every https site.
```

### License
[MIT](https://github.com/jaxgeller/type-it-out/blob/master/LICENSE)
