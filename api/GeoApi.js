import axios from "axios";

export class GeoApi {
  static async getAddressFromName(address) {
    try {
      const response = (
        await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${address}&countrycodes=ch&format=json&addressdetails=1`
        )
      ).data;
      return response || [];
    } catch (error) {
      console.error("Error fetching address:", error.message);
      return [];
    }
  }
}
