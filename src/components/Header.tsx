import PromethAILogo from "../assets/PromtethAILogo";

export default function Header() {
  return (
    <div className="flex sticky top-0 items-center justify-between w-full  px-32 py-8 text-white bg-primary">
      <div className="flex gap-3 items-center">
        <PromethAILogo size={24} />
        <span className="h6">
          Prometh<strong> AI</strong>
        </span>
        <div className="w-[2px] h-4 bg-white/40" />
        <span className="h6">Meal Agent</span>
      </div>
      <div>Menu</div>
    </div>
  );
}
