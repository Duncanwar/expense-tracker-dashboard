import { Box, useTheme } from "@mui/material";
import React from "react";

type Props = {};

const gridTemplate=`
"a b c "
`

const Dashboard = (props: Props) => {
  const { palette } = useTheme();
  return (
    <Box width="100%" height="100%" sx={{ gridTemplateAreas: gridTemplate }}>
      Dashboard
    </Box>
  );
};

export default Dashboard;
