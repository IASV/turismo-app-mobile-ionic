import { create } from 'zustand'
import { shallow } from "zustand/shallow";

type Store = {
  data: string
}

const useDataStore = create<Store>()((set) => ({
  data: "Insertar data",
}));
