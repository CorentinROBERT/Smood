import axios from "axios";

export class SmoodAPI {
  static async getUnivers() {
    try {
      const response = (
        await axios.get(
          `https://api-rn-test.dev.smood.ch/universes`,
          (config = {
            headers: "x-app-authorization:smood-test-{corentin}-{robert}",
          })
        )
      ).data;
      return response || [];
    } catch (error) {
      console.error("Error fetching :", error.message);
      return [];
    }
  }

  static async getNewRestos() {
    try {
      const response = (
        await axios.get(
          `https://api-rn-test.dev.smood.ch/highlighted-stores`,
          (config = {
            headers: "x-app-authorization:smood-test-{corentin}-{robert}",
          })
        )
      ).data;
      return response || [];
    } catch (error) {
      console.error("Error fetching :", error.message);
      return [];
    }
  }

  static async getRestoList(page) {
    try {
      const response = (
        await axios.get(
          `https://api-rn-test.dev.smood.ch/stores?page=${page}`,
          (config = {
            headers: "x-app-authorization:smood-test-{corentin}-{robert}",
          })
        )
      ).data;
      return response || [];
    } catch (error) {
      console.error("Error fetching :", error.message);
      return [];
    }
  }
}
