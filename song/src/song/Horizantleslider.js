import React from 'react'
import './Horizantle.css'
function Horizantleslider({ Songc, title }) {

    const url="http://localhost:4000 "

    return (
        <div >
            <div className="title">{title}</div>
            {Songc.map((s) => {
                return(
                //console.log(s);
                <div>
               <img src={url+'/'+s.thumbnail} className="image"/>
               <div className="item-title">{s.title}</div>
               </div>
                )
                
            })}



            {/* <table>
        {Songc.map((s)=>{
            console.log(s)
            return(
              <tr>
              <td>{s.sid}</td><td>{s.title}</td><td><img  src={s.thumbnail}></img></td>
            </tr>
            ) 
          })}
          </table> */}
        </div>
    )
}

export default Horizantleslider