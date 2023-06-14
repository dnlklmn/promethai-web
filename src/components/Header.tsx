export default function Header() {
  return (
    <div className="flex sticky top-0 items-center justify-between w-full px-4 md:px-16 lg:px-32 py-8 text-primary bg-white">
      <div className="flex gap-3 items-center">
        <span className="h6">
          Prometh<strong> AI</strong>
        </span>
        <div className="w-[2px] h-4 bg-primary/40" />
        <span className="h6">
          <strong>Meal Agent</strong>
        </span>
      </div>
      <div>Menu</div>
    </div>
  );
}
