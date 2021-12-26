import React from 'react';
import Card from './shared/Card';
import { FaTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

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
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  
};
export default FeedbackItem;