import Icon from "../../components/icons/icon";
import { SocialList } from "../../utils/config";

const Social = () => (
  <div>
    <div className="hidden fixed bottom-0 left-10 px-12 md:flex flex-col items-center">
      {SocialList.map((social) => (
        <a
          key={social?.id}
          href={social?.link}
          className="mb-4 social-transform"
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

      <div className="w-[1px] h-20 bg-secondary m-0" />
    </div>

    <div className="flex justify-center items-center md:hidden">
      <div className="flex justify-between w-1/3 my-12">
        {SocialList.map((social) => (
          <a
            key={social?.id}
            href={social?.link}
            className="mb-4 social-transform"
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
      </div>
    </div>
  </div>
);

export default Social;
