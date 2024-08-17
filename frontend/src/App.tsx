import { ChakraProvider } from "@chakra-ui/react";
import DataProvider from "./common/providers/DataProvider";
import Router from "./common/providers/Router";

function App() {
  return (
    <ChakraProvider>
      <DataProvider>
        <Router />
      </DataProvider>
    </ChakraProvider>
  );
}

export default App;
