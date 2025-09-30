const currentDate = new Date();
export const getCurrentMonth = (lan: "fa" | "en") => {
  if (lan === "en") {
    return currentDate.getMonth();
  } else {
    const monthFa = currentDate.toLocaleDateString("fa-IR-u-nu-latn", {
      month: "numeric",
    });
    return Number(monthFa);
  }
};

export const getCurrentYear = (lan: "fa" | "en") => {
  if (lan === "en") {
    return currentDate.getFullYear();
  } else {
    const yearFa = currentDate.toLocaleDateString("fa-IR-u-nu-latn", {
      year: "numeric",
    });
    return Number(yearFa);
  }
};
