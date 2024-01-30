import React from "react";

export default function Services() {
    return (
        <div id="services" className="servicesPart">
            <h1>Services</h1>

            {/* Existing Rows */}
            {/* <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3>Cloud services</h3>
                    <p>Providing access to software and data over the internet, allowing users to access applications and data from anywhere</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h3>Software as a Service</h3>
                    <p>Techy Software offers cloud-based SaaS platforms for CRM, marketing, and service, streamlining software access through subscription models.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3>Network & Security</h3>
                    <p>Managing and securing computer networks, protecting against cyber threats</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h3>IT Consulting</h3>
                    <p>Offering guidance on technology strategy, governance, and digital transformation</p>
                </div>
            </div> */}

            {/* Table Section */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cloud services</td>
                        <td>Providing access to software and data over the internet, allowing users to access applications and data from anywhere</td>
                    </tr>
                    <tr>
                        <td>Software as a Service</td>
                        <td>Techy Software offers cloud-based SaaS platforms for CRM, marketing, and service, streamlining software access through subscription models.</td>
                    </tr>
                    <tr>
                        <td>Network & Security</td>
                        <td>Managing and securing computer networks, protecting against cyber threats</td>
                    </tr>
                    <tr>
                        <td>IT Consulting</td>
                        <td>Offering guidance on technology strategy, governance, and digital transformation</td>
                    </tr>
                    <tr>
                        <td>Computer Training</td>
                        <td>Providing training for users to improve their skills and knowledge in using software and technology</td>
                    </tr>
                    <tr>
                        <td>Backup & Disaster Recovery</td>
                        <td>Ensuring data is protected and can be restored in case of loss or damage</td>
                    </tr>
                    <tr>
                        <td>Managed Print Services</td>
                        <td>Managing and maintaining print devices and services</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
