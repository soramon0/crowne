import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
	apiKey: "AIzaSyDnnUDrbbC3esQ4SXgiucCza2-VBdIFdLg",
	authDomain: "crowne-56e1a.firebaseapp.com",
	databaseURL: "https://crowne-56e1a.firebaseio.com",
	projectId: "crowne-56e1a",
	storageBucket: "crowne-56e1a.appspot.com",
	messagingSenderId: "878997313887",
	appId: "1:878997313887:web:fd04fa80826531068a7eea"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapshot = await userRef.get()
	
	if (!snapshot.exists) {
		const { displayName, email } = userAuth
		const createdAT = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAT,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}
	
	return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey)

	const batch = firestore.batch()

	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, obj)
	})

	return await batch.commit()
}

export const covertCollectionSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data()
		
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	})

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection
		return accumulator
	}, {})
}

export const getCurrentUser = () => {
	return new Promise((res, rej) => {
		const unsub = auth.onAuthStateChanged(user => {
			unsub()			
			res(user)
		}, rej)
	})
}

export default firebase;