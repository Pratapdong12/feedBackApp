import React from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {
  return (
    <Card>
      <form>
        <h2>Please type your feedback below.</h2>
        <div className='input-group'>
          <input type='text' />
          <Button> Send </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;