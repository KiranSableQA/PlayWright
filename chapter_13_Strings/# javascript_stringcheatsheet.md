# JavaScript String Cheatsheet

> Strings are **immutable** — every method returns a *new* string and never mutates the original.

## Quick reference

- `str.length` — get string length
  - `"hello".length // 5`
- `str.charAt(index)` — get character at index
  - `"hello".charAt(1) // "e"`
- `str.charCodeAt(index)` — get UTF-16 code unit
  - `"A".charCodeAt(0) // 65`
- `str.includes(sub)` — contains substring
  - `"hello".includes("ell") // true`
- `str.indexOf(sub)` — first index of substring
  - `"hello".indexOf("l") // 2`
- `str.lastIndexOf(sub)` — last index of substring
  - `"hello".lastIndexOf("l") // 3`
- `str.startsWith(prefix)` — starts with prefix
  - `"hello".startsWith("he") // true`
- `str.endsWith(suffix)` — ends with suffix
  - `"hello".endsWith("lo") // true`
- `str.slice(start, end)` — extract substring
  - `"hello".slice(1, 4) // "ell"`
- `str.substring(start, end)` — extract substring with swapped indexes
  - `"hello".substring(1, 4) // "ell"`
- `str.substr(start, length)` — extract substring by length
  - `"hello".substr(1, 3) // "ell"`
- `str.replace(search, replace)` — replace first match
  - `"hello".replace("l", "L") // "heLlo"`
- `str.replaceAll(search, replace)` — replace all matches
  - `"hello".replaceAll("l", "L") // "heLLo"`
- `str.toLowerCase()` — convert to lowercase
  - `"Hello".toLowerCase() // "hello"`
- `str.toUpperCase()` — convert to uppercase
  - `"Hello".toUpperCase() // "HELLO"`
- `str.trim()` — remove whitespace from both ends
  - `"  hi  ".trim() // "hi"`
- `str.trimStart()` — remove leading whitespace
  - `"  hi".trimStart() // "hi"`
- `str.trimEnd()` — remove trailing whitespace
  - `"hi  ".trimEnd() // "hi"`
- `str.padStart(targetLength, padString)` — pad at the start
  - `"5".padStart(3, "0") // "005"`
- `str.padEnd(targetLength, padString)` — pad at the end
  - `"5".padEnd(3, "0") // "500"`
- `str.repeat(count)` — repeat string
  - `"ha".repeat(3) // "hahaha"`
- `str.split(separator)` — split into array
  - `"a,b,c".split(",") // ["a","b","c"]`
- `str.concat(...strings)` — concatenate strings
  - `"hello".concat(" ", "world") // "hello world"`
- `str.localeCompare(other)` — compare strings
  - `"a".localeCompare("b") // -1`
- `str.match(regex)` — match regex
  - `"test".match(/t/g) // ["t","t"]`
- `str.matchAll(regex)` — get all matches iterator
  - `[..."test".matchAll(/t/g)] // [{...},{...}]`
- `str.search(regex)` — search regex index
  - `"test".search(/e/) // 1`
- `str.normalize(form)` — normalize Unicode
  - `"e\u0301".normalize() // "é"`
- `str.valueOf()` — primitive string value
  - `"hello".valueOf() // "hello"`
- `str.toString()` — convert to string
  - `"hello".toString() // "hello"`

## Notes

- Every string method returns a new string; the original value stays unchanged.
- Use `split`, `map`, and `join` for string transformations that resemble array operations.
- Prefer `replaceAll` for global simple string replacements, and regex with `/g` for pattern replacements.
