
# NPM StringUtils

Simple NPM library to simplify common string operations.

### Setup

```gradle
npm install npm-stringutils
```

### Usage

Import the required methods:

```javascript
    const { isBlank, isEmpty, getLength, getCount, getTitleCase } = require('npm-stringutils');
```

1. isBlank: Returns true if string is null, empty or whitespaces, else returns false.

```javascript
    if (isBlank(" your string ")) {
        ...
    } else {
        ...
    }
```

2. isEmpty: Returns true is string is null or empty, else returns false.

3. getLength: Returns length of the given string.

4. getCount: Returns count of the given character in the given string.

5. getTitleCase: Returns title cased value for the given string, i.e, first character of all the words will be capitalized.
