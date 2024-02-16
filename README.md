## React + `textarea` + Safari bug reproduction

https://github.com/facebook/react/issues/28360

1. Run `npm install; npm start`
2. Place the caret at the end of the third line in the `textarea`
3. Select the line with <kbd>Cmd+Shift+ArrowLeft</kbd>
4. Delete the content with <kbd>Delete</kbd>
5. Try to type
