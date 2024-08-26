import { useEffect } from "react";

import { useThemeMode } from "~/store";

const useColorMode = () => {
  const { mode, setMode } = useThemeMode();

  useEffect(() => {
    if (!window) return;

    const className = "dark";
    const bodyClass = window.document.body.classList;

    mode === "dark" ? bodyClass.add(className) : bodyClass.remove(className);
  }, [mode]);

  return { mode, setMode };
};

export default useColorMode;
