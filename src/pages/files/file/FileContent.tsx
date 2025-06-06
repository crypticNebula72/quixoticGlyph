import { Button } from "../../../components/interactables";
import { useFile } from "../../../hooks";
import FileNotSupported from "./filetypes/FileNotSupported";
import MarkdownFile from "./filetypes/MarkdownFile";
import Pdf from "./filetypes/Pdf";
import Video from "./filetypes/Video";
import IpynbFile from "./filetypes/IpynbFile";
import PyFile from "./filetypes/pyfile";

interface FileContentProps {
  curItem: {
    name: string;
    type: string;
    file_type: string;
    orientation: string;
  };
  curParent: {
    github: string[];
    githubnames: string[];
  };
  path: string;
}

const FileContent = ({ curItem, curParent, path }: FileContentProps) => {
  const { dimensions, download } = useFile();
  const headerHeight = 42.5;

  return (
    <div className={`mb-10 mt-4 h-[${dimensions.height}px]`}>
      <ul className="size-full divide-y-[1px] divide-gray-border rounded-md border-[1px] border-gray-border">
        <li
          key={0}
          className={`flex flex-row items-center justify-between rounded-t-md bg-primary-200 px-3 py-2`}
        >
          <h1 className="text-sm font-bold text-secondary">Preview</h1>
          <div className="flex flex-row items-center space-x-2">
            {curParent.github &&
              curParent.github.map((link: string, index: number) => {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      window.open(link, "_blank");
                    }}
                    imagePath="/assets/github.svg"
                    imageAltText="github"
                    imageStyles="size-4"
                    text={
                      curParent.githubnames ? curParent.githubnames[index] : ""
                    }
                    height={28}
                    buttonStyles="px-[5px]"
                  />
                );
              })}
            <Button
              onClick={() => {
                download(`/portfolio${path}`, curItem.name);
              }}
              imagePath="/assets/download.svg"
              imageAltText="download"
              imageStyles="size-4"
              height={28}
              buttonStyles="px-[5px]"
            />
          </div>
        </li>
        <li key={1} className="flex justify-center">
          {curItem.type === "file" ? (
            curItem.file_type === "pdf" ? (
              <Pdf
                filepath={`/portfolio${path}`}
                height={dimensions.height - headerHeight}
              />
            ) : curItem.file_type === "markdown" ? (
              <MarkdownFile
                filepath={`/portfolio${path}`}
                styles="sm:mx-40"
              />
            ) : curItem.file_type === "video" ? (
              <Video
                filepath={`/portfolio${path}`}
                height={dimensions.height - headerHeight}
                orientation={curItem.orientation}
              />
            ) : curItem.file_type === "ipynb" ? (
              <IpynbFile
                filepath={`/portfolio${path}`}
                styles="sm:mx-20" // Adjust styles as needed
              />
            ) : curItem.file_type === "py" ? (
              <PyFile
                filepath={`/portfolio${path}`}
                styles="sm:mx-40" // Adjust styles as needed
              />
            ) : (
              <FileNotSupported />
            )
          ) : (
            <FileNotSupported />
          )}
        </li>
      </ul>
    </div>
  );
};

export default FileContent;
