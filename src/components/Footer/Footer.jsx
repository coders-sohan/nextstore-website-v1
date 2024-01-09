import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-dark-special text-white py-16">
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
                  <a href="mailto:support@nextstore.com">
                    support@nextstore.com
                  </a>
                </div>
                <div className="flex gap-3 text-sm">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white text-dark-special hover:bg-gray-medium rounded-full transition-all ease-linear duration-300"
                  >
                    <FaFacebookF className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white text-dark-special hover:bg-gray-medium rounded-full transition-all ease-linear duration-300"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white text-dark-special hover:bg-gray-medium rounded-full transition-all ease-linear duration-300"
                  >
                    <FaTwitter className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white text-dark-special hover:bg-gray-medium rounded-full transition-all ease-linear duration-300"
                  >
                    <FaYoutube className="h-4 w-4" />
                  </a>
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
    </>
  );
};

export default Footer;
