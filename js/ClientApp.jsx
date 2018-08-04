import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
 return(
   <div>
     <h1 style={ {color: props.color } }>{props.title}</h1>
   </div>
 );
};

const MyFirstComponent = function() {
  return <div id="my-first-component">
          <MyTitle title='Game of Pot3' color='YellowGreen' />
          <MyTitle title='Stranger Things' color='peru' />
          <MyTitle title='Silicon Valley' color='GreenYellow' />
          <MyTitle title='Rick and Puddy' color='burlywood' />
    </div>
};

render(<MyFirstComponent />, document.getElementById('app'));
