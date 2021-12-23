function FeedbackStats({ feedback }) {
    
  let average= feedback.reduce((acc,cur) => {
    return acc + cur.rating
  }, 0) / feedback.length;
  average= average.toFixed(2);
  console.log(average);
  
    return (
      <div className='feedback-stats'>
        <h3>{feedback.length} reviews</h3>
        <h3>Average Rating: {average}</h3>
      </div>
    );
  }
  
  export default FeedbackStats;