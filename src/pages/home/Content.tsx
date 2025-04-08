import { DirectoriesList } from "../../components/directorieslist";
import Readme from "./Readme";
import { structure } from "../../constants";
import Header from "./Header";

interface ContentHeaderTagProps {
  image: string;
  text: string;
  styles?: string;
}

const ContentHeaderTag = ({ image, text, styles }: ContentHeaderTagProps) => {
  return (
    <div className={`flex flex-row items-center space-x-1 ${styles}`}>
      <img
        src={`/assets/${image}.svg`}
        alt={image}
        className="size-4"
      />
      <p className="whitespace-nowrap text-sm text-gray">{text}</p>
    </div>
  );
};

const ContentHeader = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="flex flex-row items-center space-x-2">
        <img
          src="/assets/profile.png"
          alt="profile"
          className="size-5 rounded-full border-[1px] border-gray-border"
        />
        <button
          onClick={() => {
            window.open("https://github.com/abhaysinghal126", "_blank");
          }}
        >
          <h1 className="text-sm font-bold text-secondary hover:underline">
            Abhay Singhal
          </h1>
        </button>
      </div>
      <ContentHeaderTag
        image="profession"
        text="Data Scientist"
        styles="hidden lg:flex md:flex sm:flex"
      />
      <ContentHeaderTag
        image="star"
        text="AI/ML and Full Stack Specialist"
        styles="hidden lg:flex md:flex"
      />
      <ContentHeaderTag
        image="location_pin"
        text="Hetauda, Nepal"
        styles="hidden lg:flex"
      />
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full sm:w-[73.75%]">
      <Header />
      <DirectoriesList topItem={<ContentHeader />} items={structure} />
      <Readme />
    </div>
  );
};

export default Content;
