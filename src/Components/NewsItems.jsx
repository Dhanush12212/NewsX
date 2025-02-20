import React from "react";

const NewsItems = (props) => { 
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    
    return (
      <div className="my-3">
        <div className="card bg-dark text-light p-2" style={{ height: '400px', overflow: 'hidden' }}>
          <img 
            src={imageUrl ? imageUrl : "https://t4.ftcdn.net/jpg/02/09/53/11/360_F_209531103_vL5MaF5fWcdpVcXk5yREBk3KMcXE0X7m.jpg"} 
            className="card-img-top" 
            alt="Headline" 
            style={{ height: "200px", objectFit: "cover" }} 
          />
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0', top: '0' }}>
              <span className="badge rounded-pill bg-primary px-3 py-2">{source || "Unknown"}</span> 
            </div>
            <h5 className="card-title">{title ? title + "..." : "No title available"}</h5>  
            <p className="card-text">{description ? description + "..." : "No description available"}</p>
            <p className="card-text my-2 fw-semibold">
              {author ? author : "Unknown"} on {date ? new Date(date).toGMTString() : "Date not available"}
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light mt-2">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}; 

export default NewsItems;
