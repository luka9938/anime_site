// hooks/useRating.ts
const useRating = () => {
  const ratings = [
    { id: "G", name: "General Audiences" },
    { id: "PG", name: "Parental Guidance" },
    { id: "PG13", name: "Teens" },
    { id: "R17", name: "Violence & profanity" },
    { id: "R", name: "Mild Nudity" },
    { id: "Rx", name: "Hentai" },
  ];

  return { ratings };
};

export default useRating;
