import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import TabNavigation from "./navigation/TabNavigation";
import customFonts from "./utilities/constants/customFonts";

export default function App() {
  const [isLoaded] = useFonts(customFonts);
  return <PaperProvider>{isLoaded ? <TabNavigation /> : <></>}</PaperProvider>;
}
