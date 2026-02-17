import { theme } from './theme'

export function GlobalStyles() {
  return (
    <style>
      {`
        :root {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
          line-height: 1.5;
          font-weight: 400;
          color: ${theme.colors.text};
          background-color: ${theme.colors.background};
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-height: 100vh;
          background-color: ${theme.colors.background};
        }

        a {
          color: inherit;
        }

        button, input {
          font: inherit;
        }
      `}
    </style>
  )
}
