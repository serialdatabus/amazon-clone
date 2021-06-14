export const languages = [
  {
    language: "English - EN",
  },
  {
    language: "Espanol - ES",
  },

  {
    language: "Deutsch - DE",
  },
  {
    language: "Português - PT",
  },

  {
    language: "한국어 - KO",
  },
];

export const renderLanguages = () =>
  languages.map((item) => (
    <div className="language-option">
      <span className="radiobtn"></span>
      <a href="/" className="language-label">
        {item.language}
      </a>
    </div>
  ));
