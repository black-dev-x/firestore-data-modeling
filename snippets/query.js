import { db } from './config';

// Single Doc Read
const ref = db.collection('posts').doc('postId')

// Subcollection Read
const ref2 = db.collection('posts').doc('postId').collection('tags');


// Bucket Read

const post = db.collection('posts').doc('postId')
const tags = db.collection('tags').doc('postId')


// Multi-document read

const post2 = await db.collection('posts').doc('postId').get();

const tagIds = post.data().tags;

const tagReads = tagIds.map(tag => db.collection('tags').get(tag));

const tags2 = await Promise.all(tagReads);


// Helper: Reads an array of IDs from a collection concurrently
const readIds = async (collection, ids) => {
    const reads = ids.map(id => collection.doc(id).get() );
    const result = await Promise.all(reads);
    return result.map(v => v.data());
}
