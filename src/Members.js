import React, { useState } from "react";
import Papa from "papaparse";
import "./Members.css";
const Members = () => {
  const [data, setData] = useState({});
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRu37q17dyDB4lHh4ROwI8RAVuZ256IkAvoOefeEf9FLM5kpUNTyvZmxuT0nJS_tZtWQog9HgtIRHHw/pub?gid=0&single=true&output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );
  const movies = Array.from(data);
  return (
    <div className="container-fluid p-0 mt-0">
      <h1 className="col-12 text-center mt-3 bg-dark text-white p-0">
        {" "}
        Our Team{" "}
      </h1>
      <section id="cards">
        <div className="container py-2">
          <div className="pt-2">
            {" "}
            <h3 className="header">2024 Batch</h3>
          </div>
          <div className="row">
            {movies
              .filter((name) => name.year.includes("2024"))
              .map((data) => (
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div key={data.movie}>
                    <div className="card shadow-sm border-0" >
                      <div className="card-body">
                        <div className="user-picture">
                          <img
                            src = {data.src}
                            className="shadow-sm rounded-circle"
                            height="130"
                            width="130"
                          />
                        </div>
                        <div className="user-content">
                          <h5 className="text-capitalize user-name">
                            {data.movie}
                          </h5>
                          <p
                            className=" text-capitalize text-muted small blockquote-footer "
                            style={{ paddingTop: "7px" }}
                          >
                            {" "}
                            {data.branch} {"("}
                            {data.year}
                            {")"}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="pt-5">
            <h3 className="header">2023 Batch</h3>
          </div>
          <div className="row">
            {movies
              .filter((name) => name.year.includes("2023"))
              .map((data) => (
                <div className="col-lg-4 col-md-6 mb-4 pt-5">
                  <div key={data.movie}>
                    <div className="card shadow-sm border-0">
                      <div className="card-body">
                        <div className="user-picture">
                          <img
                            src = {data.src}
                            className="shadow-sm rounded-circle"
                            height="130"
                            width="130"
                          />
                        </div>
                        <div className="user-content">
                          <h5 className="text-capitalize user-name">
                            {data.movie}
                          </h5>
                          <p
                            className=" text-capitalize text-muted small blockquote-footer "
                            style={{ paddingTop: "7px" }}
                          >
                            {" "}
                            {data.branch} {"("}
                            {data.year}
                            {")"}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Members;
