import { openDB } from 'idb';

const initdb = async () =>
  // creating a new database named "jate"
  openDB('jate', 1, {
    // add database schema if not already initialized
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // create a new object store for the data and give it a key name of "id"
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// PUT method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // update the content of object with id of 1
  const request = store.put({ id: 1, value: content });

  const result = await request;
  console.log('Data saved to the database', result);
};

// GET method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .get() method to get content with id of 1 in the database.
  const request = store.get(1);

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  
  // optional chaining to return result value if exists, otherwise return null/undefined so editor.js can get value of localData or header
  return result?.value;
};

initdb();
