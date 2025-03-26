import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import TableHeader from "./TableHeader";
import PieChart from "./PieChart";

const FIFO = (props) => {
  const frames = props.frame;
  const pageSeq = props.seq;

  let arr = Array.from({ length: frames }, (_, i) => i + 1);

  const frameCreator = (f) => {
    return f.map((item) => (
      <th
        key={item}
        style={{
          backgroundColor: "#273c3c",
          border: "1px solid #dddddd",
          padding: "10px",
        }}
      >
        {`FRAME ${item}`}
      </th>
    ));
  };

  const fifoResultGiver = (frame, seq) => {
    let pageFaults = 0;
    let temp = Array(frame).fill(-1);
    let result = [];
    let index_arr = [];

    for (let i = 0; i < seq.length; i++) {
      let hit = false;
      let fault = false;
      let flag = 0;

      for (let j = 0; j < frame; j++) {
        if (seq[i] === temp[j]) {
          flag++;
          index_arr.push(j);
          pageFaults--;
          hit = true;
        }
      }

      pageFaults++;
      fault = true;
      if (pageFaults <= frame && flag === 0) {
        temp[i] = seq[i];
        index_arr.push(i);
      } else if (flag === 0) {
        let pageHitAndPageRatio = (pageFaults - 1) % frame;
        temp[pageHitAndPageRatio] = seq[i];
        index_arr.push(pageHitAndPageRatio);
      }

      let elements = [`P${i + 1} (${seq[i]})`, ...temp];
      hit ? elements.push("HIT") : fault && elements.push("FAULT");
      result.push(elements);
    }

    return { result, pageFaults, index_arr };
  };

  const rowResultMaker = (frames, pageSeq) => {
    const { result, index_arr } = fifoResultGiver(frames, pageSeq);

    return result.map((item, index) => {
      let lastEle = item[item.length - 1];

      return (
        <tr key={index}>
          {item.map((i, ind) => (
            <td
              key={ind}
              sx={{
                padding: "10px",
                border: ind !== item.length - 1 ? "1px solid white" : "1px solid black",
                backgroundColor:
                  ind !== index_arr[index] + 1
                    ? ind !== item.length - 1
                      ? "inherit"
                      : lastEle === "HIT"
                      ? "#7C99AC"
                      : "#FFCDDD"
                    : lastEle === "HIT"
                    ? "rgb(105 228 0 / 86%)"
                    : "#fa2c2c",
                color: ind === item.length - 1 ? "black" : "inherit",
              }}
            >
              {i}
            </td>
          ))}
        </tr>
      );
    });
  };

  const { pageFaults } = fifoResultGiver(frames, pageSeq);
  const pageHits = pageSeq.length - pageFaults;

  return (
    <>
      <TableHeader algoName="FCFS (First Come First Serve)" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "40px 0",
          width: "100%",
        }}
      >
        <table style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#273c3c",
                  padding: "20px",
                  border: "1px solid #dddddd",
                }}
              >
                PAGES
              </th>
              {frameCreator(arr)}
              <th
                style={{
                  backgroundColor: "#273c3c",
                  padding: "20px",
                  border: "1px solid #dddddd",
                }}
              >
                RESULT
              </th>
            </tr>
          </thead>

          <tbody>{rowResultMaker(frames, pageSeq)}</tbody>
        </table>

        <Box
          sx={{
            textAlign: "center",
            marginTop: 30,
            border: "1px solid white",
            borderRadius: "25px",
          }}
        >
          <Typography sx={{ fontSize: 46, marginTop: 14 }}>Summary</Typography>

          <Box sx={{ padding: "40px" }}>
            <Typography sx={{ fontSize: 30, textAlign: "left" }}>
              Total Frames: {props.frame}
            </Typography>
            <Typography sx={{ fontSize: 30, textAlign: "left" }}>
              Total Pages: {props.seq.length}
            </Typography>
            <Typography sx={{ fontSize: 30, textAlign: "left" }}>
              Page Sequence: {props.mainSeq}
            </Typography>
            <Typography sx={{ fontSize: 30, textAlign: "left" }}>
              Page Hit: {pageHits}
            </Typography>
            <Typography sx={{ fontSize: 30, textAlign: "left" }}>
              Page Faults: {pageFaults}
            </Typography>
          </Box>

          <PieChart hit={pageHits} fault={pageFaults} />
        </Box>
      </Box>
    </>
  );
};

export default FIFO;
