import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "react-bootstrap";

export default function MeetingCard() {
  return (
    <div className="my-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="lh-1">
          <p className="text-primary details m-0 py-1">
            30 minute call with client
          </p>
          <h6 className="py-1">Project Discovery call</h6>
        </div>
        <Icon icon="entypo:dots-three-vertical" />
      </div>
      <p className="time">
        Due soon <span className="fw-bolder">9:20 am</span>
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="meeting-members w-50">
          <img
            src="https://randomuser.me/api/portraits/men/55.jpg"
            alt="profile-img"
            className="rounded-circle meeting-img"
          ></img>
          <img
            src="https://randomuser.me/api/portraits/men/25.jpg"
            alt="profile-img"
            className="rounded-circle meeting-img"
          ></img>
          <img
            src="https://randomuser.me/api/portraits/men/82.jpg"
            alt="profile-img"
            className="rounded-circle meeting-img"
          ></img>
          <span className="extra text-dark">5+</span>
        </div>
        <Button variant="primary">
          <span className="marginRight-10">+</span> Invite
        </Button>
      </div>
    </div>
  );
}
