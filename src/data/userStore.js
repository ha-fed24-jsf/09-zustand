// hör till user feature
import { create } from 'zustand'
import { users } from './users.js'

const useUserStore = create(set => ({
	currentUser: '',
	users: users,

	loginUser: userName => set(() => ({
		currentUser: userName
	}))
}))

export { useUserStore }
