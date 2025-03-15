import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/modules/middleware/globalErrorhandler';
import cookieParser from "cookie-parser";
import { StatusCodes } from 'http-status-codes';
import os from 'os';
const app:Application=express()


// Middleware setup
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// -----api end point--------
app.use('/api',router);
// -----root api endpoint------
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const currentDateTime = new Date().toISOString();
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const serverHostname = os.hostname();
  const serverPlatform = os.platform();
  const serverUptime = os.uptime();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Smart Meal is running Now",
    version: "1.0.0",
    clientDetails: {
      ipAddress: clientIp,
      accessedAt: currentDateTime,
    },
    serverDetails: {
      hostname: serverHostname,
      platform: serverPlatform,
      uptime: `${Math.floor(serverUptime / 60 / 60)} hours ${Math.floor(
        (serverUptime / 60) % 60
      )} minutes`,
    },
    developerContact: {
      email: "ssjoy370@gmail.com",
      website: "https://shahsultan-islam-joy.vercel.app/",
    },
  });
});


app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found'
  })
})

app.use(globalErrorHandler);

export default app;