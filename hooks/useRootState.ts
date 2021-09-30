import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";
export const useRootState: TypedUseSelectorHook<RootState> = useSelector;
