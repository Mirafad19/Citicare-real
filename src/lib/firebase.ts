import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromCache, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

// CRITICAL: Connection test as per guidelines
async function testConnection() {
  try {
    // Attempting to read a non-existent doc to trigger a server roundtrip
    await getDocFromServer(doc(db, 'system', 'connection_test'));
    console.log("Firebase connection established successfully.");
  } catch (error) {
     if(error instanceof Error && (error.message.includes('offline') || error.message.includes('permission-denied'))) {
      // Permission denied is actually a good sign that the server reached out
      console.warn("Firebase connection reached server but was rejected (expected if not authed):", error.message);
    } else {
      console.error("Firebase connection error:", error);
    }
  }
}

// Initializing connection test
if (typeof window !== 'undefined') {
  testConnection();
}
