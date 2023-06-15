import recipe from "../assets/recipe.png";

function Feature({ title = "title", description = "description" }) {
  return (
    <div className="flex items-center justify-center w-full gap-12 py-12">
      <div className="flex items-center justify-center w-1/2 ">
        <img className="drop-shadow-img" src={recipe} alt="recipe" />
      </div>
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col gap-2">
          <span className="h5">{title}</span>
          <span className="body-1">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="grid grid-cols-1 px-16  lg:px-32 lg:grid-cols-2 gap-x-32">
      <Feature
        title="AI-Powered Personal Assistant"
        description="Receive personalized nutrition and productivity recommendations
            based on your preferences and habits, powered by ChatGPT technology."
      />
      <Feature
        title="Nearby Restaurant Suggestion"
        description="Explore a curated list of nearby restaurants, catering to your unique taste and nutritional needs.
        "
      />
      <Feature
        title="Food Delivery Integration"
        description="Browse a selection of food delivery options that align with your dietary preferences and goals."
      />
      <Feature
        title="Customized Recipe Recommendations"
        description="Discover tailored recipes to cook at home, suited to your taste and nutritional requirements."
      />
      <Feature
        title=" Intuitive User Interface"
        description="Effortlessly navigate the app with its user-friendly design and easy-to-use features."
      />
      <Feature
        title="Voice Input"
        description="Conveniently interact with the app using voice commands, making it even more accessible and user-friendly."
      />
    </div>
  );
}
