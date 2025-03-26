import React, { useState } from "react";
import Link from "next/link";
import { Box, Typography, Button, TextField } from "@mui/material";
import FIFO from "../Algorithms/FIFO";
import OPR from "../Algorithms/OPR";
import LRU from "../Algorithms/LRU";
import MRU from "../Algorithms/MRU";
import Navbar from "../Navigation/Navbar";

const HomeComponent = () => {
  const [frame, setFrame] = useState(0);
  const [error, setError] = useState(null);
  const [seq, setSeq] = useState("");
  const [result, setResult] = useState("");
  const [seqArr, setSeqArr] = useState([]);

  const frameHandler = (e) => setFrame(e.target.value);
  const seqHandler = (e) => {
    let text = e.target.value.replace(/ {1,}/g, " ").trim();
    setSeq(text);
    setSeqArr(text.split(" "));
  };

  const validateInput = () => {
    if (frame < 0) return "Frames cannot be negative";
    if (frame === 0 || seq.length === 0) return "Please fill all the fields";

    const isNegative = seqArr.some((num) => parseInt(num) < 0);
    if (isNegative) return "Negative numbers are not allowed in Page Sequence";

    return null;
  };

  const handleAlgorithmClick = (algo) => {
    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
    } else {
      setError(null);
      setResult(algo);
    }
  };

  const handleReset = () => {
    setFrame(0);
    setSeq("");
    setResult("");
    setError(null);
  };

  const buttons = [
    { title: "FCFS", algo: "fifo" },
    { title: "OPR", algo: "opr" },
    { title: "LRU", algo: "lru" },
    { title: "MRU", algo: "mru" },
    { title: "RESET", action: handleReset },
  ];

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#1a202c",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "800px" },
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid white",
            borderRadius: "25px",
            backgroundColor: "#1a202c",
            p: 4,
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Simulator
          </Typography>

          <Box component="form" sx={{ width: "100%" }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Enter Number of Frames</Typography>
              <TextField
                type="number"
                fullWidth
                value={frame}
                onChange={frameHandler}
                sx={{ mt: 1, input: { color: "white" } }}
                InputProps={{ style: { backgroundColor: "#2d3748" } }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Enter The Page Sequence</Typography>
              <TextField
                type="text"
                fullWidth
                value={seq}
                onChange={seqHandler}
                sx={{ mt: 1, input: { color: "white" } }}
                InputProps={{ style: { backgroundColor: "#2d3748" } }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
              {buttons.map((btn, index) => (
                <Button
                  key={index}
                  variant="contained"
                  color="error"
                  onClick={btn.action || (() => handleAlgorithmClick(btn.algo))}
                  sx={{ flexGrow: 1, minWidth: 100 }}
                >
                  {btn.title}
                </Button>
              ))}
            </Box>

            {error && <Typography color="error">{error}</Typography>}
          </Box>
        </Box>

        {/* Render the selected algorithm result */}
        <Box sx={{ mt: 4 }}>
          {result === "fifo" && !error && <FIFO frame={frame} seq={seqArr} />}
          {result === "opr" && !error && <OPR frame={frame} seq={seqArr} />}
          {result === "lru" && !error && <LRU frame={frame} seq={seqArr} />}
          {result === "mru" && !error && <MRU frame={frame} seq={seqArr} />}
        </Box>
      </Box>
    </>
  );
};

export default HomeComponent;
