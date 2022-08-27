const filterData = (data) => {
  const countries = data.map((item) => {
    const {
      name,
      capital,
      flags,
      currencies,
      nativeName,
      population,
      region,
      subregion,
      languages,
      borders,
      topLevelDomain,
      alpha3Code,
    } = item;

    const { png } = flags;
    const idioms = languages.map((language) => language.name);

    return {
      name,
      capital,
      png, // Rename this return element to something more semanthic
      currencies,
      nativeName,
      population,
      region,
      subregion,
      idioms,
      borders,
      topLevelDomain,
      alpha3Code,
    };
  });
  return countries;
};
export default filterData;
