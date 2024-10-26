import React from "react";

const NewsItems=(props)=>{ 
    let { title, description, imageUrl, newsUrl,Author,date,Source } =  props;
    return (
      <>
      <div className="my-3 px-1">
        <div className="card bg-dark text-light p-2">
          <img src={imageUrl?imageUrl:"https://t4.ftcdn.net/jpg/02/09/53/11/360_F_209531103_vL5MaF5fWcdpVcXk5yREBk3KMcXE0X7m.jpg"} className="card-img-top" alt="Headline" />
            <div className="card-body">
              <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0',top:'0'}}>
              <span className="badge rounded-pill bg-primary px-3 py-2 z-1">{Source}</span> 
            </div>
            <h5 className="card-title">{title}...</h5>  
            <p className="card-text">{description}...</p>
            <p className="card-text my-2 fw-semibold"> {Author?Author:"Unknown"}  on {new Date(date).toGMTString()}</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light mt-2">
              Read more
            </a>
          </div>
        </div>
      </div>
      </>
    );
  } 
export default NewsItems; 