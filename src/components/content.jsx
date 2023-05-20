import React,{useState,useEffect} from 'react';

export const Content = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('lambda.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    data.map(per => (
      <div className="col">
        <div className="card">
          <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} class="card-img-top" />
          <div className="card-body">
            <p className="card-text">
            </p>
          </div>
        </div>
        </div>

        ))
  );
}

export default Content
