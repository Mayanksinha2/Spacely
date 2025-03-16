import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#000", // Black background for the image container
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 200, // Adjust height as needed
  overflow: "hidden",
  borderRadius: "10px", // Slightly rounded corners
}));

const imageUrls = [
  // First row (4 images)
  "/Images/gallary1.png",
  "/Images/gallary2.png",
  "/Images/gallary3.png",
  "/Images/gallary4.png",

  // Second row (3 images)
  "/Images/gallary5.png",
  "/Images/gallary6.png",
  "/Images/gallary7.png",

  // Third row (4 images)
  "/Images/gallary8.png",
  "/Images/gallary9.png",
  "/Images/gallary10.png",
  "/Images/gallary11.png",
];

export default function ImageGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        backgroundColor: "#000", // Black background for the container
        borderRadius: "10px", // Optional: Rounded corners for the entire container
      }}
    >
      <Grid container spacing={2}>
        {/* First row - 4 images */}
        <Grid container item spacing={2} justifyContent="center">
          {imageUrls.slice(0, 4).map((src, index) => (
            <Grid item xs={3} key={index}>
              <Item>
                <img src={src} alt={`Image ${index + 1}`} width="100%" />
              </Item>
            </Grid>
          ))}
        </Grid>

        {/* Second row - 3 images */}
        <Grid container item spacing={2} justifyContent="center">
          <Grid item xs={3}>
            {/* Left image (20% width) */}
            <Item>
              <img src={imageUrls[4]} alt="Image 5" width="100%" />
            </Item>
          </Grid>
          <Grid item xs={6}>
            {/* Middle image (60% width) */}
            <Item>
              <img src={imageUrls[5]} alt="Image 6" width="100%" />
            </Item>
          </Grid>
          <Grid item xs={3}>
            {/* Right image (20% width) */}
            <Item>
              <img src={imageUrls[6]} alt="Image 7" width="100%" />
            </Item>
          </Grid>
        </Grid>

        {/* Third row - 4 images */}
        <Grid container item spacing={2} justifyContent="center">
          {imageUrls.slice(7, 11).map((src, index) => (
            <Grid item xs={3} key={index}>
              <Item>
                <img src={src} alt={`Image ${index + 8}`} width="100%" />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
