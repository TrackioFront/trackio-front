import React, { useEffect, useState } from "react";
import eventBus from "../../eventBus";
import "./Alert.scss";

const Alert: React.FC = () => {
  const [alertData, setAlertData] = useState<{ message: string; type: string } | null>(null);

  useEffect(() => {
    const handleShowAlert = ({ message, type }: { message: string; type: string }) => {
      setAlertData({ message, type });
      setTimeout(() => {
        setAlertData(null);
      }, 3000);
    };

    eventBus.on("show-alert", handleShowAlert);

    return () => {
      eventBus.off("show-alert", handleShowAlert);
    };
  }, []);

  if (!alertData) return null;

  return (
    <div className={`Alert Alert--${alertData.type}`}>
      <span className="Alert__icon">{alertData.type === "error" ? "😱" : "ℹ️"}</span>
      <span className="Alert__message">{alertData.message}</span>
    </div>
  );
};

export default Alert;
