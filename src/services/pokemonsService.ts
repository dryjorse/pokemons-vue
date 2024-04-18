import { $api } from "../constants/api";

class PokemonsService {
  getAll(offset) {
    return $api("pokemon", { params: { offset } });
  }
  getByUrl(url: string) {
    return $api(url);
  }
}

export default new PokemonsService();
