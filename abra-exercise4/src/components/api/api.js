import { createContext } from "react";

export const buttonCaptions = {
  readMe: 'Read More',
  send: 'Send',
};
export const ButtonContext = createContext(buttonCaptions.send)

