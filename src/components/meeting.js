import { Icon } from "@iconify/react";
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import MeetingCard from "./meetingCard";

export default function Meeting() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="px-4 py-2 sideSection-heading">Upcoming Meeting</h5>
        <Icon icon="entypo:dots-three-vertical" className="mx-4 my-2" />
      </div>
      <div className="mx-4">
        <div className="d-flex justify-content-between align-items-center border-top border-2">
          <p className="m-0 mt-2">Today's Meetings</p>
          <Icon
            icon="ant-design:down-outlined"
            className={`pointer fw-bold mt-2 ${
              open ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <Collapse in={open}>
          <div>
            <MeetingCard />
            <MeetingCard />
          </div>
        </Collapse>
        <div className="d-flex justify-content-between align-items-center border-bottom border-2">
          <p className="m-0 mb-2">Schedule Meetings</p>
          <Icon icon="bytesize:chevron-top" className="fw-bold mb-2" />
        </div>
      </div>
    </div>
  );
}
