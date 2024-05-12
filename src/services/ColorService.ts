import {AppDataSource} from "../database/app.datasource";
import Color from "../models/Color";
import {CreateColorDto} from "../dtos/CreateColorDto";

class ColorService {
    private colorRepository = AppDataSource.getRepository(Color);

    async createColor(data: CreateColorDto) {
        const color = this.colorRepository.create(data);
        return await this.colorRepository.save(color);
    }
}

export default new ColorService();