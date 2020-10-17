const timeAdder = (...args) => {
    const [val1, label1, val2, label2] = args;
    if (typeof val1 !== "number" || typeof val2 !== "number") return false;
    if (
      (val1 === 1 &&
        (label1 === "seconds" ||
          label1 === "minutes" ||
          label1 === "hours" ||
          label1 === "days")) ||
      (val2 === 1 &&
        (label2 === "seconds" ||
          label2 === "minutes" ||
          label2 === "hours" ||
          label2 === "days"))
    ) {
      return false;
    }
    if (
      (val1 > 1 &&
        (label1 === "second" ||
          label1 === "minute" ||
          label1 === "hour" ||
          label1 === "day")) ||
      (val2 > 1 &&
        (label2 === "second" ||
          label2 === "minute" ||
          label2 === "hour" ||
          label2 === "day"))
    ) {
      return false;
    }
    let time_1;
    let time_2;
    switch (label1) {
      case "second":
      case "seconds":
        time_1 = val1;
        break;
      case "minute":
      case "minutes":
        time_1 = val1 * 60;
        break;
      case "hour":
      case "hours":
        time_1 = val1 * 60 * 60;
        break;
      case "day":
      case "days":
        time_1 = val1 * 24 * 60 * 60;
        break;
      default:
        return false;
    }
    switch (label2) {
      case "second":
      case "seconds":
        time_2 = val2;
        break;
      case "minute":
      case "minutes":
        time_2 = val2 * 60;
        break;
      case "hour":
      case "hours":
        time_2 = val2 * 60 * 60;
        break;
      case "day":
      case "days":
        time_2 = val2 * 24 * 60 * 60;
        break;
      default:
        return false;
    }
    const total = time_1 + time_2;
    console.log("total ", total);
  
    if (total < 60) {
      return [total, "seconds"];
    } else if (total < 3600) {
      return [total / 60, "minutes"];
    } else if (total < 86400) {
      return [total / 60 / 60, "hours"];
    } else if (total === 86400) {
      return [total / 60 / 60, "hours"];
    } else if (total === 86400) {
      return [total / 24 / 60 / 60, "day"];
    } else if (total > 86400) {
      return [Math.ceil(total / 60 / 60 / 60), "days"];
    }
  };
  
  const result = timeAdder(36, "hours", 1, "hour");
  