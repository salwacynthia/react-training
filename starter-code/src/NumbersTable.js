import React, { Component} from 'react';

class NumbersTable extends Component {
 
    getTable(){
        let list = [];
        for (let n=1; n<= this.props.limit; n++){
            let style = {
                backgroundColor: n % 2 === 0 ? 'red' : 'white',
                width:"100px",
                height:"100px",
                display: "flex",
                flexDirection:"column",
                flexWrap:"wrap",
                border:"1px solid black",
                justifyContent:"center",
                
                
            }
            list.push(<div style = {style} key={n}>{n}</div>)
        }
        return list;
    }
  render() {
    return (
        <div className="NumbersTable">
         {this.getTable()}
        </div>
    );
  }
}

export default NumbersTable;