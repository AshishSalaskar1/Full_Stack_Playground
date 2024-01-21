import { atom } from 'recoil'

const highlightListState = atom({
    key: 'highlightListState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });


const bookListState = atom({
  key: 'bookListState', // unique ID (with respect to other atoms/selectors)
  default: {}
});

const currentBookState = atom({
  key: 'currentBookState', // unique ID (with respect to other atoms/selectors)
  default: ""
});


export {highlightListState, bookListState, currentBookState};