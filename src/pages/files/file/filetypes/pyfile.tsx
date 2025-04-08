import { useEffect, useState } from "react";
import { useFile } from "../../../../hooks";

interface PyFileProps {
  filepath: string;
  styles?: string;
}

const PyFile = ({ filepath, styles }: PyFileProps) => {
  const { getFile } = useFile();
  const [pyContent, setPyContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchPyFile = async () => {
      const file = await getFile(filepath, "text");
      setPyContent(file);
    };

    fetchPyFile();
  }, [filepath]);

  if (!pyContent) {
    return <div>Loading Python File...</div>;
  }

  return (
    <pre className={`m-8 max-w-none whitespace-pre-wrap font-mono text-sm ${styles}`}>
      {pyContent}
    </pre>
  );
};

export default PyFile;