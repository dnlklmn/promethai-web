interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="bg-gray-200 w-12 h-12" />
      <span className="h6">{title}</span>
      <span className="body-2">{description}</span>
    </div>
  );
}

export default function Benefits() {
  return (
    <div className="bg-white grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 px-16 lg:px-32 py-16 ">
      <Card
        title="Flexible"
        description="Change your preferences to update the prompt, update the prompt to see preferences."
      />
      <Card
        title="Adaptive"
        description="Bidirectional AI generation helps adapt to your preferences changing."
      />
      <Card
        title="Augmented"
        description="Consider multiple options at the same time, move quick, make better decisions."
      />
      <Card
        title="Automated"
        description="Not only does the AI help you find what you crave, it also helps you get there."
      />
    </div>
  );
}
