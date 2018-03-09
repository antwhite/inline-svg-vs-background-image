import React, { PureComponent } from 'react';

import styles from './styles.css';

function RatingCSS() {
  return <i className={styles.icon}/>
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      {Array.from(new Array(Number(this.props.icons)), (val, index) => {
        return <RatingCSS key={index}/>;
      })}
    </div>
  }
};
