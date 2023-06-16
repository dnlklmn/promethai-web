import recipe from "../assets/recipe.png";
import { useRef } from "react";

export default function Hero() {
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyywII96jj7fQJfwLvXmFnFHk3ogWGNIM0_i--YrCPJySsmhCUdoGYWI9XDn5OFBgILww/exec";

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current as unknown as HTMLFormElement),
    })
      .then(() => {
        console.log("SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center w-full gap-20 px-16">
      <div className="flex flex-col w-1/3 gap-8">
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
            onSubmit={handleSubmit}
          >
            <input
              className="w-full border-[1px] border-gray-300 rounded-md px-3"
              placeholder="Email"
            />
            <input
              className="px-6 py-3 text-white rounded-md cursor-pointer bg-primary whitespace-nowrap"
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
