import { Icon } from "@iconify/react";
import "./App.css";
import Menu from "./components/menu";
import Meeting from "./components/meeting";
import ActivityCard from "./components/activityCard";
import SearchBar from "./components/searchBar";
import ProjectCard from "./components/projectCard";
import InvoiceCard from "./components/invoiceCard";
import CurrentCard from "./components/currentCard";

function App() {
  return (
    <div className="d-flex vh-100">
      <div className="menu_section">
        <h3 className="logo text-center">LOGO</h3>
        <Menu />
      </div>
      <div className="col">
        <SearchBar />
        <div className="px-5">
          <h4>Welcome back, Andrew!</h4>
          <p className="main-sub-heading">
            Have a look at the Quick Progress Bar.
          </p>
          <ProjectCard />
          <div className="d-flex justify-content-between">
            <div>
              <h4>Current Projects</h4>
              <p className="main-sub-heading">
                Projects that are currently in progress
              </p>
            </div>
            <div className="d-flex gap-3 align-items-start">
              <div className="bg-light shadow-sm p-2">
                Filter <Icon icon="clarity:filter-solid" />
              </div>
              <div className="bg-light shadow-sm p-2">
                <Icon icon="entypo:dots-three-vertical" />
              </div>
            </div>
          </div>
          <div className="d-flex gap-2 mb-4">
            <CurrentCard />
            <CurrentCard />
          </div>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h4>Pending Invoice</h4>
              <p className="main-sub-heading">
                Invoices that are currently pending
              </p>
            </div>
            <div className="bg-light shadow-sm p-2">
              <Icon icon="entypo:dots-three-vertical" />
            </div>
          </div>
          <div className="d-flex gap-2 pb-3">
            <InvoiceCard approved={true} />
            <InvoiceCard approved={false} />
            <InvoiceCard approved={false} />
          </div>
        </div>
      </div>
      <div className="activity_section">
        <div className="d-flex align-items-center justify-content-start mx-3">
          <img
            src="https://randomuser.me/api/portraits/men/95.jpg"
            alt="profile-img"
            className="rounded-circle profile-img"
          ></img>
          <div className="mt-2 lh-sm mx-3">
            <h6 className="m-0">Oliver Smith</h6>
            <p>Vendor</p>
          </div>
          <Icon icon="ant-design:right-outlined" className="fs-4 ml-3" />
        </div>
        <div className="border-start">
          <Meeting />
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="px-4 py-2 sideSection-heading">Recent Activiy</h5>
            <Icon icon="entypo:dots-three-vertical" className="mx-4 my-2" />
          </div>
          <div className="overflow-auto activity-message mb-5">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
