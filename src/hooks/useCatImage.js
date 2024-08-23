import { useState, useEffect } from "react";

const catImageUrl = (firstWord) => {
  return `https://cataas.com/cat/says/${firstWord}?size=50&fontColor=red`;
};

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ")[0];
    fetch(catImageUrl(firstWord)).then((response) => {
      const { url } = response;
      setImageUrl(url);
    });
  }, [fact]);

  return { imageUrl };
}
