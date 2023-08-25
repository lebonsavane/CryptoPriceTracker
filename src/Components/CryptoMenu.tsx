import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { Crypto } from "../types";

interface CryptoMenuProps {
  availableCryptos: Crypto[];
  selectedCryptos: string[];
  onSelectCrypto: (cryptoId: string) => void;
}

const CryptoMenu: React.FC<CryptoMenuProps> = ({
  availableCryptos,
  selectedCryptos,
  onSelectCrypto,
}) => {
  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6" color="textSecondary" mb={2}>
        Select Crypto to track
      </Typography>
      <Box display="flex" flexDirection="row" alignItems="center">
        {availableCryptos.map((crypto) => (
          <Chip
            key={crypto.id}
            label={crypto.name}
            color="secondary"
            variant={
              selectedCryptos.includes(crypto.id) ? "filled" : "outlined"
            }
            onClick={() => onSelectCrypto(crypto.id)}
            style={{ margin: "4px" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CryptoMenu;
