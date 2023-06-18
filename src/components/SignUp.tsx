import { useRef, useState } from "react";
import validator from "validator";

export default function SignUp() {
  const formRef = useRef(null);

  const [emailError, setEmailError] = useState(false);

  const validateEmail = (e: any) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

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
    <div className="flex items-center justify-center w-full py-12 bg-white">
      <div className="flex flex-col w-full gap-3 px-4 md:w-1/2 lg:w-1/3">
        <span className="text-sm md:base">Sign up for the private beta:</span>
        <form
          method="post"
          className="flex flex-col gap-2 "
          ref={formRef}
          name="google-sheet"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 h-fit md:flex-row">
            <input
              onChange={(e) => setTimeout(() => validateEmail(e), 3000)}
              name="email"
              className="w-full border-[1px] border-gray-300 rounded-md px-3 py-2"
              placeholder="Email"
            />
            <input
              disabled={emailError}
              className="px-3 py-2 text-white rounded-md cursor-pointer bg-primary whitespace-nowrap disabled:bg-primary/75"
              type="submit"
              value="Submit"
            />
          </div>
          {emailError && (
            <span className="h-0 text-sm text-red-500">
              Please provide a valid email
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
