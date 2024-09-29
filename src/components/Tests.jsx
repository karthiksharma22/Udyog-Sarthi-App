import React, { useState } from "react";
import "../styles/tests.css";
import job_data from "./data";
import nlp from "compromise"; // Import Compromise library
import TextStatistics from "text-statistics"; // Import TextStatistics library
import { useNavigate } from "react-router-dom";

const Tests = () => {
  document.title = "Tests | Udyog Sarthi App";

  const [search, setSearch] = useState("");
  const [status, setstatus] = useState(false);
  const [count, setcount] = useState(0);
  const [jobResource, setJob] = useState(null);
  const [userAnswers, setUserAnswers] = useState({}); // Store user answers
  const [analysisResult, setAnalysisResult] = useState(null); // Store analysis results

  const setdata = () => {
    if (search.trim() === "") {
      alert("Please enter a job title.");
      return;
    }

    const foundJob = job_data.find(
      (job) => job.job_title.toLowerCase() === search.toLowerCase()
    );

    if (foundJob) {
      setJob(foundJob);
      setUserAnswers({}); // Reset user answers
      setAnalysisResult(null); // Reset analysis results
    } else {
      alert("Job title not found.");
    }
  };

  const handleAnswerChange = (index, value) => {
    setUserAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const analyzeText = (text) => {
    const doc = nlp(text); // Create a new Compromise document
    const nouns = doc.nouns().out("array"); // Extract nouns
    const verbs = doc.verbs().out("array"); // Extract verbs
    const adjectives = doc.adjectives().out("array"); // Extract adjectives

    const stats = new TextStatistics(text);

    // Use methods safely
    const fleschKincaid =
      typeof stats.fleschKincaidGradeLevel === "function"
        ? stats.fleschKincaidGradeLevel()
        : "N/A";
    const smog =
      typeof stats.smogIndex === "function" ? stats.smogIndex() : "N/A";

    // Calculate total score as the average of Flesch-Kincaid and SMOG
    const totalScore =
      typeof fleschKincaid === "number" && typeof smog === "number"
        ? ((fleschKincaid + smog) / 2).toFixed(2)
        : "N/A";

    return {
      nouns: nouns, // Extracted nouns
      verbs: verbs, // Extracted verbs
      adjectives: adjectives, // Extracted adjectives
      fleschKincaid, // Flesch-Kincaid score
      smog, // SMOG index
      totalScore, // Total score
    };
  };

  const handleSubmit = () => {
    const results = {};
    Object.keys(userAnswers).forEach((key) => {
      results[key] = analyzeText(userAnswers[key]); // Analyze each user answer
    });
    setAnalysisResult(results); // Set the analysis results state
  };

  const navigate = useNavigate();
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (status && document.visibilityState === "hidden") {
        alert(`!!!  Warning ${count + 1}/${2} !!!`);
        setcount(count + 1); // Call to a function to update the count
      }
      if (count === 3) navigate("/");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange); // Cleanup listener on component unmount
    };
  }, [status, count]);

  return (
    <div className="test-container">
      <h1 className="test-title">Enhance Your Skills</h1>
      <div className="search-cont">
        <input
          type="text"
          placeholder="Enter a Job Title / Position for Resources and Tests"
          className="searchbar"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <i className="fas fa-search search-icon" onClick={setdata}></i>
      </div>

      <div className="job-data">
        {jobResource ? (
          <div>
            <h1>Welcome to {jobResource.job_title} Training!</h1>
            <hr />
            <h1 className="skills-title">
              The Skills that are important for this role are
            </h1>
            <ul className="list">
              {jobResource.skills ? (
                jobResource.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))
              ) : (
                <></>
              )}
            </ul>

            <h1 className="resource-title">References</h1>
            <hr />
            <div className="dflex">
              {jobResource.resources ? (
                jobResource.resources.map((link) => (
                  <div className="card-test" key={link.title}>
                    <p className="Name">{link.title}</p>
                    <a href={link.link} rel="noreferrer" target="_blank">
                      Read Here
                    </a>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            <h1 className="resource-title">Mock Test</h1>
            <div className="agreement">
              <input
                type="checkbox"
                name=""
                id="agree"
                onChange={(e) => {
                  setstatus(e.target.checked);
                }}
              />
              <label htmlFor="agree">
                I agree to answer the questions honeslty
              </label>
            </div>
            <hr />
            <div className="dflex2">
              <ol>
                {jobResource.questions ? (
                  jobResource.questions.map((question, index) => {
                    return (
                      <div className="question" key={index}>
                        <li>{question}</li>
                        <textarea
                          className="textarea"
                          onChange={(e) =>
                            handleAnswerChange(index, e.target.value)
                          }
                          disabled={!status}
                        ></textarea>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </ol>
              <button className="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            {analysisResult && (
              <div className="analysis-results">
                <h2>Analysis Results:</h2>
                <div className="score-cont">
                  {Object.keys(analysisResult).map((key) => {
                    const result = analysisResult[key]; // Get the result for this question
                    return (
                      <div key={key} className="scorecard">
                        <h3>Question {parseInt(key) + 1}</h3>
                        <hr />

                        <p>
                          Flesch-Kincaid Score:{" "}
                          <span className="score">
                            {result.fleschKincaid !== "N/A"
                              ? result.fleschKincaid.toFixed(2)
                              : "N/A"}
                          </span>
                        </p>
                        <p>
                          SMOG Index:{" "}
                          <span className="score">
                            {result.smog !== "N/A"
                              ? result.smog.toFixed(2)
                              : "N/A"}
                          </span>
                        </p>
                        <p>
                          Total Score:{" "}
                          <span className="score">
                            {result.totalScore !== "N/A"
                              ? result.totalScore
                              : "N/A"}
                          </span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>Search for a Role to Start Your Training</p>
        )}
      </div>
    </div>
  );
};

export default Tests;
