import React from "react";
import { useState } from "react";

export default function Policies() {
  const [activeTab, setActiveTab] = useState("commonPolicy");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="grid policy_block">
      <div className="title">Company Policies</div>
      <div className="block_white">
        <div className="tabs">
          <a
            href="javascript:void(0)"
            className="active"
            onClick={() => handleTabClick("commonPolicy")}
          >
            Common
          </a>
          <a
            href="javascript:void(0)"
            onClick={() => handleTabClick("singaporePolicy")}
          >
            Singapore
          </a>
          <a
            href="javascript:void(0)"
            onClick={() => handleTabClick("indiaPolicy")}
          >
            India
          </a>
        </div>
        <div
          className="policy_content"
          id="commonPolicy"
          style={{ display: activeTab === "commonPolicy" ? "block" : "none" }}
        >
          <div className="content">
            <p>
              <img src="./assets/img/pdf.svg" alt="" /> Data Protection Policies
              & Guidelines.pdf
            </p>
            <p>
              <img src="./assets/img/pdf.svg" alt="" /> ONESEA - Supplier's Code
              of Ethics and Conduct.pdf
            </p>
            <p>
              <img src="./assets/img/pdf.svg" alt="" /> ONESEA - Work Home
              Policy.docx
            </p>
            <p>
              <img src="./assets/img/word.svg" alt="" /> POSH ACT_ONESEA (India)
              Private Limited.docx
            </p>
            <p>
              <img src="./assets/img/word.svg" alt="" /> Shipping - Work Home
              Policy.docx
            </p>
          </div>
        </div>
        <div
          className="policy_content"
          id="singaporePolicy"
          style={{
            display: activeTab === "singaporePolicy" ? "block" : "none",
          }}
        >
          <div className="content">
            <p>
              <img src="./assets/img/pdf.svg" alt="" /> Data Protection Policies
              & Guidelines.pdf
            </p>
            <p>
              <img src="./assets/img/pdf.svg" alt="" /> ONESEA - Supplier's Code
              of Ethics and Conduct.pdf
            </p>
            <p>
              <img src="./assets/img/pdf.svg" alt="" /> ONESEA - Work Home
              Policy.docx
            </p>
            <p>
              <img src="./assets/img/word.svg" alt="" /> POSH ACT_ONESEA (India)
              Private Limited.docx
            </p>
            <p>
              <img src="./assets/img/word.svg" alt="" /> Shipping - Work Home
              Policy.docx
            </p>
          </div>
        </div>
        <div
          className="policy_content"
          id="indiaPolicy"
          style={{ display: activeTab === "indiaPolicy" ? "block" : "none" }}
        >
          <div className="content">
            <p>
              <img src="./assets/img/pdf.svg" alt="" /> Data Protection Policies
              & Guidelines.pdf
            </p>
            <p>
              <img src="./assets/img/pdf.svg" alt="" /> ONESEA - Supplier's Code
              of Ethics and Conduct.pdf
            </p>
            <p>
              <img src="./assets/img/pdf.svg" alt="" /> ONESEA - Work Home
              Policy.docx
            </p>
            <p>
              <img src="./assets/img/word.svg" alt="" /> POSH ACT_ONESEA (India)
              Private Limited.docx
            </p>
            <p>
              <img src="./assets/img/word.svg" alt="" /> Shipping - Work Home
              Policy.docx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
