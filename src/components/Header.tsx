import { MenuIcon } from "../assets/Icons";

export default function Header() {
  return (
    <div className="sticky flex items-center justify-between w-full px-4 py-8 bg-white h-fit md:px-16 lg:px-32 text-primary">
      <div className="flex items-center gap-3">
        <span className="text-gray-900 h6">
          Prometh<strong> AI</strong>
        </span>
        <div className="w-[2px] h-4 bg-gray-300" />
        <span className="h6">
          <strong>Meal Wizz</strong>
        </span>
      </div>
      {/* <div className="items-center hidden gap-6 font-semibold text-md md:flex ">
        <button>Technology</button>
        <button>Product</button>
        <button>Contact</button>
      </div>
      <MenuIcon className="block md:hidden" /> */}
    </div>
  );
}
