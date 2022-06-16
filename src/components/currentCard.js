import { Icon } from "@iconify/react";
import { Button, ProgressBar } from "react-bootstrap";

export default function CurrentCard() {
  return (
    <div className="border p-3">
      <h3 className="fw-bold">Construction Project</h3>
      <p>Property name</p>
      <div className="d-flex gap-5 mb-2">
        <div className="d-flex align-items-center">
          <Icon icon="bx:dollar" />
          <p className="m-0">100 - 800</p>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <Icon icon="uil:calender" />
          <p className="m-0">
            Deadline - <span className="fw-bold">25 may</span>
          </p>
        </div>
      </div>
      <ProgressBar now={75} />
      <div className="d-flex justify-content-between">
        <p>Progress bar</p>
        <p>75%</p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3 align-items-center h-100">
          <img
            src="https://randomuser.me/api/portraits/men/69.jpg"
            alt="profile-img"
            className="rounded-circle"
            width="15%"
            height="15%"
          ></img>
          <p className="m-0">Vendor's name</p>
        </div>
        <Button variant="primary">View</Button>
      </div>
    </div>
  );
}
