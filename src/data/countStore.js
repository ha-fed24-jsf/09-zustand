import { create } from 'zustand'

const useCountStore = create(set => ({
	count: 0,

	increase: () => set(state => ({
		count: state.count + 1
	})),

	prontoCount: 0,
	enter: () => set(state => {
		console.log('countStore.enter')  // bra för felsökning
		return {
			prontoCount: state.prontoCount + 1
		}
	} ),
	leave: () => set(state => ({
		prontoCount: state.prontoCount - 1
	})),

	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	// removeAllBears: () => set({ bears: 0 }),
}))

export { useCountStore }
