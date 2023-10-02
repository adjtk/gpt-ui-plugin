import { useEffect, useState } from "react";
import { getLocalStorageValue } from "../../utils/storage";
import { Snippet } from "../../snippet/model";

const useSnippets = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Todo : use useContext or any state manager library to prevent prop drilling
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  useEffect(() => {
    (async () => {
      const results = await getLocalStorageValue("snippets");
      if (results) {
        setSnippets(results);
        setIsLoading(false);
      }
    })();
  }, []);

  return { isLoading, setIsLoading, snippets, setSnippets };
};

export default useSnippets;
