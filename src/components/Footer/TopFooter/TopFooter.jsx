import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import newsletterIcon from "../../../assets/images/newsletter.png";

const TopFooter = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div>
      <div className="ns_container">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-20">
          <div className="flex items-center justify-center gap-2 sm:gap-5">
            <div>
              <img
                src={newsletterIcon}
                alt={"news letter icon"}
                className="h-6 w-auto"
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Sign Up For Newsletter
              </h2>
            </div>
          </div>
          <div className="w-full sm:w-1/3 ">
            <div className="relative flex w-full">
              <Input
                color="white"
                type="email"
                label="Email Address"
                value={email}
                onChange={onChange}
                className=""
              />
              <Button
                size="sm"
                color={email ? "blue" : "white"}
                disabled={!email}
                className="!absolute right-1 top-1 rounded font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
