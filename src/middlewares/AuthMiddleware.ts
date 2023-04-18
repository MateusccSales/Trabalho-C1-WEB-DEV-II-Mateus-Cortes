import { Request, Response, NextFunction } from 'express';

const isAuthenticated = true;
const isManager = false;

export function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (isAuthenticated) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
}

export function ManagerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (isManager) {
    next();
  } else {
    res.status(405).json({ message: 'Not Allowed' });
  }
}
