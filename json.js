{
  // --- TEMA E ÍCONOS RECOMENDADOS ---
  "workbench.colorTheme": "Tokyo Night", // O puedes usar "One Dark Pro"
  "workbench.iconTheme": "vscode-icons",

  // --- FUENTE Y APARIENCIA DEL EDITOR ---
  "editor.fontFamily": "'Fira Code', 'JetBrains Mono', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.cursorStyle": "line",
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.renderLineHighlight": "all",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,

  // --- ESTILIZACIÓN DE COLORES DE LA INTERFAZ (Hardware / PCB Aesthetic) ---
  "workbench.colorCustomizations": {
    // Fondo principal (Estilo gabinete/chasis metálico oscuro)
    "editor.background": "#0d1117",
    "sideBar.background": "#161b22",
    "activityBar.background": "#090d12",
    "statusBar.background": "#0d1117",
    "titleBar.activeBackground": "#090d12",

    // Bordes y líneas de división (Circuitería / Chasis)
    "sideBar.border": "#30363d",
    "activityBar.border": "#30363d",
    "statusBar.border": "#30363d",
    "editorGroup.border": "#30363d",

    // Acentos Neón / Neón PCB (Verde Circuito y Azul Neón)
    "activityBar.foreground": "#00ff66", // Verde LED brillante
    "activityBarBadge.background": "#00e5ff", // Azul Neón
    "activityBarBadge.foreground": "#000000",
    "statusBar.foreground": "#7ee787",
    "statusBar.debuggingBackground": "#ff5555",

    // Resaltado de línea activa e integración visual
    "editor.lineHighlightBackground": "#161b2280",
    "editor.lineHighlightBorder": "#00ff6633",
    "editorCursor.foreground": "#00ff66", // Cursor Neón

    // Guías de sangría y llaves
    "editorIndentGuide.activeBackground1": "#00e5ff",
    "editorIndentGuide.background1": "#21262d",

    // Pestañas (Tabs)
    "tab.activeBackground": "#161b22",
    "tab.inactiveBackground": "#0d1117",
    "tab.activeBorderTop": "#00ff66", // Borde superior estilo LED
    "tab.activeForeground": "#58a6ff"
  },

  // --- TOKEN COLORS (Resaltado de sintaxis tipo hardware) ---
  "editor.tokenColorCustomizations": {
    "comments": "#57606a",
    "keywords": "#ff7b72",     // Comandos/Lógica en rojo neón
    "functions": "#d2a8ff",    // Funciones en violeta procesador
    "strings": "#a5d6ff",      // Textos en azul cian
    "variables": "#ffa657",    // Variables en ámbar/cobre
    "numbers": "#7ee787"       // Números en verde consola
  }
}