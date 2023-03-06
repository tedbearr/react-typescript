import React, { useEffect, useState } from "react";
import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";

function HomeAdmin() {
  const [datas, setData] = useState<any>([]);
  const [change, setChange] = useState<string>("");
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/")
      .then((res) => res.json())
      .then((result) => setData(result));
    const interval = setInterval(() => {
      fetch("http://localhost:3005/")
        .then((res) => res.json())
        .then((result) => setData(result));
    }, 10000);

    return () => clearInterval(interval);
  }, [setData]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((feedbackData) => {
        setFeedback(feedbackData);
      });
  }, []);

  const columns: MUIDataTableColumnDef[] = [
    {
      name: "postId",
      label: "Post Id",
    },
    {
      name: "id",
      label: "Id",
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "body",
      label: "Message",
    },
  ];

  const options = {};

  console.log(datas);

  const handleChange = (e: string) => {
    setChange(e);
  };
  return (
    <>
      <div className="w-full bg-slate-500 h-full p-10 flex flex-col">
        <div className="w-full bg-white mb-10 flex box-border after:box-border before:box-border">
          MenuNameMenuName
        </div>
        <div className="w-full bg-white flex">Menu Name</div>
      </div>
    </>
  );
}

export default HomeAdmin;
