import { Header, Clients, Projects } from "./components";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;
