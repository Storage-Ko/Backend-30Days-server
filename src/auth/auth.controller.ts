import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}
    @Post('signup')
    signUp(
        @Req() request: Request,
        @Res() response: Response
    ): Promise<string> {
        return this.authService.signUp(request, response);
    }

    @Post('login')
    signIn(
        @Req() request: Request,
        @Res() response: Response
    ): Promise<Object> {
        return this.authService.signIn(request, response);
    }
}