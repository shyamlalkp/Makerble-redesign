export const validateStory = (story: string): string | null => {
  if (story.trim().length < 3) {
    return "Story must be at least 3 characters long.";
  }
  return null;
};
