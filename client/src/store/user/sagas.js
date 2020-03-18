import { takeLatest, put, all, call } from 'redux-saga/effects'

import types from './types'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../services/firebase'
import { signInFailure, signInSuccess, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from './actions'

function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth, additionalData)		
		const snapshot = yield userRef.get()
		yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }))
	} catch (error) {
		yield put(signInFailure(error))
	}
}

function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider)
		yield getSnapshotFromUserAuth(user)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password)
		yield getSnapshotFromUserAuth(user)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

function* isUserAuthenticated() {
	try {
		const user = yield getCurrentUser()
		yield getSnapshotFromUserAuth(user)	
	} catch (error) {
		yield put(signInFailure(error))
	}
}

function* signOut() {
	try {
		yield auth.signOut()
		yield put(signOutSuccess())
	} catch (error) {
		yield put(signOutFailure(error))
	}
}

function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password)
		yield put(signUpSuccess({ user, additionalData: { displayName } }))
	} catch (error) {
		yield put(signUpFailure(error))
	}
}

function* signInAfterSignUp({payload: { user, additionalData }}) {
	yield getSnapshotFromUserAuth(user, additionalData)
}

function* onGoogleSignInStart() {
	yield takeLatest(types.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onEmailSignInStart() {
	yield takeLatest(types.EMAIL_SIGN_IN_START, signInWithEmail)
}

function* onCheckUserSession() {
	yield takeLatest(types.CHECK_USER_SESSION, isUserAuthenticated)
}

function* onSignOutStart() {
	yield takeLatest(types.SIGN_OUT_START, signOut)
}

function* onSignUpStart() {
	yield takeLatest(types.SIGN_UP_START, signUp)
}

function* onSignUpSuccess() {
	yield takeLatest(types.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export default function* userSagas() {
	yield all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
	])
}