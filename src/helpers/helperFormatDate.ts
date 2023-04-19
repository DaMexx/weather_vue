export const formatDate = (dateString: string): string => {
  const months: string[] = [
    "Янв",
    "Фев",
    "Март",
    "Апр",
    "Мая",
    "Июня",
    "Июля",
    "Авг",
    "Сент",
    "Окт",
    "Ноя",
    "Дек",
  ];
  const checkDate = new Date();
  const todayISOString = checkDate.toISOString().split("T")[0];

  if (todayISOString === dateString) {
    return "Сегодня";
  } else {
    const dateParts = dateString.split("-");
    const day = dateParts[2];
    const monthName = months[parseInt(dateParts[1], 10) - 1];
    return `${day} ${monthName}`;
  }
};
