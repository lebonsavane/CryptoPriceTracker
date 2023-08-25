import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Skeleton,
} from "@mui/material";
import { Crypto } from "../types";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import CryptoChart from "./CryptoChart";

interface CryptoCardProps {
  crypto: Crypto;
  isSelected: boolean;
  onSelect: () => void;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  crypto,
  isSelected,
  onSelect,
}) => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  if (!crypto) {
    return (
      <Card>
        <CardContent>
          <Skeleton variant="rectangular" width={200} height={50} />
          <Skeleton variant="text" width={200} height={30} />
          <Skeleton variant="text" width={80} height={20} />
          <Skeleton variant="text" width={120} height={30} />
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card
        onClick={() => {
          handleOpenPopup();
          onSelect();
        }}
        sx={{
          cursor: "pointer",
          backgroundColor: isSelected ? "white" : "#e0e0e0",
          padding: "16px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          transition: "background-color 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            <img
              src={crypto.image}
              alt={`${crypto.name} Logo`}
              width={50}
              height={50}
              style={{ marginRight: "20px" }}
            />
            <div>
              <Typography variant="h5" component="div">
                {crypto.name} {/* Crypto name */}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {crypto.symbol} {/* Crypto symbol */}
              </Typography>
            </div>
          </Box>
          <Typography variant="h6" color="secondary">
            ${crypto.current_price} {/* Current price */}
          </Typography>
          <CryptoChart priceData={crypto.sparkline_in_7d.price} />
        </CardContent>
      </Card>

      <Dialog open={openPopup} onClose={handleClosePopup}>
        <DialogTitle>{crypto.name} Infos</DialogTitle>
        <DialogContent>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Market Cap:</span>
              <span>{crypto.market_cap}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Price Change (24h):</span>
              <div style={{ display: "flex", alignItems: "center" }}>
                {crypto.price_change_24h < 0 ? (
                  <>
                    <ArrowDownwardIcon style={{ color: "red" }} />
                    <span style={{ color: "red" }}>
                      ${crypto.price_change_24h.toFixed(2)}{" "}
                    </span>
                  </>
                ) : (
                  <>
                    <ArrowUpwardIcon style={{ color: "green" }} />
                    <span style={{ color: "green" }}>
                      ${crypto.price_change_24h.toFixed(2)}{" "}
                    </span>
                  </>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Market Cap Rank:</span>
              <span>{crypto.market_cap_rank}</span>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CryptoCard;
