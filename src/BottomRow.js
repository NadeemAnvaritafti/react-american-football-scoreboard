import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  let [quarter, setQuarter] = useState(1);
  let [down, setDown] = useState(1);

    function quarterChange(){
    if(quarter === 4){
      return quarter = 'End';
    } else if(quarter === 'End'){
      return quarter = 1;
    } else {
      return quarter = quarter + 1;
    }
  }

  function downChange(){
    if(down === 4){
      return down = 1;
    } else {
      return down = down + 1;
    }
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <button onClick={()=> setDown(downChange())}> + </button>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">10</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">25</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <button onClick={()=> setQuarter(quarterChange())}> + </button>
        <div className="quarter__value">{quarter}</div>
          
      </div>
    </div>
  );
};

export default BottomRow;
