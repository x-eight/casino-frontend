import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Nav";
import AllRoutes from "./components/Nav/routes";
import CustomButtom from "./components/Button-connect";
import backgroundImg from "./assets/background.jpg";
import {LottoFinanceProvider} from "./lotto-provider";

function App() {
  // <Flex w={"100%"}  flexDir="column" backgroundColor={"#142343"}  >
  return (
    <LottoFinanceProvider>
      <Flex flexDir="row">
      <Sidebar />
      <Flex
        w={"100%"}
        flexDir="column"
        backgroundImage={`url(${backgroundImg})`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <CustomButtom />
        <Box>
          <AllRoutes />
        </Box>
      </Flex>
    </Flex>
    </LottoFinanceProvider>
  );
}

export default App;
