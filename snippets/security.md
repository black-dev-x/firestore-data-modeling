service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
    
    match /accounts/{id} {
      allow read, write: if false;
    }

    match /users/{id} {
      allow read, write: if id == request.auth.uid;
    }

    match /profiles/{id} {
      allow read;
      allow write: if id == request.auth.uid;
    }

  }
}
   