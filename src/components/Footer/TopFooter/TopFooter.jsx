import newsletterIcon from "../../../assets/images/newsletter.png";

const TopFooter = () => {
  return (
    <div>
      <div className="ns_container">
        <div className="flex justify-center gap-20">
          <div className="flex items-center">
            <span>
              <img
                src={newsletterIcon}
                alt={"news letter icon"}
                className="h-10 w-auto"
              />
            </span>
          </div>
          <div>Input</div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
