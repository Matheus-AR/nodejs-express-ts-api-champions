import { Request, Response } from "express"
import * as ClubService from "../services/clubs-service";

export const getClubs = async (req:Request, res: Response) => {
    const response = await ClubService.getClubService();
    res.status(response.statusCode).json(response.body)
};
