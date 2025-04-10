import React from "react";

const NewsItems = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  return (
    <div className="my-3">
      <div className="card bg-dark text-light p-2" style={{ height: '400px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={
            imageUrl ||
            "https://t4.ftcdn.net/jpg/02/09/53/11/360_F_209531103_vL5MaF5fWcdpVcXk5yREBk3KMcXE0X7m.jpg"
          }
          className="card-img-top"
          alt={title || "News headline"}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1
          }}
        >
          <span className="badge rounded-pill bg-primary px-3 py-2">
            {source || "Unknown"}
          </span>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            {title ? title.slice(0, 60) + "..." : "No title available"}
          </h5>

          <p className="card-text">
            {description ? description.slice(0, 88) + "..." : "No description available"}
          </p>

          <p className="card-text my-2 fw-semibold">
            <small>
              {author || "Unknown"} on {date ? new Date(date).toGMTString() : "Date not available"}
            </small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-light mt-2"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
