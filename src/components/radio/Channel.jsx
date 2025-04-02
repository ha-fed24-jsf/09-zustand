
const Channel = ({ text, setChannel }) => {

	return (
		<label onClick={() => setChannel(text)}>
			<input type="radio" name="channel" />
			{text}
		</label>
	)
}
export default Channel
