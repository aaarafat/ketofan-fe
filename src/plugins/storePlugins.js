import { $api } from "../services/api";
import { $auth } from "../services/auth";

export default function (store) {
  try {
    store.$api = $api;
    store.$auth = $auth;
  } catch (e) {
    console.error(e);
  }
}
