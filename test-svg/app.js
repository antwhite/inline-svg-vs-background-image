import React, { PureComponent } from 'react';

function RatingSVG() {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1'
         style={{ background: 'rgb(255, 255, 255)' }}>
      <g id='Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='icon/ic_gift_card'>
          <g id='ic_gift_card'>
            <rect id='bounding_box' x='0' y='0' width='24' height='24'/>
            <path
              d='M18.56,7.09 C18.6859455,6.74040267 18.7502337,6.37159187 18.75,6 C18.8121912,4.41468212 17.5847333,3.07563708 16,3 C14.6,3 12.72,4.56 11.39,5.87 C10.27,5 8.84,4 7.75,4 C6.36928813,4 5.25,5.11928813 5.25,6.5 C5.25356237,6.70964899 5.28380559,6.91799114 5.34,7.12 C4.54021775,7.399583 4.00337516,8.15276514 4,9 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,9 C19.9955708,8.11481742 19.4097891,7.33784314 18.56,7.09 Z M18,11 L6,11 L6,9 L18,9 L18,11 Z M16,5 C16.41,5 16.75,5.46 16.75,6 C16.75,6.54 16.41,7 16,7 L13.11,7 C14.29,5.89 15.48,5 16,5 Z M7.75,6 C8.42933017,6.1868213 9.05585721,6.5291858 9.58,7 L7.75,7 C7.47385763,7 7.25,6.77614237 7.25,6.5 C7.25,6.22385763 7.47385763,6 7.75,6 Z M6,18 L6,13 L18,13 L18,18 L6,18 Z'
              id='Shape' fill='rgb(218, 55, 67)' fillRule='nonzero'/>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      {Array.from(new Array(Number(this.props.icons)), (val, index) => {
        return <RatingSVG key={index}/>;
      })}
    </div>
  }
};
