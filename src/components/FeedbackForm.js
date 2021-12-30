import {useState} from 'react';
import Button from './shared/Button';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('');

  const handleChangeText = (e) =>{
    
    if (text === ''){
      
      setBtnDisabled(true);
      setMessage(null);
    }
    else if (text !== '' && text.trim().length <= 10){
      
      setBtnDisabled(true);
      setMessage('Your text is less than 10 character');
    }
    else{
      
      setBtnDisabled(false);
      setMessage(null);
    }
    
    setText(e.target.value);
  };
 
 const handleSubmit = (e) =>{
    e.preventDefault();
    if(text.trim().length >10){
    const newFeedback = {rating,text}
    handleAdd(newFeedback);
    }
    
 };
 
 
 
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please type your feedback below.</h2>
        <RatingSelect select={(select)=> setRating(select)} />
        <div className='input-group'>
          <input type='text' onChange = {handleChangeText} placeholder='Write Your review'/>
          <Button isDisabled={btnDisabled} type='submit'>{' '} Send {' '}</Button>
          {message && <div className='message'>{message}</div>}
        </div>
        
      </form>
    </Card>
  );
}

export default FeedbackForm;