import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

interface PodcastProps {
  setPodcast: (podcast: any) => void;
  toggleLoading: (value: boolean) => void;
  imageURl: string;
  description: string;
  id: string;
  author: string;
  title: string;
  isLoading: boolean;
}
const initialValue: PodcastProps = {
  imageURl: "",
  description: "",
  title: "",
  author: "",
  id: "",
  isLoading: false,
  toggleLoading: function (value?: boolean): void {
    throw new Error("Function not implemented.");
  },
  setPodcast: function (podcast: any): void {
    throw new Error("Function not implemented.");
  },
};
const PodcastContext = createContext(initialValue);

const PodcastContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedPodcast, setSelectedPodcast] =
    useState<PodcastProps>(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = useCallback(
    (value: boolean) =>
      setIsLoading((prevState) => (value ? value : !prevState)),
    []
  );

  const setPodcast = (podcast: PodcastProps) => {
    setSelectedPodcast(podcast);
  };

  const value = useMemo(
    () => ({ ...selectedPodcast, setPodcast, toggleLoading, isLoading }),
    [isLoading, selectedPodcast, toggleLoading]
  );

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
};

const usePodcast = () => useContext(PodcastContext);
export { usePodcast, PodcastContextProvider };
