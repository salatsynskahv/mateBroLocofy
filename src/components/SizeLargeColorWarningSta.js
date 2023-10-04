import { useMemo } from "react";
import "./SizeLargeColorWarningSta.css";
const SizeLargeColorWarningSta = ({
  dimensionLabel,
  label = "Label",
  productCode,
  startIcon = false,
  endIcon = false,
  sizeLargeColorWarningStaPosition,
  sizeLargeColorWarningStaTop,
  sizeLargeColorWarningStaLeft,
  sizeLargeColorWarningStaWidth,
  sizeLargeColorWarningStaHeight,
}) => {
  const sizeLargeColorWarningStaStyle = useMemo(() => {
    return {
      position: sizeLargeColorWarningStaPosition,
      top: sizeLargeColorWarningStaTop,
      left: sizeLargeColorWarningStaLeft,
      width: sizeLargeColorWarningStaWidth,
      height: sizeLargeColorWarningStaHeight,
    };
  }, [
    sizeLargeColorWarningStaPosition,
    sizeLargeColorWarningStaTop,
    sizeLargeColorWarningStaLeft,
    sizeLargeColorWarningStaWidth,
    sizeLargeColorWarningStaHeight,
  ]);

  return (
    <div
      className="sizelarge-colorwarning-sta"
      style={sizeLargeColorWarningStaStyle}
    >
      <div className="base">
        {startIcon && (
          <img className="masked-icon" alt="" src={dimensionLabel} />
        )}
        <div className="button">{label}</div>
        {endIcon && <img className="masked-icon" alt="" src={productCode} />}
      </div>
    </div>
  );
};

export default SizeLargeColorWarningSta;
