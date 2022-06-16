import React from "react";

export default function InvoiceCard({ approved }) {
  return (
    <div className="border p-3 invoice-card">
      <h3 className="fw-bolder">$137.00</h3>
      <div className="d-flex justify-content-between align-items-start">
        <p>Amount</p>
        {approved ? (
          <span className="badge bg-success fw-light">Approved</span>
        ) : (
          <span className="badge bg-info fw-light">Pending</span>
        )}
      </div>
      <div className="d-flex align-items-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/men/10.jpg"
          alt="profile-img"
          className="rounded-circle"
          width="18%"
          height="18%"
        ></img>
        <div>
          <h6 className="fw-bold m-0 mb-1">Erin Gonzales</h6>
          <div className="d-flex gap-3 text-sm">
            <p className="fw-bold m-0">#5331</p>
            <p className="m-0">Date 25 May</p>
          </div>
        </div>
      </div>
    </div>
  );
}
