# Kindle Notes Highlighter

### Features of the application
- User can upload the my_clippings.txt file from kindle device to the frontend
- System will then parse the highlights and allow you to explore based on each book
- You can then save your highlights file in DB (And next time when you come you can append both new and older file that you have saved - Need to figure out the merging logic)
- Some kind of login and authentication so that Each user has its separate storage key in the table (Probably will use JWT and only allow certain allowlisted users)


### Backend
- [ ] `/parseHighlights` POST route will take the raw text ("stringified") as json body and then return the parsed output. Need to finalize the parsed output to be expected
- [ ] `/saveHighlights` POST route will take text as JSON body -> first parse the highlights.txt into decided format -> save to MongoDB based on users credentials
- [ ] `/fetchHighlights` -> GET route will fetch the current users highlights from DB and return in fixed format. Some way to also tell which version of file we need to fetch, since same user can have multiple highlight files exported
- [ ] **DB DESIGN** -> instead of storing file content parsed directly, think of some heirarchy like USERNAME -> BOOKNAME -> HIGHLIGHTS. Each row in db can have user_id, book_id, page_no, range and then the actual highlighted text (Fetch will then be a query with bunch of WHERE clauses based on filter by user/book). **If this is followed think of some append/replace logic**. Same book can have extra added highlights or removed also
- [ ] Signup Route
- [ ] Signin Route
- [ ] Get JWt token route

### Frontend