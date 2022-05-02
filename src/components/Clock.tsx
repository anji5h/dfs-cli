import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Typography fontWeight="bold" minWidth="100px">
      {time.toLocaleTimeString("en-US")}
    </Typography>
  );
};
export default Clock;
