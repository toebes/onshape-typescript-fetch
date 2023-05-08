

| Method | URI                                                      |   Returns          |      Routine   |
| ------ | -------------------------------------------------------- | ------------------ | --------------------- |
| GET    | /thumbnails/d/{did}                                      | BTThumbnailInfo    | getThumbnailForDocument |
| GET    | /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}                  | BTThumbnailInfo    | getElementThumbnail |
| POST   | /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}                  | Success/Failure    | setApplicationElementThumbnail |
| DELETE | /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}                  | Success/Failure    | deleteApplicationThumbnails |
| GET    | /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}           | Image/*            | getElementThumbnailWithSize |
| GET    | /thumbnails/d/{did}/v/{vid}                              | BTThumbnailInfo    | getThumbnailForDocumentAndVersion |
| GET    | /thumbnails/d/{did}/w/{wid}                              | BTThumbnailInfo    | getDocumentThumbnail |
| GET    | /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/ac/{cid}/s/{sz}  | Image/*            | getElementThumbnailWithApiConfiguration |
| GET    | /thumbnails/d/{did}/{wv}/{wvid}/s/{sz}                   | Image/*            | getDocumentThumbnailWithSize |
| GET    | /thumbnails/document/{did}                               | BTThumbnailInfo    | getThumbnailForDocumentOld |
| GET    | /thumbnails/document/{did}/versopm{vid}                  | BTThumbnailInfo    | getThumbnailForDocumentAndVersionOld |
| GET    | /thumbnails/d/{did}/s/{sz}                               | Image/*            | getDocumentDefaultThumbnailWithSize |
