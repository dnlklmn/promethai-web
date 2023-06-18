import { OpenAILogo, PineconeLogo, ReplicateLogo } from "../assets/Icons";

export default function Logos() {
  return (
    <div className="flex flex-col items-center gap-6 py-8 bg-white">
      <span className="text-xs text-gray-600">Powered by</span>
      <div className="flex items-center justify-center gap-6 lg:gap-12 ">
        <ReplicateLogo className="h-4 md:h-5 lg:h-6" />
        <span className="text-sm font-semibold md:text-base lg:text-xl whitespace-nowrap">
          🦜️🔗 LangChain
        </span>
        <OpenAILogo className="h-4 md:h-5 lg:h-6" />
        <PineconeLogo className="h-4 md:h-5 lg:h-6" />
      </div>
    </div>
  );
}
