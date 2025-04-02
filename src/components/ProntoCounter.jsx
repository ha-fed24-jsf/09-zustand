import { useCountStore } from "../data/countStore.js"

const ProntoCounter = ({ entrance }) => {
	const enter = useCountStore(state => state.enter)
	const leave = useCountStore(state => state.leave)

	return (
		<section className="pronto-counter">
			<span> {entrance} </span>
			<button onClick={() => enter()}> Gå in </button>
			<button onClick={leave}> Gå ut </button>
		</section>
	)
}
export default ProntoCounter
