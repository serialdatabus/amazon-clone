export const languages = [
  {
    language: "English - EN",
    code_language: "en"
  },
  {
    language: "Espanol - ES",
    code_language: "es"
  },

  {
    language: "Deutsch - DE",
    code_language: "de"
  },
  {
    language: "Português - PT",
    code_language: "pt"
  },

  {
    language: "한국어 - KO",
    code_language: "ko"
  },
];

export const renderLanguages = ({code_language , onSelectedLanguage}) =>
  languages.map((item) => (
    <div key={item.code_language}  onClick={(e)=>{ e.preventDefault(); onSelectedLanguage({e ,  code_language: item.code_language})}} className={"language-option"+(code_language===item.code_language ? " selected" : "")}>
      <span className="radiobtn"></span>
      <a  href="#dfgd" className="language-label">
        {item.language}
      </a>
    </div>
  ));
