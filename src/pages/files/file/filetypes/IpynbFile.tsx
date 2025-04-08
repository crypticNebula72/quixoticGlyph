import { useEffect, useState } from "react";
import { useFile } from "../../../../hooks";

interface IpynbFileProps {
  filepath: string;
  styles?: string;
}

const IpynbFile = ({ filepath, styles }: IpynbFileProps) => {
  const { getFile } = useFile();
  const [ipynbContent, setIpynbContent] = useState<any>(null);

  useEffect(() => {
    const fetchIpynb = async () => {
      const file = await getFile(filepath, "json"); // Assuming your backend serves .ipynb as JSON
      setIpynbContent(file);
    };

    fetchIpynb();
  }, [filepath]);

  if (!ipynbContent) {
    return <div>Loading Jupyter Notebook...</div>;
  }

  // Basic rendering of the notebook content. You might need a more sophisticated
  // library to render it properly with code execution, rich outputs, etc.
  // This is a simplified example.

  return (
    <div className={`m-8 max-w-none ${styles}`}>
      {ipynbContent.cells &&
        ipynbContent.cells.map((cell: any, index: number) => (
          <div key={index} className="mb-4 border rounded-md p-4 bg-gray-100">
            {cell.cell_type === "code" ? (
              <div>
                <div className="font-bold text-sm text-gray-700 mb-2">Code:</div>
                <pre className="bg-gray-200 p-2 rounded-md text-sm font-mono">
                  {Array.isArray(cell.source) ? cell.source.join("") : cell.source}
                </pre>
                {cell.outputs && cell.outputs.length > 0 && (
                  <div>
                    <div className="font-bold text-sm text-gray-700 mt-2 mb-2">Output:</div>
                    <pre className="bg-gray-300 p-2 rounded-md text-sm font-mono">
                      {cell.outputs
                        .map((output: any) => {
                          if (output.output_type === "stream" && output.text) {
                            return Array.isArray(output.text) ? output.text.join("") : output.text;
                          } else if (output.output_type === "execute_result" && output.data && output["text/plain"]) {
                            return Array.isArray(output["text/plain"]) ? output["text/plain"].join("") : output["text/plain"];
                          } else if (output.output_type === "display_data" && output.data && output["image/png"]) {
                            return <img src={`data:image/png;base64,${output.data["image/png"]}`} alt="Output Image" />;
                          }
                          return null;
                        })
                        .filter(Boolean)
                        .map((item: string | JSX.Element, i: number) => (
                          <div key={i}>{item}</div>
                        ))}
                    </pre>
                  </div>
                )}
              </div>
            ) : cell.cell_type === "markdown" ? (
              <div>
                <div className="font-bold text-sm text-gray-700 mb-2">Markdown:</div>
                <div dangerouslySetInnerHTML={{ __html: cell.source }} />
              </div>
            ) : (
              <div className="text-sm text-gray-500">Unsupported cell type: {cell.cell_type}</div>
            )}
          </div>
        ))}
    </div>
  );
};

export default IpynbFile;