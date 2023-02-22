import pkg from "../../../package.json";
import { type CheckItem } from "./types";

export function findVersion(name: string) {
  // @ts-ignore
  const match = pkg?.dependencies?.[name]?.match(/(\d+\.\d+\.\d+)/);
  return match ? `@${match[1]}` : "";
}

function getCheck(check: "checked" | "unchecked" | "not-applicable"): string {
  if (check === "checked") {
    return "🟢";
  }

  if (check === "unchecked") {
    return "🟡";
  }

  return "⚪";
}

export function getChecks(item: CheckItem) {
  return `${getCheck(item.checkedIos)} ${getCheck(item.checkedAndroid)}`;
}

export function getTitle(item: CheckItem) {
  return item.title;
}
