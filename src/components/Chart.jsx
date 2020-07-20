import React from 'react';
// Sparklines chart docs http://borisyankov.github.io/react-sparklines/
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = (data) => {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <h5 className="more">Avg. {average(props.data)}{props.units}</h5>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine style={{ stroke: `${props.color}`, fill: `${props.color}`, fillOpacity: "0.45" }}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
    </div>
  );
}