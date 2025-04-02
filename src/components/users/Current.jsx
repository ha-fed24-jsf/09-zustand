import { useUserStore } from "../../data/userStore"

const Current = () => {
	const currentUser = useUserStore(state => state.currentUser)

	return (
		<section className="current-user">
			{
			currentUser ?
			<p> Du är inloggad som: {currentUser} </p> :
			<p> Logga in please! </p>
			}

		</section>
	)
}
export default Current
