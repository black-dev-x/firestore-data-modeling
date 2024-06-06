// Basic Where
const rangeQuery = db.collection('users').where('age', '>=', 21);

// AND
const andQuery = db.collection('users')
                .where('age', '==', 21)
                .where('sex', '==', 'M')


// OR
const q1 = db.collection('users').where('age', '==', 21);
const q2 = db.collection('users').where('age', '==', 25);


// NOT
const not1 = db.collection('users').where('age', '>', 21);
const not2 = db.collection('users').where('age', '<', 21);
