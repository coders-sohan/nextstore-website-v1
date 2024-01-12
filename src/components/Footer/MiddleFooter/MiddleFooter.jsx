import React from "react";
import { Link } from "react-router-dom";
import {
  accountData,
  informationData,
  quickLinksData,
} from "../../../assets/data/footerData";
import { socialData } from "../../../assets/data/socialData";
import app_icon_01 from "../../../assets/images/app-icon-01.png";
import app_icon_02 from "../../../assets/images/app-icon-02.png";

const MiddleFooter = () => {
  return (
    <div>
      <div className="ns_container">
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-10 sm:gap-0">
          <div className="col-span-2">
            <h3 className="font-bold text-lg mb-3 sm:mb-5 underline underline-offset-2">
              Contact us
            </h3>
            <div className="flex flex-col gap-2 sm:gap-5">
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
              <div className="flex gap-2 sm:gap-3 text-sm">
                {socialData.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ns_social_icon"
                  >
                    {React.createElement(item.icon, {
                      className: "w-4 h-4",
                    })}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 sm:mb-5 underline underline-offset-2">
              Information
            </h3>
            <div className="flex flex-col gap-2 sm:gap-5">
              {informationData.map((item) => (
                <Link
                  key={item.id}
                  path={item.href}
                  className="text-sm font-medium hover:text-tertiary transition-all ease-linear duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 sm:mb-5 underline underline-offset-2">
              Account
            </h3>
            <div className="flex flex-col gap-2 sm:gap-5">
              {accountData.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-sm font-medium hover:text-tertiary transition-all ease-linear duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 sm:mb-5 underline underline-offset-2">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 sm:gap-5">
              {quickLinksData.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-sm font-medium hover:text-tertiary transition-all ease-linear duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <h3 className="font-bold text-lg mb-3 sm:mb-5 underline underline-offset-2">
              Our Apps
            </h3>
            <p className="text-sm font-normal leading-relaxed">
              Download our App and get extra <br /> 15% Discount on your first
              Order..!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-5">
              <a href="/">
                <img
                  src={app_icon_01}
                  alt="app_icon_01"
                  className="h-10 w-auto"
                />
              </a>
              <a href="/">
                <img
                  src={app_icon_02}
                  alt="app_icon_02"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
