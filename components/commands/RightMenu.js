"use client";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

export default function RightMenu() {
  const [commandArray, setcommandArray] = useState([]);

  useEffect(() => {
    for (let i = 1; i < 10; i++) {
      setcommandArray((prevState) => [i, ...prevState]);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {commandArray.map((elem) => {
        return <MenuItem key={elem} />;
      })}
    </div>
  );
}
