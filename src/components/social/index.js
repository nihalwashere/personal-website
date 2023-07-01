import Icon from "../../components/icons/icon";
import { SocialList } from "../../utils/config";

const Social = () => (
  <div className="fixed bottom-0 left-10 px-12 flex flex-col items-center">
    {SocialList.map((social) => (
      <a
        key={social?.id}
        href={social?.link}
        className="mb-4"
        rel="noopener noreferer"
        target="_blank"
      >
        <Icon
          name={social?.name}
          width={24}
          height={24}
          className="text-secondary hover:text-primary cursor-pointer"
        />
      </a>
    ))}

    <div className="w-[1px] h-20 bg-primary m-0" />
  </div>
);

export default Social;
