import recipe from "../assets/recipe.png";
import { useRef } from "react";

export default function Hero() {
  const formRef = useRef(null);

  return (
    <div className="flex items-center justify-center gap-20 w-full px-16">
      <div className="w-1/3 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="h3">At your service</span>
          <span className="body-1">
            Your personal assistant helps you decide your next meal, as well as
            how you’ll get it in your mouth.
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="body-1">Sign up for the private beta:</span>
          <form
            method="post"
            className="flex gap-2"
            ref={formRef}
            name="google-sheet"
          >
            <input
              className="w-full border-[1px] border-gray-300 rounded-md px-3"
              placeholder="Email"
            />
            <input
              className="px-6 py-3 text-white bg-primary rounded-md whitespace-nowrap cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
      <div className="w-[250px] h-[480px] flex items-center justify-center ">
        <img className="drop-shadow-img" src={recipe} alt="recipe" />
      </div>
    </div>
  );
}
