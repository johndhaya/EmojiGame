// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props

  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button" onClick={onClickEmojiCard}>
        <img className="emoji-icon" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
