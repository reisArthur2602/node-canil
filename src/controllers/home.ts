import { Request, Response } from 'express';

export const all = (req: Request, res: Response) => {
  res.render('pages/page');
};
export const dogs = (req: Request, res: Response) => {
  res.send('dogs');
};
export const cats = (req: Request, res: Response) => {
  res.send('cats');
};
export const fishes = (req: Request, res: Response) => {
  res.send('fishes');
};
