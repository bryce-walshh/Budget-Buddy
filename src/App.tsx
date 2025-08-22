import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { NavbarSimple } from "/home/brycew/Documents/GithubProjects/vite-min-template/src/NavBarSimple.tsx";

export default function App() {
  return <MantineProvider theme={theme}>
    <NavbarSimple />
  </MantineProvider>;
}
