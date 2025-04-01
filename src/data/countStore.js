import { create } from 'zustand'

// const f = () => ({})

const useCountStore = create(set => ({
	count: 0,

	increase: () => set(state => ({
		count: state.count + 1
	}))

	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	// removeAllBears: () => set({ bears: 0 }),
}))

export { useCountStore }
