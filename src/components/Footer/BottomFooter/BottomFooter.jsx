import { paymentMethods } from "../../../assets/data/paymentMethods";

const BottomFooter = () => {
  return (
    <div>
      <div className="ns_container">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">
            <p>
              © {new Date().getFullYear()},{" "}
              <a
                href="/"
                target="_blank"
                className="no-underline hover:underline hover:text-primary"
              >
                Nextstore
              </a>{" "}
              Powered by{" "}
              <a
                href="https://mofizulislam.risosi.com"
                target="_blank"
                rel="noreferrer"
                className="no-underline hover:underline hover:text-tertiary"
              >
                Sohan
              </a>
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              {paymentMethods.map((item) => (
                <div key={item.id}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-7 w-full"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
