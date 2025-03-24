export const formatDate = (date: Date | null): string | null => {
  if (date) {
    const dateFromString: Date = new Date(date);

    return `${dateFromString.getDate()}/${
      dateFromString.getMonth() + 1
    }/${dateFromString.getFullYear()}`;
  } else {
    return null;
  }
};
