// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachRecentMatch} = props
  const {
    id,
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = eachRecentMatch
  const status = matchStatus === 'Won' ? 'green' : 'red'
  console.log(matchStatus)
  return (
    <div className="each-match-card">
      <img src={competingTeamLogo} alt={id} className="each-match-logo" />
      <h1 className="team-name">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className={status}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
