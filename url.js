import url from 'url';
const myURL = new URL('https://comics.org');
myURL.pathname = '/a/b/c';
myURL.search = 'mario';
myURL.hash = '#khan';
console.log(myURL);