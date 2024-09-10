// Write your code here.
import './index.css'

const NavBar = props => {
  const {currScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-bar-cont">
      <div className="title-score-cont">
        <div className="logo-title-cont">
          <img
            className="emoji-logo"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores=cont">
            <p className="score">Score: {currScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
