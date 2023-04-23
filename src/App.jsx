import { Box, Button, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";

import AccountingPage from "./pages/AccountingPage";
import CustomersPage from "./pages/CustomersPage";
import { CustomFonts } from "./components/CustomFonts/CustomFonts";

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "IRANSansWeb",
      }}
    >
      <CustomFonts />

      <BrowserRouter>
        <Box display="flex">
          <Box flex={1}>
            <SideBar />
          </Box>
          <Box flex={7}>
            <Routes>
              <Route path="/counter" element={<AccountingPage />} />
              <Route path="/customers" element={<CustomersPage />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
      <Button
        sx={{
          // or anywhere else
          fontFamily: "Greycliff CF, sans-serif",
        }}
      >
        ایران سنس
      </Button>
    </MantineProvider>
  );
}

export default App;
