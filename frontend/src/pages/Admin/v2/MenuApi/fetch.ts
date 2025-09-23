import { Config } from "../../../../Config";
import type MenuItem from "../../../../types/menuItem";

export const fetchMenu = async (): Promise<MenuItem[]> => {
  //Async functions always return a Promise, even if you return a plain value.
  //Wrapping it in Promise<MenuItem[]> tells TS: “this is an async function, and when it resolves, it gives MenuItem[]”.
  try {
    const res = await fetch(`${Config.BASE_URL}/menu`);
    if (!res.ok) throw new Error("Failed to fetch menu.");
    //res.ok → Boolean indicating HTTP status is 200–299 (successful).
    //If not ok → we throw an error with a meaningful message.
    //This error will be caught in the catch block.
    const data: MenuItem[] = await res.json();
    //res.json() → Converts the HTTP response body to a JavaScript object.
    return data;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};
