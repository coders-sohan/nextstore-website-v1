import React from "react";
import { socialData } from "../../../assets/data/socialData";

const MiddleFooter = () => {
  return (
    <div>
      <div className="ns_container">
        <div className="grid grid-cols-7">
          <div className="col-span-2">
            <h3 className="font-bold text-lg mb-6">Contact us</h3>
            <div className="flex flex-col gap-5">
              <div className="text-sm">
                <h4 className="mb-2">Demo Store</h4>
                <p>
                  No. 1259 Freedom, New York, 11111 <br /> United States
                </p>
              </div>
              <div className="text-sm">
                <p>+91-987654321</p>
              </div>
              <div className="text-sm">
                <a href="mailto:support@nextstore.com">support@nextstore.com</a>
              </div>
              <div className="flex gap-3 text-sm">
                {socialData.map((item) => (
                  <>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="ns_social_icon"
                    >
                      {React.createElement(item.icon, {
                        className: "w-4 h-4",
                      })}
                    </a>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div>Information</div>
          <div>Account</div>
          <div>Quick Links</div>
          <div className="col-span-2">Our Apps</div>
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
