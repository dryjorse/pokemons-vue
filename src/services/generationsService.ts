import { $api } from "@/constants/api";

class GenerationsService {
  getAll() {
    return $api("generation");
  }
  getByName(name: string) {
    return $api(`generation/${name}`);
  }
}

export default new GenerationsService();
