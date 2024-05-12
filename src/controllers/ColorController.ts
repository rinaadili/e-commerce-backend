import {Request, Response} from "express";
import ColorService from "../services/ColorService";
class ColorController {
    async createColor(req: Request, res: Response) {
        try {
            const color = await ColorService.createColor(req.body);
            return res.status(200).json({ color })
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }
}

export default new ColorController();