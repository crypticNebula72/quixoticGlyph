import LanguageBar from "./LanguageBar";
import LanguageTags from "./LanguageTags";

const Languages = () => {
  const languages = [
    // Programming Languages
    { name: "JavaScript", color: "#F0DB4F", proficiency: 5, tagStyles: "ml-5", type: "programming" }, // brighter yellow
    { name: "Node.js", color: "#3C873A", proficiency: 5, tagStyles: "", type: "programming" },       // darker green
    { name: "Java", color: "#5382A1", proficiency: 3, tagStyles: "", type: "programming" },          // muted blue
    { name: "Python", color: "#306998", proficiency: 3, tagStyles: "", type: "programming" },       // official Python blue

    // Frameworks
    { name: "React", color: "#61DAFB", proficiency: 5, tagStyles: "ml-5", type: "framework" },       // React cyan
    { name: "Next.js", color: "#2e2b2bff", proficiency: 5, tagStyles: "", type: "framework" },        // sleek black

    // Spoken Languages
    { name: "English", color: "#1C3D91", proficiency: 5, tagStyles: "ml-5", type: "spoken" },        // deeper blue
    { name: "Finnish", color: "#003580", proficiency: 2, tagStyles: "", type: "spoken" },           // navy
    { name: "German", color: "#FFCC00", proficiency: 2, tagStyles: "", type: "spoken" },            // gold
    { name: "Nepali", color: "#C72C48", proficiency: 5, tagStyles: "", type: "spoken" },            // dark red
    { name: "Hindi", color: "#FF6F00", proficiency: 5, tagStyles: "", type: "spoken" },             // saffron
    { name: "Urdu", color: "#007FFF", proficiency: 5, tagStyles: "", type: "spoken" },             // bright blue
  ];

  const programmingLanguages = languages.filter(lang => lang.type === "programming");
  const frameworks = languages.filter(lang => lang.type === "framework");
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
          Frameworks <span className="text-xs text-gray-500">(rated 1-5)</span>
        </h1>
      </div>
      <LanguageBar languages={frameworks} />
      <LanguageTags languages={frameworks} />

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
