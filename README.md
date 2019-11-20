# @codewell/and
Check if all conditions or booleans are true.
First parameter should be an array of booleans. Second determines what should be returned if the input is `[]`, `undefied` or `null`. Options are `false`, `'false'` or `throw`.

## Installation
```
npm install @codewell/and
```

## Basic usage
```JavaScript
import and from '@codewell/and';

and([true, true, true]) // => true
and([true, true, false]) // => false
and([]) // => true

and([], 'false') // => false
and([], false) // => false
and([], 'throw') // => throws error

and(undefined, 'false') // => false
and(undefined, false) // => false
and(undefined, 'throw') // => throws error

and(null, 'false') // => false
and(null, false) // => false
and(null, 'throw') // => throws error
```

