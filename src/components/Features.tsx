
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🔍",
      title: "Ingredient Scan",
      description: "Take a photo of your ingredients, and our AI will identify them and suggest recipes",
    },
    {
      icon: "🍽️",
      title: "Dietary Filters",
      description: "Find recipes that match your dietary requirements, from gluten-free to vegan",
    },
    {
      icon: "🌏",
      title: "Global Cuisines",
      description: "Discover recipes from around the world based on your preferences",
    },
    {
      icon: "💪",
      title: "Nutritional Info",
      description: "Get detailed nutritional information for every recipe to support your fitness goals",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Smart Features
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Our AI-powered platform offers intelligent solutions to make cooking easier and more enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-3 p-6 border rounded-lg hover:shadow-md transition-shadow hover:border-primary"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
