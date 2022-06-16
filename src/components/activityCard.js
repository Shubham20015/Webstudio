import { Icon } from "@iconify/react";
import React from "react";

export default function ActivityCard() {
  return (
    <div className="d-flex px-4 mb-3">
      <Icon icon="ci:dot-04-l" color="#0DCAF0" className="fs-5" />
      <div className="message-section">
        <p>Thank you receiving message from me.</p>
        <p>Kevin Dulgona</p>
        <p>June 14,2021 at 5:30 PM</p>
      </div>
      <img
        src="https://randomuser.me/api/portraits/women/55.jpg"
        alt="profile-img"
        className="rounded-circle mx-2"
        width="13%"
        height="13%"
      ></img>
    </div>
  );
}
