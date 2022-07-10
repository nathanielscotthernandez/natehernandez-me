import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const handleMenuClick = () => {
    return;
  };

  return (
    <div className="px-6 py-6 flex flex-row items-center justify-between">
      <div>
        <FontAwesomeIcon
          icon={faTerminal}
          className="w-6 h-6"
        ></FontAwesomeIcon>
      </div>
      <div className="flex flex-row items-center gap-6">
        <button className="py-1 px-2 bg-amber-500 font-bold text-white rounded-lg">
          Projects
        </button>
        <div
          onClick={handleMenuClick}
          className="flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6"></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Nav;
