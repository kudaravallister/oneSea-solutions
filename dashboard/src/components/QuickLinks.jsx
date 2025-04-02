import React from "react";

export default function QuickLinks() {
  return (
    <div className="grid ptb-10">
      <div className="title">Meet Your New Colleagues</div>
      <div className="quickLinks__block">
        <div className="quickLinks__list">
          <img src="./assets/img/ic/ITSupport_ic.svg" alt="" />
          <p>IT Support (Helpdesk)</p>
        </div>
        <div className="quickLinks__list">
          <img src="./assets/img/ic/kb_ic.svg" alt="" />
          <p>KB</p>
        </div>
        <div className="quickLinks__list">
          <img src="./assets/img/ic/holidayCalendar_ic.svg" alt="" />
          <p>Holiday Calendar</p>
        </div>
        <div className="quickLinks__list">
          <img src="./assets/img/ic/hdHandBook_ic.svg" alt="" />
          <p>HR Handbook</p>
        </div>
        <div className="quickLinks__list">
          <img src="./assets/img/ic/faq_ic.svg" alt="" />
          <p>Frequently Asked Questions</p>
        </div>
        <div className="quickLinks__list">
          <img src="./assets/img/ic/efs_ic.svg" alt="" />
          <p>Employee Feedback & Surveys</p>
        </div>
        <div className="quickLinks__list">
          <img src="./assets/img/ic/ed_ic.svg" alt="" />
          <p>Employee Directory</p>
        </div>
        <div className="quickLinks__list quickLinks__link txt_center">
          <i>
            View more <br />
            Links
          </i>
        </div>
      </div>
    </div>
  );
}
