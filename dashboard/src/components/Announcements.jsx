import React from "react";

export default function Announcements() {
  return (
    <div className="content_block">
      <div className="block_white">
        <div className="title">Announcement</div>
        <div className="bodyContent">
          <div className="announcement_list">
            <img src="../assets/img/announcement_01.png" alt="" />
            <div className="content">
              <h3>Welcome to the New Intranet Portal!</h3>
              <p>
                Welcome to Our New Intranet Portal - Your Hub for Collaboration
                and Resources
              </p>
            </div>
          </div>

          <div className="announcement_list">
            <img src="../assets/img/announcement_02.png" alt="" />
            <div className="content">
              <h3>Quick Access to Essential Resources, Access to Essential</h3>
              <p>
                Everything You Need, All in One Place. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Doloremque asperiores eveniet
                illo consectetur. Doloremque, fugiat.
              </p>
            </div>
          </div>

          <div className="announcement_list">
            <img src="../assets/img/announcement_03.png" alt="" />
            <div className="content">
              <h3>Intranet Portal Feedback Request</h3>
              <p>We Want Your Feedback - Help Us Improve the Intranet Portal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
