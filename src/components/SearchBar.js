import React from "react";
import "./searchbar.scss";
import { navigate, navigateTo } from "gatsby";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getZipCode
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const SearchBar = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();
    // Get latitude and longitude via utility functions
    // getGeocode({ address: description })
    //   .then((results) => getLatLng(results[0]))
    //   .then(({ lat, lng }) => {
    //     console.log("📍 Coordinates: ", { lat, lng });
    //   })
    //   .catch((error) => {
    //     console.log("😱 Error: ", error);
    //   });
    getGeocode({ address: description })
        // By default we use the "long_name" value from API response, you can tell the utility to use "short_name"
        // by setting the second parameter to "true"
        .then((results) => {
            let county = null;
          
          results[0].address_components.forEach(({ long_name, short_name, types }) => {
            if (types.includes("administrative_area_level_2"))
              county = short_name.split(" ")[0];
          });
          navigateTo(`/results/county/${county.toLowerCase()}`);
        })
        // .then((results) => getZipCode(results[0], false))
        // .then((zipCode) => {
        //     console.log("ZIP Code: ", zipCode);
        //     fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
        //     .then(response => response.json()) // parse JSON from request
        //     .then(resultData => {
        //       setStarsCount(resultData.stargazers_count)
        //     })
        // })
        .catch((error) => {
            console.log("Error: ", error);
        });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li className="search-results-item" key={id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <input
        class="search-input"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter an address, city, or ZIP code"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul className="search-results">{renderSuggestions()}</ul>}
    </div>
  );
} 

export default SearchBar;