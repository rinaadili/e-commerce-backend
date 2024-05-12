import {Request, Response} from "express";
import SizeService from "../services/SizeService";
class SizeController {
    async createSize(req: Request, res: Response) {
        try {
            const size = await SizeService.createSize(req.body);
            return res.status(200).json({ size })
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }
}

export default new SizeController();