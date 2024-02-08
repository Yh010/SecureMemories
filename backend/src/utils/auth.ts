import jwt from "jsonwebtoken";
import { Response } from "express";

interface TokenPayload {
  userId: string;
  userEmail: string;
  roles: string[];
}

const generateToken = (res: Response, payload: TokenPayload) => {
  const jwtSecret = process.env.JWT_SECRET || "";
  const plainObjectPayload: Record<string, any> = { ...payload };

  const token = jwt.sign(plainObjectPayload, jwtSecret, {
    expiresIn: "1h",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 60 * 60 * 1000,
  });
};

const clearToken = (res: Response) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
};

export { generateToken, clearToken };