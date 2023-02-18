import { createContext, useContext } from "react";

export const RecordStatusContext = createContext({});

export const useRecordStatusContext = () => useContext(RecordStatusContext);
