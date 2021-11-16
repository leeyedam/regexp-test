const str = `
010-3039-2264
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(str.match(/.{1,}(?=\@)/g))
//['thesecon']

console.log(str.match(/(?<=@).{1,}/g))
//['gmail.com']