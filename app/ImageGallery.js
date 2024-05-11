"use client";

import { useCallback, useRef, useState } from "react";

const images = require.context("./images", true);
const imageList = images.keys().map((image) => images(image));

function ImageGallery() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState();
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);

    if (query.length) {
      const img = imageList.filter((el) => {
        var text = el.default.src
          .toString()
          .replace("/_next/static/media/", "");

        var splittext = text.split(".");
        //console.log(query.toString().replace("/", ""));
        //console.log(splittext[0].replace(":", ""));
        return (
          splittext[0].replace(":", "") === query.toString().replace("/", "")
        );
      });
      setResults(img);
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    //window.addEventListener("click", onClick);
  }, []);

  /*
  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);
    */

  return (
    <>
      <div
        style={{
          position: "relative",
          padding: 30,
        }}
        ref={searchRef}
      >
        <input
          style={{
            border: "1px solid #666",
            boxSizing: "border-box",
            borderRadius: 10,
            fontSize: 14,
            padding: 14,
            width: "100%",
          }}
          onChange={onChange}
          onFocus={onFocus}
          placeholder="26/000"
          type="text"
          value={query || ""}
        />
      </div>
      {active && results.length > 0 && (
        <div>
          {results.map((image, index) => (
            <img key={index} src={image.default.src} alt={`image-${index}`} />
          ))}
        </div>
      )}
    </>
  );
}

export default ImageGallery;
