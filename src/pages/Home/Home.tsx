import React, { useState, useEffect } from "react";
import { Container, Grid, CssBaseline, Box } from "@mui/material";
import { fetchCryptos } from "../../utils/api";
import { Crypto } from "../../types";
import CryptoCard from "../../Components/CryptoCard";
import CryptoMenu from "../../Components/CryptoMenu";
import Header from "../../Components/Header";

const Home = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [selectedCryptos, setSelectedCryptos] = useState<string[]>([]);
  const [availableCryptos, setAvailableCryptos] = useState<Crypto[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(""); // État pour la recherche

  useEffect(() => {
    // Chargez la liste de toutes les cryptomonnaies disponibles
    fetchCryptos()
      .then((data: Crypto[]) => {
        setCryptos(data);
        setAvailableCryptos(data);
        const storedSelectedCryptos = localStorage.getItem("selectedCryptos");
        if (storedSelectedCryptos) {
          const selected = JSON.parse(storedSelectedCryptos);
          setSelectedCryptos(selected);
        } else {
          setSelectedCryptos(data.map((crypto: Crypto) => crypto.id)); // Sélectionnez toutes les cryptos par défaut
        }
      })
      .catch((error: Error) => console.error(error));
  }, []);

  const handleSelectCrypto = (cryptoId: string) => {
    // Gérez la sélection/désélection des cryptomonnaies
    if (selectedCryptos.includes(cryptoId)) {
      setSelectedCryptos(selectedCryptos.filter((id) => id !== cryptoId));
    } else {
      setSelectedCryptos([...selectedCryptos, cryptoId]);
    }
  };

  // Fonction de recherche
  const handleSearch = (query: string) => {
    setSearchQuery(query); // Met à jour l'état de la chaîne de recherche
    // Vous pouvez implémenter la logique de filtrage des cryptomonnaies ici en fonction de la recherche
    // Par exemple, filtrer les cryptomonnaies dont le nom contient la requête (insensible à la casse).
    const filteredCryptos = availableCryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setCryptos(filteredCryptos);
  };

  return (
    <>
      {/* <CryptoMenu
        availableCryptos={availableCryptos}
        selectedCryptos={selectedCryptos}
        onSelectCrypto={handleSelectCrypto}
      /> */}
      <Header onSearch={handleSearch} />
      <Container>
        <CssBaseline />
        <Box className="sidebar">
          <CryptoMenu
            availableCryptos={availableCryptos}
            selectedCryptos={selectedCryptos}
            onSelectCrypto={handleSelectCrypto}
          />
        </Box>
        <Box display="flex" marginTop={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Liste des cryptomonnaies sélectionnées */}
              <Grid container spacing={2}>
                {cryptos
                  .filter((crypto) => selectedCryptos.includes(crypto.id))
                  .map((crypto) => (
                    <Grid item key={crypto.id} xs={12} md={6}>
                      <CryptoCard
                        crypto={crypto}
                        isSelected={true}
                        onSelect={() => {}}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
