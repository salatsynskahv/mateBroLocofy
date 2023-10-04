import { useMemo } from "react";
import "./BoatContainer.css";
const BoatContainer = ({
  tourDescription,
  tourImageDimensions,
  propCursor,
  propHeight,
  propTop,
  propLeft,
  onBoatContainerClick,
}) => {
  const boatStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const bestOfPragueStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const uSStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="boat1" onClick={onBoatContainerClick} style={boatStyle}>
      <img className="image-4-icon3" alt="" src={tourDescription} />
      <div className="best-of-prague6" style={bestOfPragueStyle}>
        {tourImageDimensions}
      </div>
      <div className="us6" style={uSStyle}>
        81,81 US$
      </div>
      <div className="from4" style={fromStyle}>
        From
      </div>
      <div className="lorem-ipsum-dolor2">
        Lorem ipsum dolor sit amet consectetur. Magnis vel purus non nulla quis.
        Ac ...
      </div>
    </div>
  );
};

export default BoatContainer;
