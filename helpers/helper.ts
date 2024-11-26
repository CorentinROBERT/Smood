import axios from 'axios';

export class Helper {
  static async isImageUrl(url: string) {
    try {
      const response = await fetch(url);
      const contentType = response.headers.get('Content-Type');

      // Vérifier si le type MIME correspond à un format d'image
      if (contentType && contentType.startsWith('image/')) {
        console.log('URL renvoie une image:', contentType);
        return true;
      } else {
        console.log('URL ne renvoie pas une image');
        console.log(url);
        return false;
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de l'URL:", error);
      return false;
    }
  }
}
