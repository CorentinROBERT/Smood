import axios from 'axios';

export class SmoodAPI {
  static async getUnivers() {
    try {
      const response = (
        await axios.get(`https://api-rn-test.dev.smood.ch/universes`, {
          headers: {
            'x-app-authorization': 'smood-test-{corentin}-{robert}',
          },
        })
      ).data;
      return response || [];
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching:', error.message);
      } else {
        console.error('Error fetching:', String(error));
      }
      return [];
    }
  }

  static async getNewRestos() {
    try {
      const response = (
        await axios.get(`https://api-rn-test.dev.smood.ch/highlighted-stores`, {
          headers: {
            'x-app-authorization': 'smood-test-{corentin}-{robert}',
          },
        })
      ).data;
      return response || [];
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching:', error.message);
      } else {
        console.error('Error fetching:', String(error));
      }
      return [];
    }
  }

  static async getRestoList(page: number) {
    try {
      const response = await axios.get(`https://api-rn-test.dev.smood.ch/stores?page=${page}`, {
        headers: {
          'x-app-authorization': 'smood-test-{corentin}-{robert}',
        },
      });

      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching:', error.message);
      } else {
        console.error('Error fetching:', String(error));
      }
      throw error;
    }
  }
}
