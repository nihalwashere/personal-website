import { NavList } from "../../utils/config";

const Navs = () => (
  <div className="h-16 flex items-center justify-end bg-menu pr-16">
    {NavList.map((nav) => (
      <a
        key={nav?.id}
        className="text-sm mx-4 hover:text-primary cursor-pointer"
        rel="noopener noreferer"
      >
        <span className="text-primary mr-1">0{nav?.id}.</span> {nav?.title}
      </a>
    ))}
  </div>
);

export default Navs;
