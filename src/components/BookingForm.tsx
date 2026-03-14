"use client";

import { useState } from "react";
import {
  TextField,
  Container,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingForm() {
  const [venue, setVenue] = useState("");

  return (
    <Box
      sx={{ minHeight: "60vh", display: "flex", alignItems: "center", py: 4 }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Venue Booking
          </Typography>
          <form noValidate autoComplete="off">
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                variant="standard"
                label="Name-Lastname"
                fullWidth
                required
              />
              <TextField
                variant="standard"
                label="Contact-Number"
                fullWidth
                required
              />
              <FormControl variant="standard" fullWidth>
                <InputLabel id="venue-label">Venue</InputLabel>
                <Select
                  labelId="venue-label"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  label="Venue"
                >
                  <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                  <MenuItem value="Spark">Spark Space</MenuItem>
                  <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
              </FormControl>
              <DateReserve />
              <Button
                variant="contained"
                fullWidth
                size="large"
                color="primary"
                type="submit"
                sx={{ mt: 3, py: 1.5, fontWeight: "bold" }}
              >
                Book Venue
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
