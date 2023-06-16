import {
  FlexibleIcon,
  AdaptiveIcon,
  AugmentedIcon,
  AutomatedIcon,
} from "../assets/Icons";

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

function Card({ title, description, children }: CardProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-end w-16 h-16">{children}</div>
      <div className="flex flex-col w-full gap-2">
        <span className="h6">{title}</span>
        <span className="text-body-2">{description}</span>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <div className="grid grid-cols-2 px-16 py-16 bg-white lg:grid-cols-4 gap-x-12 gap-y-12 lg:px-32 ">
      <Card
        title="Flexible"
        description="Change your preferences to update the prompt, update the prompt to see preferences."
      >
        <FlexibleIcon size={48} />
      </Card>
      <Card
        title="Adaptive"
        description="Bidirectional AI generation helps adapt to your preferences changing."
      >
        <AdaptiveIcon />
      </Card>
      <Card
        title="Augmented"
        description="Consider multiple options at the same time, move quick, make better decisions."
      >
        <AugmentedIcon />
      </Card>
      <Card
        title="Automated"
        description="Not only does the AI help you find what you crave, it also helps you get there."
      >
        <AutomatedIcon size={48} />
      </Card>
    </div>
  );
}
