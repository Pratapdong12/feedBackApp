import React from 'react';
import Card from './shared/Card';
import { FaTimesCircle } from 'react-icons/fa';

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimesCircle color='purple' size='2rem' />
      </button>
    </Card>
  );
}

export default FeedbackItem;