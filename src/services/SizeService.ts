import {AppDataSource} from "../database/app.datasource";
import Size from "../models/Size";
import {CreateSizeDto} from "../dtos/CreateSizeDto";

class SizeService {
    private sizeRepository = AppDataSource.getRepository(Size);

    async createSize(data: CreateSizeDto) {
        const size = this.sizeRepository.create(data);
        return await this.sizeRepository.save(size);
    }
}

export default new SizeService();