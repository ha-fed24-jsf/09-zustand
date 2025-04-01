import { useCountStore } from "../data/countStore.js"

const ProntoCounter = ({ entrance }) => {
	const enter = useCountStore(state => state.enter)
	const leave = useCountStore(state => state.leave)

	return (
		<section className="pronto-counter">
			{entrance}
			<button onClick={() => enter()}> Gå in </button>
			<button onClick={leave}> Gå ut </button>
		</section>
	)
}
export default ProntoCounter
