export default function Header() {
  return (
    <div className="sticky top-0 flex items-center justify-between w-full px-4 py-8 bg-white md:px-16 lg:px-32 text-primary">
      <div className="flex items-center gap-3">
        <span className="h6">
          Prometh<strong> AI</strong>
        </span>
        <div className="w-[2px] h-4 bg-primary/40" />
        <span className="h6">
          <strong>Meal Agent</strong>
        </span>
      </div>
      <div className="flex items-center gap-6 font-semibold text-md">
        <button>Technology</button>
        <button>Product</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
