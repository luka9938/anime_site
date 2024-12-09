const useRating = () => {
  // Define a mapping for ratings to user-friendly names
  const ratings = [
    { id: "PG - Children", name: "Parental Guidance" },
    { id: "PG-13 - Teens 13 or older", name: "Teens 13+" },
    {
      id: "R - 17+ (violence & profanity)",
      name: "Violence & Profanity",
    },
    { id: "R+ - Mild Nudity", name: "Mild Nudity" },
  ];

  return { ratings };
};

export default useRating;
