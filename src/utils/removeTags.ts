export const removeTags = (article: string): string => {
  const data = new DOMParser().parseFromString(article, "text/html");
  return data.body.textContent || "";
};
