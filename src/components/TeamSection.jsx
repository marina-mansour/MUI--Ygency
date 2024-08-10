import React from "react";
import TeamSectionCard from "./TeamSectionCard";
import { Box } from "@mui/material";

export default function TeamSection() {
  return (
    <Box paddingY={20} marginX={5}>
      <TeamSectionCard />
      {/* <TeamSectionCard /> */}
    </Box>
  );
}
