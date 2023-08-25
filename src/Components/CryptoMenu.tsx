import React, { useEffect } from "react";
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
  useEffect(() => {
    // Récupérez les choix de l'utilisateur depuis le localStorage au chargement
    const storedSelectedCryptos = localStorage.getItem("selectedCryptos");
    if (storedSelectedCryptos) {
      const selected = JSON.parse(storedSelectedCryptos);
      onSelectCrypto(selected); // Mettez à jour les choix
    }
  }, []); // Assurez-vous que cela s'exécute uniquement au chargement initial

  const handleCryptoSelection = (cryptoId: string) => {
    // Mettez à jour l'état local
    onSelectCrypto(cryptoId);

    // Enregistrez l'état dans le localStorage
    localStorage.setItem("selectedCryptos", JSON.stringify(selectedCryptos));
  };

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
            onClick={() => handleCryptoSelection(crypto.id)}
            style={{ margin: "4px" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CryptoMenu;
