import React from "react";
import { Select } from "antd";
import Button from "../Button/Button";
import "./Headers.scss";

function Headers(props) {
  const { languages, languagesFilter, selectedLanguages, onRemoveFilter } =
    props;

  const handleChange = (value) => {
    languagesFilter(value);
  };

  return (
    <div className="headers">
      <div className="main-headers">
        <h3 className="logo">Logo</h3>
        <div className="header-content">
          <div className="header-button">
            <Button style={{ background: "#1ABC9C", color: "#FFFFFF" }}>
              COMMING SOON
            </Button>
            <Button style={{ background: "#515A5A", color: "#FFFFFF" }}>
              NOW SHOWING
            </Button>
          </div>
          <div className="header-filter">
            <div className="select-div">
              <Select
                mode="multiple"
                className="select"
                placeholder="Select"
                style={{ minWidth: 150 }}
                onChange={handleChange}
                popupClassName="option-style"
                options={languages}
                value={selectedLanguages}
              />
            </div>
            <div className="select-div">
              <Select
                // mode="multiple"
                className="select"
                placeholder="All Genres"
                style={{ minWidth: 150 }}
                // onChange={handleChange}
                popupClassName="option-style"
                options={languages}
                value={selectedLanguages}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="view-filter">
        <span className="filter-header">Applied Filters:</span>
        {selectedLanguages.length ? (
          selectedLanguages.map((language, i) => {
            return (
              <div key={i} className="filter-language">
                {language}{" "}
                <span onClick={() => onRemoveFilter(language)}>X</span>
              </div>
            );
          })
        ) : (
          <span className="filter-header">All Language</span>
        )}
      </div>
    </div>
  );
}

export default Headers;
