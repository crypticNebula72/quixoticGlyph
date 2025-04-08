import LanguageBar from "./LanguageBar";
import LanguageTags from "./LanguageTags";

const Languages = () => {
  const languages = [
    // Programming Languages
    { name: "Python", color: "#3776AB", proficiency: 4, tagStyles: "ml-5", type: "programming" },
    { name: "C#", color: "#178600", proficiency: 3, tagStyles: "", type: "programming" },
    { name: "SQL", color: "#00758F", proficiency: 3, tagStyles: "", type: "programming" },
    { name: "JavaScript", color: "#F7DF1E", proficiency: 3, tagStyles: "", type: "programming" },
    { name: "TypeScript", color: "#007ACC", proficiency: 2, tagStyles: "", type: "programming" },
    { name: "Go", color: "#00ADD8", proficiency: 1, tagStyles: "ml-5", type: "programming" },
    { name: "Rust", color: "#DEA584", proficiency: 1, tagStyles: "", type: "programming" },
    { name: "Swift", color: "#FFAC45", proficiency: 1, tagStyles: "", type: "programming" },

    // Spoken Languages (dominant, then next, avoiding repeats and excessive blue)
    { name: "Nepali", color: "#DC143C", proficiency: 5, tagStyles: "ml-5", type: "spoken" },   // Crimson red (dominant)
    { name: "Hindi", color: "#FF9933", proficiency: 5, tagStyles: "", type: "spoken" },     // Saffron (dominant)
    { name: "English", color: "#00247D", proficiency: 5, tagStyles: "", type: "spoken" },    // Dark blue (prominent in UK, white taken)
    { name: "Russian", color: "#D32010", proficiency: 2, tagStyles: "", type: "spoken" },   // Red (after white, blue taken)
    { name: "German", color: "#FFD700", proficiency: 1, tagStyles: "", type: "spoken" },    // Gold (after black, red taken)
    { name: "Finnish", color: "#E0FFFF", proficiency: 1, tagStyles: "", type: "spoken" },   // Light cyan (after white, blue taken)
  ];

  const programmingLanguages = languages.filter(lang => lang.type === "programming");
  const spokenLanguages = languages.filter(lang => lang.type === "spoken");

  return (
    <>
      <div className="mb-3 flex flex-col">
        <h1 className="text-base font-bold text-secondary">
          Programming Languages <span className="text-xs text-gray-500">(rated 1-5)</span>
        </h1>
      </div>
      <LanguageBar languages={programmingLanguages} />
      <LanguageTags languages={programmingLanguages} />

      <div className="mb-3 mt-6 flex flex-col">
        <h1 className="text-base font-bold text-secondary">
          Spoken Languages <span className="text-xs text-gray-500">(rated 1-5)</span>
        </h1>
      </div>
      <LanguageBar languages={spokenLanguages} />
      <LanguageTags languages={spokenLanguages} />
    </>
  );
};

export default Languages;