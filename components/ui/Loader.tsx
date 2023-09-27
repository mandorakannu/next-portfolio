import React from "react";
import { ProgressBar } from "react-loader-spinner";

type Props = {
  borderColor?: string;
  barColor?: string;
};
export default function Loader({ borderColor, barColor }: Props) {
  return (
    <ProgressBar
      height="60"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor={borderColor ? borderColor : "#F4442E"}
      barColor={barColor ? barColor : "#51E5FF"}
    />
  );
}
