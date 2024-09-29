import React, { useEffect, useState } from "react";
import "../styles/jobs.css";
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const jobsPerPage = 6; // Number of jobs to display per page
  document.title = "Jobs | Udyog Saarthi APP";
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://api.adzuna.com/v1/api/jobs/in/search/${currentPage}?app_id=c9ffc2fd&app_key=da78bc5c8be26ce18563b706b3d1275a&results_per_page=${jobsPerPage}`
        );
        const data = await response.json();
        setJobs(data.results);
        setTotalPages(Math.ceil(data.count / jobsPerPage)); // Calculate total pages
      } catch (error) {
        setError("Failed to fetch jobs. Please try again later.");
      }
    };

    fetchJobs();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container-jobs">
      <h2 className="text-center title">You'r Career Opportunities</h2>
      <p
        style={{
          color: "white",
          marginTop: "-50px",
          fontStyle: "italic",
          fontSize: "13px",
          textDecoration: "underline",
          marginBottom: "70px",
        }}
      >
        Hover over the Job title names for full name
      </p>
      {error && <div className="alert alert-danger text-center">{error}</div>}
      {jobs.length === 0 ? (
        <div className="text-center">No jobs found.</div>
      ) : (
        <div className="row">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title job-title" title={job.title}>
                    {job.title.length <= 40
                      ? job.title
                      : job.title.slice(0, 40) + "..."}
                  </h5>
                  <div className="dflexjobs">
                    <p className="job-location">
                      <i
                        className="fas fa-map-marker-alt"
                        style={{ color: "tomato" }}
                      ></i>{" "}
                      <strong></strong> {job.location.display_name}
                    </p>
                    <p className="job-company" style={{ marginTop: "-0px" }}>
                      <i
                        className="fas fa-building"
                        style={{ color: "purple" }}
                      ></i>{" "}
                      <strong></strong> {job.company.display_name}
                    </p>
                  </div>
                  <p className="job-description">
                    <i
                      className="fas fa-file-alt"
                      style={{ color: "dodgerblue" }}
                    ></i>{" "}
                    <strong>Description:</strong>
                  </p>
                  <p className="job-description small">
                    {job.description.slice(0, 100) + "..."}
                  </p>{" "}
                  {/* Decreased font size */}
                  <a
                    href={job.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Job
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Pagination Controls */}
      <div className="d-flex justify-content-between pagination-controls">
        <button
          className="btn btn-secondary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lArr;
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-secondary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          &rArr;
        </button>
      </div>
    </div>
  );
};

export default Jobs;
