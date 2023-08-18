import React from 'react'
import { SearchBar } from "@rneui/themed";
import { useState } from 'react';
export default function SearchBarComponent() {
    const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
        <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
  )
}