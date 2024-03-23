export const formatCreatedAt = (createdAt) => {
  const date = new Date(createdAt);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
