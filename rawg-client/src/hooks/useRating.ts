// hooks/useRating.ts
const useRating = () => {
  const ratings = [
    { id: "G", name: "General Audiences" },
    { id: "PG", name: "Parental Guidance" },
    { id: "PG-13", name: "Teens 13 or older" },
    { id: "R-17", name: "17+ (violence & profanity)" },
    { id: "R+", name: "Mild Nudity" },
    { id: "Rx", name: "Hentai" },
  ];

  return { ratings };
};

export default useRating;
