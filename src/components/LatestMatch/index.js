// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div>
          <h1 className="title">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="match-details">{venue}</p>
          <p className="match-details">{result}</p>
        </div>
        <div className="image-logo-card">
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
            className="team-logo"
          />
        </div>
        <div>
          <h1 className="team-caption">First Innings</h1>
          <p className="match-details">{firstInnings}</p>
          <h1 className="team-caption">Second Innings</h1>
          <p className="match-details">{secondInnings}</p>
          <h1 className="team-caption">ManOfTheMatch</h1>
          <p className="match-details">{manOfTheMatch}</p>
          <h1 className="team-caption">Umpires</h1>
          <p className="match-details">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
