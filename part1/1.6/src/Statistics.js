const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(1);
  const positive = ((good / all) * 100).toFixed(1);
  let feedbackGiven = false;
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    feedbackGiven = true;
  }

  return feedbackGiven === false ? (
    <div>
      <p>No feedback given</p>
    </div>
  ) : (
    <table>
      <thead>
        <tr>
          <th>statistics</th>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral </td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive}%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statistics;
