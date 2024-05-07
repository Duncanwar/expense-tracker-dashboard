import { useMemo } from "react"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"

function App() {
  const theme = useMemo(()=> createTheme(themeSettings),[])
  return (
      <div className="app">
        <BrowserRo
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          Hi
        </ThemeProvider>
      </div>
  )
}

export default App
