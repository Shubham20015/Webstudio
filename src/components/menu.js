import { Icon } from "@iconify/react";
import { Badge } from "react-bootstrap";

export default function Menu() {
  return (
    <div className="border-end">
      <ul className="menu_list">
        <li className="d-flex gap-2 align-items-center">
          <Icon icon="bxs:dashboard" />
          Dashboard
        </li>
        <li className="d-flex gap-2 align-items-center">
          <Icon icon="ant-design:file-text-filled" />
          Project
        </li>
        <li className="d-flex gap-2 align-items-center">
          <Icon icon="uil:calender" />
          Calender
        </li>
        <div className="d-flex justify-content-between align-items-center">
          <li className="d-flex gap-2 align-items-center">
            <Icon icon="fluent:send-28-filled" />
            Messages
          </li>
          <Badge bg="primary" className="mx-4">
            5
          </Badge>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <li className="d-flex gap-2 align-items-center">
            <Icon icon="ci:notification-active" />
            Notifications{" "}
          </li>
          <Badge bg="primary" className="mx-4">
            5
          </Badge>
        </div>
        <li className="d-flex gap-2 align-items-center">
          <Icon icon="ci:phone" />
          Contacts
        </li>
      </ul>
      <p className="m-4 sub-heading"> Promotions</p>
      <ul className="menu_list">
        <li className="d-flex gap-2 align-items-center">
          <Icon icon="ic:baseline-ads-click" />
          Promotions
        </li>
      </ul>
    </div>
  );
}
